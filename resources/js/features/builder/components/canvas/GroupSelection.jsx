import { useBuilderStore } from '../../stores/builderStore';
import { Layers, Folder, ChevronDown, ChevronRight, Ungroup } from 'lucide-react';

export default function GroupSection({ sectionId, components }) {
  const { selectedLayers, ungroupComponents, selectComponent, selectedComponentId } = useBuilderStore();

  // Group components by groupId
  const groupsMap = {};
  const ungrouped = [];

  components.forEach(c => {
    const groupId = c.position?.groupId;
    if (groupId) {
      if (!groupsMap[groupId]) groupsMap[groupId] = [];
      groupsMap[groupId].push(c);
    } else {
      ungrouped.push(c);
    }
  });

  return {
    groupsMap,
    ungrouped,
  };
}
