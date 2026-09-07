import { useBuilderStore } from '../stores/builderStore';

export function useSnapGrid() {
  const snapEnabled = useBuilderStore(state => state.snapEnabled);

  const snapValue = (value) => {
    if (!snapEnabled) return value;
    return Math.round(value / 10) * 10;
  };

  const snapPosition = (x, y) => {
    if (!snapEnabled) return { x, y };
    return {
      x: Math.round(x / 10) * 10,
      y: Math.round(y / 10) * 10,
    };
  };

  return {
    snapEnabled,
    snapValue,
    snapPosition,
  };
}
