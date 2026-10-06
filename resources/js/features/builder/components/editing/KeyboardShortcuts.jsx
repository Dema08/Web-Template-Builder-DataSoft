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
    isPreviewMode,
  } = useBuilderStore();

  // Helper: find component (recursive) and check if it's locked
  const isSelectedComponentLocked = () => {
    if (!selectedSectionId || !selectedComponentId) return false;
    const section = sections.find(s => s.id === selectedSectionId);
    if (!section) return false;
    const findInTree = (comps) => {
      for (const c of comps) {
        if (c.id === selectedComponentId) return c;
        if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
          const found = findInTree(c.childrenComponents);
          if (found) return found;
        }
      }
      return null;
    };
    const comp = findInTree(section.components || []);
    return !!(comp?.isLocked);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isPreviewMode) return;

      // Do NOT trigger canvas/component shortcuts if user is typing or focused inside an input, textarea, or editable element
      const activeElement = document.activeElement;
      const isInputFocused =
        activeElement &&
        (activeElement.tagName === 'INPUT' ||
          activeElement.tagName === 'TEXTAREA' ||
          activeElement.tagName === 'SELECT' ||
          activeElement.isContentEditable ||
          activeElement.closest('input, textarea, select, [contenteditable="true"]'));

      if (isInputFocused) {
        return;
      }

      const key = e.key ? e.key.toLowerCase() : '';

      // Ctrl/Cmd + Z = Undo
      if ((e.ctrlKey || e.metaKey) && key === 'z' && !e.shiftKey) {
        e.preventDefault();
        undo();
      }
      // Ctrl/Cmd + Shift + Z = Redo
      if ((e.ctrlKey || e.metaKey) && key === 'z' && e.shiftKey) {
        e.preventDefault();
        redo();
      }
      // Ctrl/Cmd + C = Copy
      if ((e.ctrlKey || e.metaKey) && key === 'c') {
        if (selectedSectionId && selectedComponentId) {
          e.preventDefault();
          copyComponent(selectedSectionId, selectedComponentId);
        }
      }
      // Ctrl/Cmd + V = Paste
      if ((e.ctrlKey || e.metaKey) && key === 'v') {
        if (selectedSectionId) {
          e.preventDefault();
          pasteComponent(selectedSectionId);
        }
      }
      // Ctrl/Cmd + D = Duplicate
      if ((e.ctrlKey || e.metaKey) && key === 'd') {
        if (selectedSectionId && selectedComponentId) {
          e.preventDefault();
          duplicateComponent(selectedSectionId, selectedComponentId);
        }
      }
      // Delete = Remove
      if (e.key === 'Hapus' || e.key === 'Backspace') {
        if (selectedSectionId && selectedComponentId) {
          if (isSelectedComponentLocked()) return; // refuse if locked
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
  }, [selectedSectionId, selectedComponentId, isPreviewMode, undo, redo, copyComponent, pasteComponent, duplicateComponent, removeComponent, removeSection]);

  return null;
}
