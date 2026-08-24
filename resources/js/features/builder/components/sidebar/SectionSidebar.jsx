import { useBuilderStore } from '../../stores/builderStore';
import { getIndustryConfig } from '../../utils/industryConfigs';
import SectionItem from './SectionItem';

export default function SectionSidebar() {
  const { industrySlug, sections } = useBuilderStore();

  const industryConfig = industrySlug ? getIndustryConfig(industrySlug) : null;
  const availableSections = industryConfig?.sections || [];

  return (
    <div className="p-4">
      <h2 className="text-sm font-bold text-slate-900 mb-4">Section Library</h2>

      <div className="space-y-2">
        {availableSections.map((sectionConfig) => {
          const isAdded = sections.some(s => s.type === sectionConfig.type);

          return (
            <SectionItem
              key={sectionConfig.type}
              sectionConfig={sectionConfig}
              isAdded={isAdded}
            />
          );
        })}
      </div>

      {!industrySlug && (
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
          <p className="text-xs text-amber-800">
            Please select an industry category first to see available sections.
          </p>
        </div>
      )}
    </div>
  );
}
