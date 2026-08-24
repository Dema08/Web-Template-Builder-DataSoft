import { useEffect, useRef, useState } from 'react';
import { useBuilderStore } from '../stores/builderStore';
import { templateApi } from '@api';

export const getLocalDraftKey = (id) => `datasoft_builder_draft_${id || 'create'}`;

export const loadLocalDraft = (id) => {
  try {
    const raw = localStorage.getItem(getLocalDraftKey(id));
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.warn('Failed to load local builder draft:', e);
    return null;
  }
};

export const clearLocalDraft = (id) => {
  try {
    localStorage.removeItem(getLocalDraftKey(id));
  } catch (e) {
    console.warn('Failed to clear local builder draft:', e);
  }
};

export const saveLocalDraft = (id, payload) => {
  try {
    localStorage.setItem(getLocalDraftKey(id), JSON.stringify({
      ...payload,
      updatedAt: Date.now(),
    }));
  } catch (e) {
    console.warn('Failed to save local builder draft:', e);
  }
};

export default function useAutosave() {
  const [saveStatus, setSaveStatus] = useState('idle'); // 'idle' | 'saving' | 'saved' | 'error'
  const timerRef = useRef(null);

  const sections = useBuilderStore(state => state.sections);
  const templateId = useBuilderStore(state => state.templateId);
  const templateName = useBuilderStore(state => state.templateName);
  const industryId = useBuilderStore(state => state.industryId);
  const industrySlug = useBuilderStore(state => state.industrySlug);
  const industryName = useBuilderStore(state => state.industryName);
  const status = useBuilderStore(state => state.status);
  const setIsSaving = useBuilderStore(state => state.setIsSaving);

  // Sync state to LocalStorage on every modification (both /create and /:id)
  useEffect(() => {
    if (sections.length > 0 || industryId) {
      saveLocalDraft(templateId, {
        sections,
        templateId,
        templateName,
        industryId,
        industrySlug,
        industryName,
        status,
      });
    }
  }, [sections, templateId, templateName, industryId, industrySlug, industryName, status]);

  // Debounced autosave to Backend API (only if templateId exists)
  useEffect(() => {
    if (!templateId) return;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (sections.length === 0) return;

    setSaveStatus('unsaved');

    timerRef.current = setTimeout(async () => {
      try {
        setSaveStatus('saving');
        setIsSaving(true);

        const payload = {
          name: templateName || 'Untitled Template',
          draft_json: {
            sections: sections.map(s => ({
              id: s.id,
              type: s.type,
              layout: s.layout,
              components: s.components,
              styles: s.styles || {},
            })),
          },
          status: status,
        };

        await templateApi.update(templateId, payload);
        setSaveStatus('saved');

        setTimeout(() => {
          setSaveStatus('idle');
        }, 3000);
      } catch (error) {
        console.error('Autosave failed:', error);
        setSaveStatus('error');
      } finally {
        setIsSaving(false);
      }
    }, 2000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [sections, templateId, templateName, status, setIsSaving]);

  return { saveStatus };
}