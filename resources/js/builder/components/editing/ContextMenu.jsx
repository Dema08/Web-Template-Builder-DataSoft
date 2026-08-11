import { useEffect, useState } from 'react';
import { useBuilderStore } from '../../stores/builderStore';

export default function ContextMenu() {
  const [menu, setMenu] = useState(null);
  const {
    sections,
    selectedSectionId,
    selectedComponentId,
    duplicateComponent,
    duplicateSection,
    copyComponent,
    pasteComponent,
    removeComponent,
    removeSection,
    bringForward,
    sendBackward,
    bringToFront,
    sendToBack,
  } = useBuilderStore();

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      const target = e.target.closest('[data-component-id]');
      const sectionTarget = e.target.closest('[data-section-id]');

      if (target) {
        const componentId = target.getAttribute('data-component-id');
        const sectionId = target.getAttribute('data-section-id');
        setMenu({
          x: e.clientX,
          y: e.clientY,
          type: 'component',
          componentId,
          sectionId,
        });
      } else if (sectionTarget) {
        const sectionId = sectionTarget.getAttribute('data-section-id');
        setMenu({
          x: e.clientX,
          y: e.clientY,
          type: 'section',
          sectionId,
        });
      }
    };

    const handleClick = () => setMenu(null);
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenu(null);
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!menu) return null;

  const menuStyle = {
    position: 'fixed',
    top: menu.y,
    left: menu.x,
    zIndex: 200,
  };

  const menuItemClass = "w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded transition";

  return (
    <div
      style={menuStyle}
      className="bg-white border border-slate-200 rounded-xl shadow-xl py-1.5 min-w-[180px]"
      onClick={(e) => e.stopPropagation()}
    >
      {menu.type === 'component' ? (
        <>
          <button
            className={menuItemClass}
            onClick={() => {
              duplicateComponent(menu.sectionId, menu.componentId);
              setMenu(null);
            }}
          >
            Duplicate
          </button>
          <button
            className={menuItemClass}
            onClick={() => {
              copyComponent(menu.sectionId, menu.componentId);
              setMenu(null);
            }}
          >
            Copy
          </button>
          <button
            className={menuItemClass}
            onClick={() => {
              pasteComponent(menu.sectionId);
              setMenu(null);
            }}
          >
            Paste
          </button>
          <div className="border-t border-slate-100 my-1" />
          <button
            className={menuItemClass}
            onClick={() => {
              bringForward(menu.sectionId, menu.componentId);
              setMenu(null);
            }}
          >
            Bring Forward
          </button>
          <button
            className={menuItemClass}
            onClick={() => {
              sendBackward(menu.sectionId, menu.componentId);
              setMenu(null);
            }}
          >
            Send Backward
          </button>
          <button
            className={menuItemClass}
            onClick={() => {
              bringToFront(menu.sectionId, menu.componentId);
              setMenu(null);
            }}
          >
            Bring to Front
          </button>
          <button
            className={menuItemClass}
            onClick={() => {
              sendToBack(menu.sectionId, menu.componentId);
              setMenu(null);
            }}
          >
            Send to Back
          </button>
          <div className="border-t border-slate-100 my-1" />
          <button
            className="w-full text-left px-3 py-1.5 text-xs text-red-600 hover:bg-red-50 rounded transition"
            onClick={() => {
              removeComponent(menu.sectionId, menu.componentId);
              setMenu(null);
            }}
          >
            Delete
          </button>
        </>
      ) : (
        <>
          <button
            className={menuItemClass}
            onClick={() => {
              duplicateSection(menu.sectionId);
              setMenu(null);
            }}
          >
            Duplicate Section
          </button>
          <div className="border-t border-slate-100 my-1" />
          <button
            className="w-full text-left px-3 py-1.5 text-xs text-red-600 hover:bg-red-50 rounded transition"
            onClick={() => {
              removeSection(menu.sectionId);
              setMenu(null);
            }}
          >
            Delete Section
          </button>
        </>
      )}
    </div>
  );
}
