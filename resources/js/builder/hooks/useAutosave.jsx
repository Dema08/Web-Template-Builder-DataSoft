import { useEffect, useRef, useState } from 'react';
import { useBuilderStore } from '../stores/builderStore';
import { templateApi } from '@api';

export default function useAutosave() {
  const [saveStatus, setSaveStatus] = useState('idle'); // 'idle' | 'saving' | 'saved' | 'error'
  const timerRef = useRef(null);
  const lastSavedRef = useRef(null);

  const sections = useBuilderStore(state => state.sections);
  const templateId = useBuilderStore(state => state.templateId);
  const templateName = useBuilderStore(state => state.templateName);
  const status = useBuilderStore(state => state.status);
  const setIsSaving = useBuilderStore(state => state.setIsSaving);

  // Debounced autosave - triggers 1.5 seconds after last change
  useEffect(() => {
    if (!templateId) return;

    // Clear previous timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Skip if sections are empty (no changes to save)
    if (sections.length === 0) return;

    // Set status to "unsaved"
    setSaveStatus('unsaved');

    // Set timer for autosave
    timerRef.current = setTimeout(async () => {
      try {
        setSaveStatus('saving');
        setIsSaving(true);

        const payload = {
          name: templateName || 'Untitled Template',
          draft_json: {
            sections: sections.map(s => ({
              type: s.type,
              layout: s.layout,
              components: s.components,
              styles: s.styles || {},
            })),
          },
          status: status,
        };

        await templateApi.update(templateId, payload);
        lastSavedRef.current = JSON.stringify(payload);
        setSaveStatus('saved');

        // Reset to idle after 3 seconds
        setTimeout(() => {
          setSaveStatus('idle');
        }, 3000);
      } catch (error) {
        console.error('Autosave failed:', error);
        setSaveStatus('error');
      } finally {
        setIsSaving(false);
      }
    }, 1500);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [sections, templateId, templateName, status, setIsSaving]);

  // Save on unmount/page leave
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (saveStatus === 'unsaved' && templateId) {
        // Attempt to save synchronously (best effort)
        const state = useBuilderStore.getState();
        const payload = {
          name: state.templateName || 'Untitled Template',
          draft_json: {
            sections: state.sections.map(s => ({
              type: s.type,
              layout: s.layout,
              components: s.components,
              styles: s.styles || {},
            })),
          },
          status: state.status,
        };
        navigator.sendBeacon?.('/api/templates/' + templateId + '/autosave', JSON.stringify(payload));
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [saveStatus, templateId]);

  return { saveStatus };
}