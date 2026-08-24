import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const STOCK_GALLERY = [
  { id: 'stock-1', name: 'Modern Office Team', category: 'Business', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80' },
  { id: 'stock-2', name: 'Logistics Warehouse', category: 'Logistics', url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80' },
  { id: 'stock-3', name: 'Executive Meeting', category: 'Business', url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80' },
  { id: 'stock-4', name: 'Product Showcase', category: 'Products', url: 'https://images.unsplash.com/photo-1556742049-0a670fc0a727?w=800&auto=format&fit=crop&q=80' },
  { id: 'stock-5', name: 'Boutique Store', category: 'Retail', url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80' },
  { id: 'stock-6', name: 'Campus University', category: 'Education', url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80' },
  { id: 'stock-7', name: 'Factory Manufacturing', category: 'Industrial', url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80' },
  { id: 'stock-8', name: 'Dairy Farm Fresh Milk', category: 'Dairy', url: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&auto=format&fit=crop&q=80' },
  { id: 'stock-9', name: 'Creative Designer Desk', category: 'Creative', url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80' },
  { id: 'stock-10', name: 'Corporate Building Glass', category: 'Architecture', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80' },
  { id: 'stock-11', name: 'Cooperative Finance Handshake', category: 'Finance', url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80' },
  { id: 'stock-12', name: 'Air Cargo Jet Freight', category: 'Logistics', url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80' },
];

export const STOCK_LOGOS = [
  { id: 'logo-1', name: 'Brand Logo Minimal', category: 'Logo', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&auto=format&fit=crop&q=80' },
  { id: 'logo-2', name: 'Tech Sphere Emblem', category: 'Logo', url: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=300&auto=format&fit=crop&q=80' },
  { id: 'logo-3', name: 'Abstract Gradient Wave', category: 'Logo', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&auto=format&fit=crop&q=80' },
];

export const useMediaStore = create(
  persist(
    (set, get) => ({
      uploads: [],
      selectedMedia: null,

      addUpload: (fileData) => {
        const newUpload = {
          id: `upload-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
          name: fileData.name,
          url: fileData.url,
          size: fileData.size || '1.2 MB',
          type: fileData.type || 'image',
          date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        };
        set((state) => ({
          uploads: [newUpload, ...state.uploads],
        }));
        return newUpload;
      },

      removeUpload: (id) => {
        set((state) => ({
          uploads: state.uploads.filter((item) => item.id !== id),
        }));
      },

      setSelectedMedia: (media) => {
        set({ selectedMedia: media });
      },
    }),
    {
      name: 'datasoft-builder-media',
    }
  )
);
