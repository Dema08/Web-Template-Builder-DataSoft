import { useState, useCallback } from 'react';
import { useBuilderStore } from '../stores/builderStore';
import { toast } from '@store';

export function useBuilderDnd() {
  const [activeDragItem, setActiveDragItem] = useState(null);
  const [overTarget, setOverTarget] = useState(null);

  const {
    sections,
    reorderSections,
    insertSectionAt,
    insertComponentAt,
    moveComponent,
    updateComponentProps,
    selectSection,
    selectComponent,
  } = useBuilderStore();

  const handleDragStart = useCallback((event) => {
    const { active } = event;
    const data = active.data?.current;

    if (data?.isSidebarItem) {
      setActiveDragItem({
        type: `sidebar-${data.sidebarType}`,
        rawType: data.sidebarType,
        data: data.payload,
        title: data.title,
        preview: data.preview,
      });
      return;
    }

    const activeIdStr = String(active.id);

    // Canvas section dragging
    if (activeIdStr.startsWith('section-') || sections.some(s => s.id === activeIdStr)) {
      const section = sections.find(s => s.id === activeIdStr);
      setActiveDragItem({
        type: 'canvas-section',
        id: activeIdStr,
        data: section,
        title: section ? `${section.type.toUpperCase()} (${section.layout})` : 'Section',
      });
      return;
    }

    // Canvas component dragging
    setActiveDragItem({
      type: 'canvas-component',
      id: activeIdStr,
      data: active.data?.current || {},
      title: active.data?.current?.type || 'Component',
    });
  }, [sections]);

  const handleDragOver = useCallback((event) => {
    const { over } = event;
    if (!over) {
      setOverTarget(null);
      return;
    }

    setOverTarget({
      id: over.id,
      data: over.data?.current,
    });
  }, []);

  const handleDragCancel = useCallback(() => {
    setActiveDragItem(null);
    setOverTarget(null);
  }, []);

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event;
    setActiveDragItem(null);
    setOverTarget(null);

    if (!over) return;

    const activeData = active.data?.current;
    const overData = over.data?.current;
    const overId = String(over.id);
    const activeId = String(active.id);

    // -------------------------------------------------------------
    // 1. SIDEBAR ITEM DROPPED
    // -------------------------------------------------------------
    if (activeData?.isSidebarItem) {
      const sidebarType = activeData.sidebarType;
      const payload = activeData.payload || {};

      // A. Drop Section / Layout
      if (sidebarType === 'section' || sidebarType === 'layout') {
        const secType = sidebarType === 'section' 
          ? (payload.id || 'hero') 
          : (payload.sectionType || payload.id || 'hero');
        const layoutId = sidebarType === 'layout' ? payload.id : null;

        // Determine target drop index
        let targetIndex = sections.length;
        if (overId.startsWith('dropzone-section-')) {
          const indexStr = overId.replace('dropzone-section-', '');
          targetIndex = parseInt(indexStr, 10);
        } else if (overId.startsWith('section-') || sections.some(s => s.id === overId)) {
          const secIdx = sections.findIndex(s => s.id === overId);
          if (secIdx !== -1) {
            targetIndex = secIdx + 1; // Insert after target section
          }
        }

        insertSectionAt(secType, layoutId, targetIndex);
        toast.success(`Added ${secType} section to canvas`, 'Section Inserted');
        return;
      }

      // B. Drop Component
      if (sidebarType === 'component') {
        const compType = payload.id || 'text';
        let targetSectionId = null;
        let targetIndex = -1;
        let targetParentCompId = null;

        if (overId.startsWith('component-drop-')) {
          // Dropped on a specific component position
          targetSectionId = overData?.sectionId;
          targetIndex = overData?.index !== undefined ? overData.index : -1;
          targetParentCompId = overData?.parentComponentId || null;
        } else if (overId.startsWith('section-') || sections.some(s => s.id === overId)) {
          targetSectionId = overId;
        } else if (sections.length > 0) {
          targetSectionId = sections[0].id;
        }

        if (targetSectionId) {
          insertComponentAt(targetSectionId, compType, targetIndex, targetParentCompId);
          toast.success(`Added ${compType} component`, 'Component Inserted');
        } else {
          // If no section exists, create a default section first then add component
          insertSectionAt('hero', null, 0);
          setTimeout(() => {
            const firstSec = useBuilderStore.getState().sections[0];
            if (firstSec) {
              insertComponentAt(firstSec.id, compType, 0);
            }
          }, 20);
          toast.success(`Created section and added ${compType} component`, 'Component Inserted');
        }
        return;
      }

      // C. Drop Media (Image / Logo / Upload)
      if (sidebarType === 'media') {
        const imageUrl = payload.url || activeData.preview;
        const imageName = payload.name || 'Image';

        let targetSectionId = overData?.sectionId || (sections.length > 0 ? sections[0].id : null);
        let targetCompId = overData?.componentId || null;

        if (targetCompId && targetSectionId) {
          // Replace image in existing component
          updateComponentProps(targetSectionId, targetCompId, { src: imageUrl, alt: imageName });
          toast.success(`Applied image to component`, 'Image Updated');
        } else if (targetSectionId) {
          // Insert new image component into section
          insertComponentAt(targetSectionId, 'image', -1, null, { src: imageUrl, alt: imageName });
          toast.success(`Image added to section`, 'Image Component Added');
        } else {
          toast.info('Please add a section first', 'Notice');
        }
        return;
      }

      // D. Drop Icon
      if (sidebarType === 'icon') {
        const iconName = payload.name || payload.id || 'Star';
        let targetSectionId = overData?.sectionId || (sections.length > 0 ? sections[0].id : null);
        let targetCompId = overData?.componentId || null;

        if (targetCompId && targetSectionId) {
          updateComponentProps(targetSectionId, targetCompId, { name: iconName, icon: iconName });
          toast.success(`Updated icon to ${iconName}`, 'Icon Updated');
        } else if (targetSectionId) {
          insertComponentAt(targetSectionId, 'icon', -1, null, { name: iconName, icon: iconName });
          toast.success(`Added ${iconName} icon to canvas`, 'Icon Added');
        }
        return;
      }
    }

    // -------------------------------------------------------------
    // 2. CANVAS SECTION REORDERING
    // -------------------------------------------------------------
    const activeIsSection = sections.some(s => s.id === activeId);
    const overIsSection = sections.some(s => s.id === overId);

    if (activeIsSection && overIsSection && activeId !== overId) {
      const oldIndex = sections.findIndex(s => s.id === activeId);
      const newIndex = sections.findIndex(s => s.id === overId);

      if (oldIndex !== -1 && newIndex !== -1) {
        const newSections = [...sections];
        const [moved] = newSections.splice(oldIndex, 1);
        newSections.splice(newIndex, 0, moved);

        const reordered = newSections.map((s, i) => ({ ...s, order: i }));
        reorderSections(reordered);
        selectSection(activeId);
        toast.success('Section position updated', 'Reordered');
        return;
      }
    }

    // -------------------------------------------------------------
    // 3. CANVAS COMPONENT REORDERING / MOVING (NESTED SUPPORT)
    // -------------------------------------------------------------
    if (activeData?.isCanvasComponent || activeId.startsWith('comp-') || activeId.startsWith('component-')) {
      const sourceSectionId = activeData?.sectionId;
      const targetSectionId = overData?.sectionId || (overIsSection ? overId : sourceSectionId);
      const targetIndex = overData?.index !== undefined ? overData.index : -1;
      const targetParentId = overData?.parentComponentId || null;

      if (sourceSectionId && targetSectionId) {
        moveComponent(sourceSectionId, targetSectionId, activeId, targetIndex, targetParentId);
        selectComponent(activeId, targetSectionId);
        toast.success('Component moved successfully', 'Repositioned');
      }
    }
  }, [
    sections,
    reorderSections,
    insertSectionAt,
    insertComponentAt,
    moveComponent,
    updateComponentProps,
    selectSection,
    selectComponent,
  ]);

  return {
    activeDragItem,
    overTarget,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    handleDragCancel,
  };
}
