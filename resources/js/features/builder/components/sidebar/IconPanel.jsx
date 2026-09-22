import { useState } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import * as FaIcons from 'react-icons/fa';
import { Search, Plus } from 'lucide-react';
import { toast } from '@store';
import DraggableSidebarItem from '../../dnd/DraggableSidebarItem';

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
  const { sections, selectedSectionId, selectedComponentId, updateComponentProps } = useBuilderStore();

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

  // Find ALL icon-type components anywhere in the tree (incl. inside cards)
  const findAllIconComponents = (components) => {
    let found = [];
    if (!Array.isArray(components)) return found;
    for (const c of components) {
      if (c.type === 'icon') found.push(c);
      if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
        found = found.concat(findAllIconComponents(c.childrenComponents));
      }
    }
    return found;
  };

  const handleSelectIcon = (iconKey) => {
    let targetSectionId = selectedSectionId;
    let targetComponent = null;

    // Always resolve targetSectionId
    if (!targetSectionId && sections.length > 0) {
      targetSectionId = sections[0].id;
    }

    // Case 1: A component is already selected — update its icon prop
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
      // Update icon prop on selected component (works for icon, card, button, etc.)
      updateComponentProps(targetSectionId, targetComponent.id, {
        icon: iconKey,
        iconName: iconKey,
      });
      toast.success(`Ikon diubah ke "${iconKey}"`, 'Icon Updated');
      return;
    }

    // Case 2: No component selected — find the first icon component in the active section
    if (targetSectionId) {
      const sec = sections.find(s => s.id === targetSectionId);
      if (sec) {
        const allIcons = findAllIconComponents(sec.components);
        if (allIcons.length > 0) {
          // Update the first icon found in the section
          updateComponentProps(targetSectionId, allIcons[0].id, {
            icon: iconKey,
            iconName: iconKey,
          });
          toast.success(`Ikon "${iconKey}" diterapkan ke ikon pertama di section`, 'Icon Applied');
          return;
        }
      }
    }

    // Case 3: No icon component found anywhere — show helpful guide
    toast.info(
      'Klik salah satu komponen Icon (🎯) di canvas terlebih dahulu, lalu pilih ikon dari panel ini untuk menggantinya.',
      'Pilih Komponen Dulu'
    );
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
            <DraggableSidebarItem
              key={item.key}
              type="icon"
              id={item.key}
              data={{ id: item.key, name: item.key, label: item.label }}
              title={item.key.replace('Fa', '')}
            >
              <button
                type="button"
                onClick={() => handleSelectIcon(item.key)}
                title={item.label}
                className="w-full aspect-square flex flex-col items-center justify-center p-2 rounded-xl border border-slate-200 bg-white hover:border-indigo-500 hover:bg-indigo-50/50 hover:shadow-md transition text-slate-700 hover:text-indigo-600 cursor-grab active:cursor-grabbing group"
              >
                <IconComp className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="text-[9px] font-bold text-slate-500 mt-1 truncate max-w-full text-center group-hover:text-indigo-600">
                  {item.key.replace('Fa', '')}
                </span>
              </button>
            </DraggableSidebarItem>
          );
        })}
      </div>
    </div>
  );
}
