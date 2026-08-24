import { useState } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import * as FaIcons from 'react-icons/fa';
import { Search, Plus } from 'lucide-react';
import { toast } from '@store';

const FEATURED_ICONS = [
  { key: 'FaTruck', label: 'Truck / Logistics' },
  { key: 'FaBuilding', label: 'Building / Corporate' },
  { key: 'FaStore', label: 'Store / UMKM' },
  { key: 'FaGraduationCap', label: 'Graduation / Education' },
  { key: 'FaUsers', label: 'Users / Team' },
  { key: 'FaIndustry', label: 'Industry / Factory' },
  { key: 'FaHandshake', label: 'Handshake / Partnership' },
  { key: 'FaShoppingCart', label: 'Cart / E-Commerce' },
  { key: 'FaLeaf', label: 'Leaf / Organic' },
  { key: 'FaGlobe', label: 'Globe / World' },
  { key: 'FaPhone', label: 'Phone' },
  { key: 'FaEnvelope', label: 'Envelope' },
  { key: 'FaStar', label: 'Star' },
  { key: 'FaHeart', label: 'Heart' },
  { key: 'FaCheck', label: 'Check' },
  { key: 'FaShieldAlt', label: 'Shield / Security' },
  { key: 'FaRocket', label: 'Rocket' },
  { key: 'FaWrench', label: 'Wrench / Tools' },
  { key: 'FaCamera', label: 'Camera' },
  { key: 'FaBriefcase', label: 'Briefcase' },
  { key: 'FaChartBar', label: 'Chart' },
  { key: 'FaAward', label: 'Award / Trophy' },
  { key: 'FaBox', label: 'Box / Package' },
  { key: 'FaCog', label: 'Settings / Gear' },
  { key: 'FaMapMarkerAlt', label: 'Location Pin' },
  { key: 'FaLock', label: 'Lock' },
  { key: 'FaClock', label: 'Clock' },
  { key: 'FaLaptopCode', label: 'Laptop / Tech' },
  { key: 'FaCoins', label: 'Coins / Finance' },
  { key: 'FaHeadset', label: 'Support / Headset' },
  { key: 'FaBullhorn', label: 'Announcement' },
  { key: 'FaCalendarAlt', label: 'Calendar' },
  { key: 'FaComments', label: 'Chat / Support' },
  { key: 'FaDatabase', label: 'Database' },
  { key: 'FaDesktop', label: 'Desktop' },
  { key: 'FaDownload', label: 'Download' },
  { key: 'FaGift', label: 'Gift' },
  { key: 'FaKey', label: 'Key' },
  { key: 'FaLayerGroup', label: 'Layers' },
  { key: 'FaMagic', label: 'Magic' },
  { key: 'FaMobileAlt', label: 'Mobile' },
  { key: 'FaMoneyBillWave', label: 'Money' },
  { key: 'FaPercent', label: 'Discount' },
  { key: 'FaPlay', label: 'Play' },
  { key: 'FaShieldVirus', label: 'Health' },
  { key: 'FaTag', label: 'Tag' },
  { key: 'FaTrophy', label: 'Trophy' },
  { key: 'FaUserPlus', label: 'Add User' },
  { key: 'FaVideo', label: 'Video' },
  { key: 'FaWifi', label: 'Wifi' },
];

export default function IconPanel() {
  const [searchQuery, setSearchQuery] = useState('');
  const { sections, selectedSectionId, selectedComponentId, updateComponentProps, addComponent } = useBuilderStore();

  const filteredIcons = FEATURED_ICONS.filter(
    (item) =>
      item.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const findComponentInTree = (components, targetId) => {
    if (!Array.isArray(components)) return null;
    for (const c of components) {
      if (c.id === targetId) return c;
      if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
        const found = findComponentInTree(c.childrenComponents, targetId);
        if (found) return found;
      }
    }
    return null;
  };

  const handleSelectIcon = (iconKey) => {
    let targetSectionId = selectedSectionId;
    let targetComponent = null;

    if (!targetSectionId && sections.length > 0) {
      targetSectionId = sections[0].id;
    }

    if (selectedComponentId) {
      for (const sec of sections) {
        const found = findComponentInTree(sec.components, selectedComponentId);
        if (found) {
          targetSectionId = sec.id;
          targetComponent = found;
          break;
        }
      }
    }

    if (targetComponent && targetSectionId) {
      // Replace icon on selected component
      updateComponentProps(targetSectionId, targetComponent.id, {
        icon: iconKey,
        iconName: iconKey,
      });
      toast.success(`Icon updated to "${iconKey}" on selected component`, 'Icon Replaced');
    } else if (targetSectionId) {
      // Insert new Icon component
      addComponent(targetSectionId, 'icon');
      setTimeout(() => {
        const updatedSections = useBuilderStore.getState().sections;
        const currentSec = updatedSections.find((s) => s.id === targetSectionId);
        const newComp = currentSec?.components[currentSec.components.length - 1];
        if (newComp) {
          updateComponentProps(targetSectionId, newComp.id, {
            icon: iconKey,
            iconName: iconKey,
          });
        }
      }, 10);
      toast.success(`Icon "${iconKey}" inserted into canvas`, 'Icon Added');
    } else {
      toast.info('Please add a section first', 'Notice');
    }
  };

  return (
    <div className="p-4 space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search icons (e.g. Truck, Store, User)..."
          className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition"
        />
      </div>

      <div className="text-[11px] text-slate-500 font-medium flex items-center justify-between">
        <span>Click an icon to replace selected or insert new</span>
        <span className="text-indigo-600 font-extrabold">{filteredIcons.length} Icons</span>
      </div>

      {/* Grid of Icons */}
      <div className="grid grid-cols-4 gap-2">
        {filteredIcons.map((item) => {
          const IconComp = FaIcons[item.key] || FaIcons.FaGlobe;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => handleSelectIcon(item.key)}
              title={item.label}
              className="group relative aspect-square flex flex-col items-center justify-center p-2 rounded-xl border border-slate-200 bg-white hover:border-indigo-500 hover:bg-indigo-50/50 hover:shadow-md transition text-slate-700 hover:text-indigo-600"
            >
              <IconComp className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="text-[9px] font-bold text-slate-500 mt-1 truncate max-w-full text-center group-hover:text-indigo-600">
                {item.key.replace('Fa', '')}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
