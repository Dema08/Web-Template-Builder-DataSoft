import { useEffect } from 'react';
import { useBuilderStore } from '../../stores/builderStore';

export default function KeyboardShortcuts() {
  const {
    sections,
    selectedSectionId,
    selectedComponentId,
    undo,
    redo,
    copyComponent,
    pasteComponent,
    duplicateComponent,
    removeComponent,
    removeSection,
  } = useBuilderStore();

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl/Cmd + Z = Undo
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        undo();
      }
      // Ctrl/Cmd + Shift + Z = Redo
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && e.shiftKey) {
        e.preventDefault();
        redo();
      }
      // Ctrl/Cmd + C = Copy
      if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        if (selectedSectionId && selectedComponentId) {
          e.preventDefault();
          copyComponent(selectedSectionId, selectedComponentId);
        }
      }
      // Ctrl/Cmd + V = Paste
      if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
        if (selectedSectionId) {
          e.preventDefault();
          pasteComponent(selectedSectionId);
        }
      }
      // Ctrl/Cmd + D = Duplicate
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        if (selectedSectionId && selectedComponentId) {
          e.preventDefault();
          duplicateComponent(selectedSectionId, selectedComponentId);
        }
      }
      // Delete = Remove
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (selectedSectionId && selectedComponentId) {
          e.preventDefault();
          removeComponent(selectedSectionId, selectedComponentId);
        } else if (selectedSectionId) {
          e.preventDefault();
          removeSection(selectedSectionId);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedSectionId, selectedComponentId]);

  return null;
}
