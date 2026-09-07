import { useBuilderStore } from '../stores/builderStore';

export function useGroupSelection() {
  const { selectedLayers, toggleComponentSelection, groupComponents, ungroupComponents, clearSelection } = useBuilderStore();

  const handleSelectWithShift = (e, componentId) => {
    if (e.shiftKey) {
      e.stopPropagation();
      toggleComponentSelection(componentId);
    }
  };

  return {
    selectedLayers,
    handleSelectWithShift,
    groupComponents,
    ungroupComponents,
    clearSelection,
  };
}
