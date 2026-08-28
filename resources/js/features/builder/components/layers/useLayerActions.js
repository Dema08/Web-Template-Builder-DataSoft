import { useBuilderStore } from '../../stores/builderStore';

export function useLayerActions(sectionId) {
  const {
    bringForward,
    sendBackward,
    bringToFront,
    sendToBack,
    removeComponent,
    toggleLockComponent,
    toggleVisibilityComponent,
    selectComponent,
  } = useBuilderStore();

  return {
    handleBringForward: (componentId) => bringForward(sectionId, componentId),
    handleSendBackward: (componentId) => sendBackward(sectionId, componentId),
    handleBringToFront: (componentId) => bringToFront(sectionId, componentId),
    handleSendToBack: (componentId) => sendToBack(sectionId, componentId),
    handleDelete: (componentId) => removeComponent(sectionId, componentId),
    handleToggleLock: (componentId) => toggleLockComponent(sectionId, componentId),
    handleToggleVisibility: (componentId) => toggleVisibilityComponent(sectionId, componentId),
    handleSelect: (componentId) => selectComponent(componentId, sectionId),
  };
}
