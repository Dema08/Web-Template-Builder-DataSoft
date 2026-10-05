import { useState, useEffect, useRef } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import { useMediaStore } from '../../stores/mediaStore';
import {
  BACKGROUND_IMAGES,
  BACKGROUND_IMAGE_CATEGORIES,
  BACKGROUND_VIDEO_PRESETS
} from '../../data/backgroundPresets';
import { getComponentConfig } from '../../engine/componentRegistry';
import { getPropertyConfig } from '../../engine/propertyEngine';
import { getLayoutDefaults } from '../../engine/layoutDefaults';
import {
  Type,
  AlignLeft,
  Palette,
  Square,
  Frame,
  Sun,
  Play,
  Move,
  Maximize,
  MousePointer,
  Trash2,
  RotateCcw,
  RectangleHorizontal,
  Image as ImageIcon,
  Video,
  Upload,
  Download,
  Layers,
  Sparkles,
  Search,
  Check,
  RefreshCw,
  SlidersHorizontal,
  X,
  ExternalLink,
  FileText,
  Plus,
  ArrowLeft,
  Send,
  MessageCircle,
  Mail,
  Phone,
  Hash,
} from 'lucide-react';
import { toast } from '@store';
import NavbarEditor from '../sections/NavbarEditor';
import ButtonInspector from './ButtonInspector';
import {
  validateVideoFile,
  createVideoPreview,
  revokePreview,
  captureVideoPoster,
  uploadVideoAsset,
  formatBytes,
} from '../../utils/videoUpload';

const FONT_FAMILIES = [
  { value: 'Inter', label: 'Inter' },
  { value: 'Poppins', label: 'Poppins' },
  { value: 'Roboto', label: 'Roboto' },
  { value: 'Open Sans', label: 'Open Sans' },
  { value: 'Montserrat', label: 'Montserrat' },
  { value: 'Lato', label: 'Lato' },
  { value: 'Playfair Display', label: 'Playfair Display' },
  { value: 'sans-serif', label: 'Sans Serif' },
  { value: 'serif', label: 'Serif' },
  { value: 'monospace', label: 'Monospace' },
];

const COMPONENT_TABS = [
  { id: 'content', label: 'Content', icon: Type },
  { id: 'typography', label: 'Typography', icon: Type },
  { id: 'color', label: 'Colors', icon: Palette },
  { id: 'spacing', label: 'Spacing', icon: Square },
  { id: 'position', label: 'Position', icon: Move },
  { id: 'border', label: 'Border', icon: RectangleHorizontal },
  { id: 'shadow', label: 'Shadow', icon: Sun },
  { id: 'animation', label: 'Animation', icon: RotateCcw },
];

const PROP_TAB_MAPPING = {
  content: 'content', label: 'content', src: 'content', alt: 'content', variant: 'content', level: 'content', value: 'content', href: 'content', linkType: 'content', linkTarget: 'content', icon: 'content', platforms: 'content', alignItems: 'content', justifyContent: 'content', gap: 'content', overflow: 'content',
  fontFamily: 'typography', fontSize: 'typography', fontWeight: 'typography', lineHeight: 'typography', letterSpacing: 'typography', textTransform: 'typography', align: 'typography',
  color: 'color', background: 'color', backgroundGradient: 'color', hoverBackground: 'color', hoverColor: 'color', borderColor: 'color', opacity: 'color',
  padding: 'spacing', margin: 'spacing', width: 'spacing', height: 'spacing', minHeight: 'spacing', maxWidth: 'spacing',
  x: 'position', y: 'position', position: 'position',
  borderWidth: 'border', borderStyle: 'border', borderColor: 'border', borderRadius: 'border', radius: 'border',
  shadow: 'shadow',
  hoverEffect: 'animation', animation: 'animation',
};

export default function RightInspector() {
  const [activeTab, setActiveTab] = useState('content');
  const [sectionTab, setSectionTab] = useState('logo');
  const { addUpload } = useMediaStore();
  const {
    sections,
    landingSections,
    pages,
    currentPageId,
    addSubPage,
    switchPage,
    selectedSectionId,
    selectedComponentId,
    updateComponentProps,
    updateComponentPosition,
    removeComponent,
    updateSectionBackground,
  } = useBuilderStore();
  
  const [formValues, setFormValues] = useState({});
  const [newSubpageName, setNewSubpageName] = useState('');
  const [positionValues, setPositionValues] = useState({
    x: 0,
    y: 0,
    width: '',
    height: '',
    rotation: 0,
    scale: 1,
    zIndex: 1,
  });

  const inspectorImgInputRef = useRef(null);
  const inspectorVidInputRef = useRef(null);
  const buttonFileInputRef = useRef(null);
  const videoAbortRef = useRef(null);

  // Inspector Section Background state
  const [selectedImgCategory, setSelectedImgCategory] = useState('all');
  const [searchImgQuery, setSearchImgQuery] = useState('');
  const [isDraggingImage, setIsDraggingImage] = useState(false);
  const [isDraggingVideo, setIsDraggingVideo] = useState(false);
  // Upload video ringan: preview blob instan + progress streaming (tanpa base64)
  const [videoUploadPct, setVideoUploadPct] = useState(0);
  const [isUploadingVideo, setIsUploadingVideo] = useState(false);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState('');
  const [videoPreviewName, setVideoPreviewName] = useState('');
  const [videoPoster, setVideoPoster] = useState('');

  // Bersihkan upload saat unmount agar tidak bocor memori / request gantung
  useEffect(() => {
    const abortRef = videoAbortRef;
    return () => {
      if (abortRef.current) { try { abortRef.current.abort(); } catch (_) {} }
    };
  }, []);

  const selectedSection = sections.find(s => s.id === selectedSectionId);

  const findComponentInTree = (components, targetId) => {
    if (!Array.isArray(components) || !targetId) return null;
    for (const c of components) {
      if (c.id === targetId) return c;
      if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
        const found = findComponentInTree(c.childrenComponents, targetId);
        if (found) return found;
      }
    }
    return null;
  };

  // 1. Search in selectedSection.components
  let selectedComponent = selectedSection ? findComponentInTree(selectedSection.components, selectedComponentId) : null;
  let activeSectionId = selectedSectionId;

  // 2. Fallback: Search in selectedSection layout defaults
  if (!selectedComponent && selectedSection?.layout) {
    const defaults = getLayoutDefaults(selectedSection.layout);
    selectedComponent = findComponentInTree(defaults, selectedComponentId);
  }

  // 3. Fallback: Search across all sections and layout defaults
  if (!selectedComponent && selectedComponentId) {
    for (const sec of sections) {
      let found = findComponentInTree(sec.components, selectedComponentId);
      if (!found && sec.layout) {
        found = findComponentInTree(getLayoutDefaults(sec.layout), selectedComponentId);
      }
      if (found) {
        selectedComponent = found;
        activeSectionId = sec.id;
        break;
      }
    }
  }

  const componentConfig = selectedComponent ? getComponentConfig(selectedComponent.type) : null;
  const propertyConfig = selectedComponent ? getPropertyConfig(selectedComponent.type) : null;

  // Active section background configuration with safe fallbacks
  const bgConfig = selectedSection?.background || {
    type: 'none',
    color: { hex: '#ffffff', opacity: 100 },
    gradient: { type: 'linear', angle: 90, stops: [{ color: '#4f46e5', position: 0 }, { color: '#ec4899', position: 100 }] },
    image: { url: '', position: 'center', size: 'cover', repeat: 'no-repeat', attachment: 'scroll' },
    video: { url: '', autoplay: true, loop: true, muted: true },
    overlay: { color: '#000000', opacity: 0, blendMode: 'normal' },
    filters: { blur: 0, brightness: 100, contrast: 100, saturation: 100 },
  };

  /**
   * Helper: Apply real-time live background changes immediately
   */
  const applyLiveBackground = (updater) => {
    if (!selectedSectionId) return;
    const current = {
      type: bgConfig.type || 'none',
      color: { hex: '#ffffff', opacity: 100, ...(bgConfig.color || {}) },
      gradient: {
        type: 'linear',
        angle: 90,
        stops: [{ color: '#4f46e5', position: 0 }, { color: '#ec4899', position: 100 }],
        ...(bgConfig.gradient || {})
      },
      image: { url: '', position: 'center', size: 'cover', repeat: 'no-repeat', attachment: 'scroll', ...(bgConfig.image || {}) },
      video: { url: '', autoplay: true, loop: true, muted: true, ...(bgConfig.video || {}) },
      overlay: { color: '#000000', opacity: 0, blendMode: 'normal', ...(bgConfig.overlay || {}) },
      filters: { blur: 0, brightness: 100, contrast: 100, saturation: 100, ...(bgConfig.filters || {}) },
    };

    const newConfig = typeof updater === 'function' ? updater(current) : { ...current, ...updater };
    updateSectionBackground(selectedSectionId, newConfig);
  };

  // Sync component form values only when selected component ID changes
  useEffect(() => {
    if (selectedComponent) {
      const defaults = {
        ...(selectedComponent.props || {}),
      };
      Object.entries(propertyConfig?.props || {}).forEach(([key, config]) => {
        if (defaults[key] === undefined) {
          defaults[key] = config.default;
        }
      });
      const position = selectedComponent.position || {};
      defaults.x = position.x || 0;
      defaults.y = position.y || 0;
      defaults.width = position.width || selectedComponent.props?.width || '';
      defaults.height = position.height || selectedComponent.props?.height || '';
      defaults.rotation = position.rotation || 0;
      defaults.scale = position.scale || 1;
      defaults.zIndex = position.zIndex || 1;

      // Extract button fields with safe fallbacks
      if (selectedComponent.type === 'button') {
        const actionObj = selectedComponent.props?.action || {};
        const contentObj = selectedComponent.props?.content || {};
        defaults.actionType = defaults.actionType || defaults.linkType || actionObj.type || 'web_url';
        defaults.actionValue = defaults.actionValue !== undefined ? defaults.actionValue : (defaults.linkTarget || defaults.href || actionObj.value || '');
        defaults.actionMessage = defaults.actionMessage !== undefined ? defaults.actionMessage : (actionObj.message || '');
        defaults.fileName = defaults.fileName !== undefined ? defaults.fileName : (actionObj.fileName || '');
        defaults.fileSize = defaults.fileSize !== undefined ? defaults.fileSize : (actionObj.fileSize || '');
        defaults.target = defaults.target || actionObj.target || (defaults.linkOpenNewTab ? '_blank' : '_self');
        defaults.linkType = defaults.actionType;
        defaults.linkTarget = defaults.actionValue;
        defaults.href = defaults.actionValue;
        defaults.label = defaults.label || defaults.text || (typeof contentObj === 'object' ? contentObj.text : null) || (typeof defaults.content === 'string' ? defaults.content : 'Button');
        defaults.text = defaults.label;
        defaults.iconLeft = defaults.iconLeft || (typeof contentObj === 'object' ? contentObj.iconLeft : null) || null;
        defaults.iconRight = defaults.iconRight || (typeof contentObj === 'object' ? contentObj.iconRight : null) || null;
        defaults.formChannel = selectedComponent.props?.formChannel || actionObj.formChannel || (actionObj.value?.includes('@') ? 'email' : 'whatsapp');
        defaults.formTarget = selectedComponent.props?.formTarget || actionObj.formTarget || defaults.actionValue || '';
        defaults.formSubject = selectedComponent.props?.formSubject || actionObj.formSubject || defaults.actionMessage || '';
        defaults.action = {
          type: defaults.actionType,
          value: defaults.actionValue,
          message: defaults.actionMessage,
          fileName: defaults.fileName,
          fileSize: defaults.fileSize,
          target: defaults.target,
          formChannel: defaults.formChannel,
          formTarget: defaults.formTarget,
          formSubject: defaults.formSubject,
        };
        defaults.content = {
          text: defaults.label,
          iconLeft: defaults.iconLeft,
          iconRight: defaults.iconRight,
        };
      }

      if (selectedComponent.type === 'form') {
        const actionObj = selectedComponent.props?.action || {};
        defaults.action = {
          ...actionObj,
          type: actionObj.type || defaults.actionType || 'card_form',
          value: actionObj.value ?? defaults.formTarget ?? '',
          formChannel: actionObj.formChannel || (actionObj.type === 'email' ? 'email' : 'whatsapp'),
          message: actionObj.message || defaults.actionMessage || '',
          formSubject: actionObj.formSubject || actionObj.subject || defaults.formSubject || '',
          target: actionObj.target || defaults.target || '_self',
          fileName: actionObj.fileName || defaults.fileName || '',
        };
      }

      setFormValues(defaults);

      if (selectedComponent.position) {
        setPositionValues({
          x: selectedComponent.position.x || 0,
          y: selectedComponent.position.y || 0,
          width: selectedComponent.position.width || '',
          height: selectedComponent.position.height || '',
          rotation: selectedComponent.position.rotation || 0,
          scale: selectedComponent.position.scale || 1,
          zIndex: selectedComponent.position.zIndex || 1,
        });
      }
    } else {
      setFormValues({});
      setPositionValues({ x: 0, y: 0, width: '', height: '', rotation: 0, scale: 1, zIndex: 1 });
    }
  }, [selectedComponentId]);

  const handleButtonFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
    const formattedSize = file.size >= 1024 * 1024 ? `${sizeMB} MB` : `${Math.round(file.size / 1024)} KB`;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const dataUrl = evt.target.result;
      handleChange('actionValue', dataUrl);
      handleChange('fileName', file.name);
      handleChange('fileSize', formattedSize);
      toast.success(`File "${file.name}" berhasil diunggah untuk diunduh!`, 'File Diunggah');
    };
    reader.readAsDataURL(file);
  };

  const handleButtonActionTypeChange = (newType) => {
    setFormValues((prev) => {
      let currentVal = prev.actionValue !== undefined ? prev.actionValue : (prev.linkTarget || prev.href || '');
      // Format / adapt value for specific action type if transitioning from an incompatible format
      if (newType === 'whatsapp' || newType === 'phone') {
        if (currentVal.startsWith('#') || currentVal.startsWith('http') || currentVal.includes('@')) {
          currentVal = '';
        }
      } else if (newType === 'email') {
        if (currentVal.startsWith('#') || currentVal.startsWith('http') || (!currentVal.includes('@') && currentVal.length > 0)) {
          currentVal = '';
        }
      } else if (newType === 'section') {
        if (!currentVal.startsWith('#')) {
          const firstSec = (landingSections.length > 0 ? landingSections : sections)[0];
          currentVal = firstSec ? `#${firstSec.id}` : '#';
        }
      } else if (newType === 'page') {
        if (currentVal.startsWith('#') || currentVal.startsWith('http') || currentVal.includes('@')) {
          const firstPage = Object.values(pages)[0];
          currentVal = firstPage ? firstPage.id : '';
        }
      }

      const newValues = {
        ...prev,
        actionType: newType,
        linkType: newType,
        actionValue: currentVal,
        linkTarget: currentVal,
        href: currentVal,
        action: {
          type: newType,
          value: currentVal,
          message: prev.actionMessage || '',
          fileName: prev.fileName || '',
          fileSize: prev.fileSize || '',
          target: prev.target || '_self',
        },
      };

      const secIdToUpdate = activeSectionId || selectedSectionId;
      if (secIdToUpdate && selectedComponentId) {
        updateComponentProps(secIdToUpdate, selectedComponentId, newValues);
      }

      return newValues;
    });
  };

  const handleChange = (key, value) => {
    setFormValues((prev) => {
      const newValues = { ...prev, [key]: value };

      if (selectedComponent?.type === 'button') {
        const type = key === 'actionType' || key === 'linkType' ? value : (newValues.actionType || newValues.linkType || 'web_url');
        const val = key === 'actionValue' || key === 'linkTarget' || key === 'href' ? value : (newValues.actionValue !== undefined ? newValues.actionValue : (newValues.linkTarget || newValues.href || ''));
        const msg = key === 'actionMessage' ? value : (newValues.actionMessage || '');
        const fName = key === 'fileName' ? value : (newValues.fileName || '');
        const fSize = key === 'fileSize' ? value : (newValues.fileSize || '');
        const target = key === 'target' ? value : (key === 'linkOpenNewTab' ? (value ? '_blank' : '_self') : (newValues.target || '_self'));

        const formChan = key === 'formChannel' ? value : (newValues.formChannel || newValues.action?.formChannel || (val.includes('@') ? 'email' : 'whatsapp'));
        const formSub = key === 'formSubject' ? value : (newValues.formSubject || newValues.action?.formSubject || msg || '');
        const formTar = key === 'formTarget' ? value : (newValues.formTarget || newValues.action?.formTarget || val || '');

        newValues.actionType = type;
        newValues.linkType = type;
        newValues.actionValue = val;
        newValues.linkTarget = val;
        newValues.href = val;
        newValues.actionMessage = msg;
        newValues.fileName = fName;
        newValues.fileSize = fSize;
        newValues.target = target;
        newValues.linkOpenNewTab = target === '_blank';
        newValues.formChannel = formChan;
        newValues.formSubject = formSub;
        newValues.formTarget = formTar;
        newValues.action = {
          type,
          value: val,
          message: msg,
          fileName: fName,
          fileSize: fSize,
          target,
          formChannel: formChan,
          formTarget: formTar,
          formSubject: formSub,
        };

        const text = key === 'label' || key === 'text' ? value : (newValues.label || newValues.text || 'Button');
        const iconLeft = key === 'iconLeft' ? value : (newValues.iconLeft || null);
        const iconRight = key === 'iconRight' ? value : (newValues.iconRight || null);

        newValues.label = text;
        newValues.text = text;
        newValues.iconLeft = iconLeft;
        newValues.iconRight = iconRight;
        newValues.content = { text, iconLeft, iconRight };
      }

      const secIdToUpdate = activeSectionId || selectedSectionId;
      if (secIdToUpdate && selectedComponentId) {
        updateComponentProps(secIdToUpdate, selectedComponentId, newValues);
        if (newValues.imageKey && (key === 'src' || key === 'alt')) {
          useBuilderStore.getState().updateSectionCustomImage(
            secIdToUpdate,
            newValues.imageKey,
            newValues.src,
            newValues.alt
          );
        }
      }

      return newValues;
    });
  };

  const handleDelete = () => {
    const secIdToUpdate = activeSectionId || selectedSectionId;
    if (secIdToUpdate && selectedComponentId) {
      if (selectedComponent?.isLocked) return;
      removeComponent(secIdToUpdate, selectedComponentId);
    }
  };

  // Handle local image file upload live
  const handleImageUpload = (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file (PNG, JPG, WEBP, SVG)', 'Invalid File');
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      applyLiveBackground(curr => ({
        ...curr,
        type: 'image',
        image: { ...curr.image, url: dataUrl, fileName: file.name }
      }));
      addUpload({
        name: file.name,
        url: dataUrl,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        type: 'image'
      });
      toast.success(`Image "${file.name}" applied as background!`, 'Background Image');
    };
    reader.readAsDataURL(file);
  };

  // Handle local video file upload — RINGAN (tanpa base64 50MB)
  // 1) Preview instan via blob URL (tanpa baca seluruh file ke memori)
  // 2) Upload streaming multipart ke server dengan progress + bisa cancel
  // 3) Yang disimpan = URL file statis (/storage/websites/videos/xxx.mp4),
  //    diputar browser via HTTP Range (progressive streaming), kualitas 100% terjaga.
  const handleVideoUpload = async (file) => {
    if (!file) return;
    const check = validateVideoFile(file);
    if (!check.ok) {
      if (check.message.includes('Format')) toast.error(check.message, 'Invalid File');
      else toast.error(check.message, 'File Too Large');
      return;
    }
    if (isUploadingVideo) {
      toast.info('Tunggu upload video sebelumnya selesai / batalkan dulu.', 'Upload Berjalan');
      return;
    }
    // Batalkan upload sebelumnya bila ada
    if (videoAbortRef.current) {
      try { videoAbortRef.current.abort(); } catch (_) {}
    }
    revokePreview(videoPreviewUrl);
    const controller = new AbortController();
    videoAbortRef.current = controller;

    const blobUrl = createVideoPreview(file);
    setVideoPreviewUrl(blobUrl);
    setVideoPreviewName(file.name);
    setVideoUploadPct(0);
    setIsUploadingVideo(true);

    // Preview INSTAN di canvas (blob lokal, ringan) — langsung terlihat tanpa nunggu upload
    applyLiveBackground(curr => ({
      ...curr,
      type: 'video',
      video: { ...curr.video, url: blobUrl, fileName: file.name, pending: true }
    }));

    // Poster ringan (1 frame JPEG kecil) agar thumbnail tidak perlu memutar video 50MB
    captureVideoPoster(file).then((poster) => {
      if (poster) {
        setVideoPoster(poster);
        applyLiveBackground(curr => {
          // Jangan timpa bila user sudah ganti ke URL lain
          if (!curr.video?.url || curr.video.url === blobUrl || curr.video.pending) {
            return { ...curr, video: { ...curr.video, poster } };
          }
          return curr;
        });
      }
    });

    try {
      const result = await uploadVideoAsset(file, {
        onProgress: (pct) => setVideoUploadPct(pct),
        signal: controller.signal,
      });
      // Ganti blob sementara -> URL statis server (string pendek, hemat DB + server)
      applyLiveBackground(curr => ({
        ...curr,
        type: 'video',
        video: {
          ...curr.video,
          url: result.url,
          fileName: file.name,
          size: result.size || file.size,
          poster: videoPoster || curr.video?.poster || '',
          pending: false,
        }
      }));
      addUpload({
        name: file.name,
        url: result.url,
        size: formatBytes(result.size || file.size),
        type: 'video'
      });
      toast.success(`Video "${file.name}" terupload & siap streaming ringan!`, 'Background Video');
    } catch (err) {
      const aborted = err?.name === 'CanceledError' || err?.name === 'AbortError' || err?.code === 'ERR_CANCELED';
      if (aborted) {
        toast.info('Upload video dibatalkan.', 'Upload Dibatalkan');
      } else {
        const msg = err?.response?.data?.message || err?.message || 'Gagal mengupload video.';
        toast.error(msg, 'Upload Gagal');
      }
      // Tetap tampilkan preview blob agar user bisa coba lagi; tandai pending agar tidak tersimpan permanen tanpa sadar
      applyLiveBackground(curr => ({
        ...curr,
        type: 'video',
        video: { ...curr.video, url: blobUrl, fileName: file.name, pending: true }
      }));
      return;
    } finally {
      setIsUploadingVideo(false);
      // Blob hanya dibutuhkan selama upload; setelah sukses URL server yang dipakai -> bebaskan memori
      const currentUrl = useBuilderStore.getState().sections
        ?.find(s => s.id === selectedSectionId)?.background?.video?.url;
      if (currentUrl && currentUrl !== blobUrl) {
        revokePreview(blobUrl);
        setVideoPreviewUrl('');
        setVideoPreviewName('');
      }
      if (inspectorVidInputRef.current) inspectorVidInputRef.current.value = '';
    }
  };

  const handleCancelVideoUpload = () => {
    if (videoAbortRef.current) {
      try { videoAbortRef.current.abort(); } catch (_) {}
    }
  };

  // Filtered background images
  const filteredImages = BACKGROUND_IMAGES.filter(img => {
    const matchesCategory = selectedImgCategory === 'all' || img.category === selectedImgCategory;
    const matchesSearch = !searchImgQuery || img.title.toLowerCase().includes(searchImgQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // If no component selected AND no section selected
  if (!selectedComponent && !selectedSection) {
    return (
      <div className="h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
              <Move className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-2">Select a Section or Component</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Click on any section or component in the canvas to edit properties & background in real-time
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // SECTION SELECTED -> LIVE BACKGROUND & NAVBAR STUDIO
  // ==========================================
  if (!selectedComponent && selectedSection) {
    const currentType = bgConfig.type || 'none';
    const isNavbarSection = selectedSection.type === 'navbar';

    return (
      <div className="h-full flex flex-col bg-white">
        {/* Hidden inputs for uploads */}
        <input
          ref={inspectorImgInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload(e.target.files?.[0])}
          className="hidden"
        />
        <input
          ref={inspectorVidInputRef}
          type="file"
          accept="video/mp4,video/webm,video/ogg"
          onChange={(e) => handleVideoUpload(e.target.files?.[0])}
          className="hidden"
        />

        {/* Section Header Tab Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50/70 shrink-0">
          {isNavbarSection ? (
            <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 shadow-2xs">
              <button
                type="button"
                onClick={() => setSectionTab('logo')}
                className={`px-3 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1.5 transition cursor-pointer ${
                  sectionTab === 'logo'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Logo & Navbar</span>
              </button>
              <button
                type="button"
                onClick={() => setSectionTab('background')}
                className={`px-3 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1.5 transition cursor-pointer ${
                  sectionTab === 'background'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Palette className="h-3.5 w-3.5" />
                <span>Background</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg">
                <Palette className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-xs font-extrabold text-slate-900">Section Background</h3>
                <p className="text-[10px] text-slate-500">Live Real-time Editing</p>
              </div>
            </div>
          )}
          <span className="text-[10px] px-2 py-0.5 bg-indigo-100/70 text-indigo-700 rounded-md font-bold uppercase">
            {selectedSection.type}
          </span>
        </div>

        {/* Section Content Body */}
        {isNavbarSection && sectionTab === 'logo' && (
          <div className="flex-1 overflow-y-auto p-4 ds-scrollbar-thin">
            <NavbarEditor sectionId={selectedSection.id} section={selectedSection} />
          </div>
        )}

        {(!isNavbarSection || sectionTab === 'background') && (
          <div className="flex-1 overflow-y-auto p-4 space-y-5 ds-scrollbar-thin">

          {/* 1. Background Type Selection (Auto-Apply on click) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">Background Type</label>
              {currentType !== 'none' && (
                <button
                  type="button"
                  onClick={() => applyLiveBackground({ type: 'none' })}
                  className="text-[10px] text-red-500 hover:text-red-700 font-bold flex items-center gap-1 transition"
                >
                  <RefreshCw className="h-2.5 w-2.5" />
                  <span>Reset / Clear</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-5 gap-1">
              {[
                { id: 'none', label: 'None', icon: X },
                { id: 'color', label: 'Color', icon: Palette },
                { id: 'gradient', label: 'Grad', icon: SlidersHorizontal },
                { id: 'image', label: 'Image', icon: ImageIcon },
                { id: 'video', label: 'Video', icon: Video },
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => applyLiveBackground({ type: t.id })}
                  className={`py-2 px-1 text-xs font-bold rounded-xl border flex flex-col items-center gap-1 transition-all ${
                    currentType === t.id
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs scale-100 ring-2 ring-indigo-300'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <t.icon className="h-3.5 w-3.5" />
                  <span className="text-[10px]">{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. SOLID COLOR CONTROLS                                  */}
          {/* ========================================================= */}
          {currentType === 'color' && (
            <div className="space-y-4 p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200 shadow-xs">
              <h4 className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                <Palette className="h-3.5 w-3.5 text-indigo-600" />
                <span>Solid Color Settings</span>
              </h4>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Color Picker & Hex</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={bgConfig.color?.hex || '#ffffff'}
                    onChange={(e) => applyLiveBackground(curr => ({
                      ...curr,
                      color: { ...curr.color, hex: e.target.value }
                    }))}
                    className="w-10 h-9 rounded-xl border border-slate-200 cursor-pointer p-0.5 bg-white shadow-xs"
                  />
                  <input
                    type="text"
                    value={bgConfig.color?.hex || '#ffffff'}
                    onChange={(e) => applyLiveBackground(curr => ({
                      ...curr,
                      color: { ...curr.color, hex: e.target.value }
                    }))}
                    className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-800"
                    placeholder="#ffffff"
                  />
                </div>
              </div>

              {/* Popular Swatches */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1.5">Quick Swatches</label>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    '#ffffff', '#f8fafc', '#f1f5f9', '#0f172a', '#1e1b4b',
                    '#4f46e5', '#2563eb', '#0ea5e9', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#8b5cf6'
                  ].map(cHex => (
                    <button
                      key={cHex}
                      type="button"
                      onClick={() => applyLiveBackground(curr => ({
                        ...curr,
                        color: { ...curr.color, hex: cHex }
                      }))}
                      className={`w-6 h-6 rounded-lg border shadow-2xs transition hover:scale-110 ${
                        bgConfig.color?.hex?.toLowerCase() === cHex.toLowerCase() ? 'ring-2 ring-indigo-500 scale-110 border-indigo-600' : 'border-slate-300'
                      }`}
                      style={{ backgroundColor: cHex }}
                      title={cHex}
                    />
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[11px] font-bold text-slate-600">Color Opacity</label>
                  <span className="text-[11px] font-mono font-bold text-indigo-600">{bgConfig.color?.opacity ?? 100}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={bgConfig.color?.opacity ?? 100}
                  onChange={(e) => applyLiveBackground(curr => ({
                    ...curr,
                    color: { ...curr.color, opacity: parseInt(e.target.value) }
                  }))}
                  className="w-full accent-indigo-600"
                />
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* 3. GRADIENT CONTROLS                                     */}
          {/* ========================================================= */}
          {currentType === 'gradient' && (
            <div className="space-y-4 p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200 shadow-xs">
              <h4 className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                <SlidersHorizontal className="h-3.5 w-3.5 text-indigo-600" />
                <span>Multi Gradient Settings</span>
              </h4>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Color 1 (Start)</label>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="color"
                      value={bgConfig.gradient?.stops?.[0]?.color || '#4f46e5'}
                      onChange={(e) => {
                        const stops = [...(bgConfig.gradient?.stops || [{ color: '#4f46e5', position: 0 }, { color: '#ec4899', position: 100 }])];
                        stops[0] = { ...stops[0], color: e.target.value };
                        applyLiveBackground(curr => ({
                          ...curr,
                          gradient: { ...curr.gradient, stops }
                        }));
                      }}
                      className="w-8 h-8 rounded-lg border border-slate-200 cursor-pointer p-0.5 bg-white shadow-xs"
                    />
                    <input
                      type="text"
                      value={bgConfig.gradient?.stops?.[0]?.color || '#4f46e5'}
                      onChange={(e) => {
                        const stops = [...(bgConfig.gradient?.stops || [{ color: '#4f46e5', position: 0 }, { color: '#ec4899', position: 100 }])];
                        stops[0] = { ...stops[0], color: e.target.value };
                        applyLiveBackground(curr => ({
                          ...curr,
                          gradient: { ...curr.gradient, stops }
                        }));
                      }}
                      className="flex-1 px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-[11px] font-mono font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Color 2 (End)</label>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="color"
                      value={bgConfig.gradient?.stops?.[1]?.color || '#ec4899'}
                      onChange={(e) => {
                        const stops = [...(bgConfig.gradient?.stops || [{ color: '#4f46e5', position: 0 }, { color: '#ec4899', position: 100 }])];
                        stops[1] = { ...stops[1], color: e.target.value };
                        applyLiveBackground(curr => ({
                          ...curr,
                          gradient: { ...curr.gradient, stops }
                        }));
                      }}
                      className="w-8 h-8 rounded-lg border border-slate-200 cursor-pointer p-0.5 bg-white shadow-xs"
                    />
                    <input
                      type="text"
                      value={bgConfig.gradient?.stops?.[1]?.color || '#ec4899'}
                      onChange={(e) => {
                        const stops = [...(bgConfig.gradient?.stops || [{ color: '#4f46e5', position: 0 }, { color: '#ec4899', position: 100 }])];
                        stops[1] = { ...stops[1], color: e.target.value };
                        applyLiveBackground(curr => ({
                          ...curr,
                          gradient: { ...curr.gradient, stops }
                        }));
                      }}
                      className="flex-1 px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-[11px] font-mono font-bold"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[11px] font-bold text-slate-600">Gradient Angle</label>
                  <span className="text-[11px] font-mono font-bold text-indigo-600">{bgConfig.gradient?.angle ?? 90}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={bgConfig.gradient?.angle ?? 90}
                  onChange={(e) => applyLiveBackground(curr => ({
                    ...curr,
                    gradient: { ...curr.gradient, angle: parseInt(e.target.value) }
                  }))}
                  className="w-full accent-indigo-600"
                />
              </div>

              {/* Gradient Presets */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1.5">Preset Gradient Swatches</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { name: 'Indigo Silk', c1: '#4f46e5', c2: '#ec4899', angle: 135 },
                    { name: 'Cyber Blue', c1: '#2563eb', c2: '#06b6d4', angle: 90 },
                    { name: 'Dark Space', c1: '#0f172a', c2: '#1e1b4b', angle: 180 },
                    { name: 'Sunset Glow', c1: '#f97316', c2: '#ec4899', angle: 45 },
                    { name: 'Emerald Wave', c1: '#059669', c2: '#10b981', angle: 120 },
                    { name: 'Royal Purple', c1: '#7c3aed', c2: '#3b82f6', angle: 90 },
                  ].map(g => (
                    <button
                      key={g.name}
                      type="button"
                      onClick={() => applyLiveBackground(curr => ({
                        ...curr,
                        gradient: {
                          angle: g.angle,
                          stops: [{ color: g.c1, position: 0 }, { color: g.c2, position: 100 }]
                        }
                      }))}
                      className="h-8 rounded-lg border border-white shadow-2xs hover:scale-105 transition"
                      style={{ background: `linear-gradient(${g.angle}deg, ${g.c1}, ${g.c2})` }}
                      title={g.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* 4. IMAGE CONTROLS & UPLOAD (LIVE)                        */}
          {/* ========================================================= */}
          {currentType === 'image' && (
            <div className="space-y-4 p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                  <ImageIcon className="h-3.5 w-3.5 text-indigo-600" />
                  <span>Image Background & Upload</span>
                </h4>
              </div>

              {/* Upload Image Dropzone & Button */}
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDraggingImage(true); }}
                onDragLeave={() => setIsDraggingImage(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setIsDraggingImage(false);
                  handleImageUpload(e.dataTransfer.files?.[0]);
                }}
                onClick={() => inspectorImgInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-3.5 text-center cursor-pointer transition-all ${
                  isDraggingImage
                    ? 'border-indigo-600 bg-indigo-50/70 scale-[1.01]'
                    : 'border-slate-300 hover:border-indigo-400 bg-white'
                }`}
              >
                <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-1">
                  <Upload className="h-4 w-4" />
                </div>
                <p className="text-xs font-bold text-slate-700">
                  Upload Image from Device
                </p>
                <p className="text-[10px] text-slate-400">
                  Drag & drop or click (PNG, JPG, WEBP)
                </p>
              </div>

              {/* Direct URL Input */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Image URL</label>
                <input
                  type="text"
                  placeholder="https://images.unsplash.com/..."
                  value={bgConfig.image?.url || ''}
                  onChange={(e) => applyLiveBackground(curr => ({
                    ...curr,
                    image: { ...curr.image, url: e.target.value }
                  }))}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono text-slate-800"
                />
              </div>

              {/* Category Pills & Search */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-bold text-slate-600">Curated Presets Library</label>
                </div>

                <div className="relative">
                  <Search className="h-3 w-3 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search images..."
                    value={searchImgQuery}
                    onChange={(e) => setSearchImgQuery(e.target.value)}
                    className="w-full pl-7 pr-3 py-1 bg-white border border-slate-200 rounded-lg text-[11px]"
                  />
                </div>

                <div className="flex items-center gap-1 overflow-x-auto pb-1 ds-scrollbar-thin">
                  {BACKGROUND_IMAGE_CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedImgCategory(cat.id)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap transition ${
                        selectedImgCategory === cat.id
                          ? 'bg-indigo-600 text-white shadow-2xs'
                          : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Grid Thumbnails (Instant Live Apply on click) */}
                <div className="grid grid-cols-3 gap-1.5 max-h-40 overflow-y-auto pr-0.5 ds-scrollbar-thin">
                  {filteredImages.map(img => {
                    const isSelected = bgConfig.image?.url === img.url;
                    return (
                      <button
                        key={img.id}
                        type="button"
                        onClick={() => applyLiveBackground(curr => ({
                          ...curr,
                          type: 'image',
                          image: { ...curr.image, url: img.url }
                        }))}
                        className={`aspect-video rounded-lg overflow-hidden border-2 relative group transition-all ${
                          isSelected
                            ? 'border-indigo-600 ring-2 ring-indigo-400 scale-[1.02]'
                            : 'border-slate-200 hover:border-indigo-400'
                        }`}
                      >
                        <img src={img.thumbnail} alt={img.title} className="w-full h-full object-cover" loading="lazy" />
                        {isSelected && (
                          <div className="absolute top-1 right-1 w-4 h-4 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-xs">
                            <Check className="h-2.5 w-2.5" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Fit & Position */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div>
                  <label className="block text-[10px] font-bold text-slate-600 mb-1">Fit Size</label>
                  <select
                    value={bgConfig.image?.size || 'cover'}
                    onChange={(e) => applyLiveBackground(curr => ({
                      ...curr,
                      image: { ...curr.image, size: e.target.value }
                    }))}
                    className="w-full px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold"
                  >
                    <option value="cover">Cover (Fill)</option>
                    <option value="contain">Contain</option>
                    <option value="auto">Auto</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-600 mb-1">Attachment</label>
                  <select
                    value={bgConfig.image?.attachment || 'scroll'}
                    onChange={(e) => applyLiveBackground(curr => ({
                      ...curr,
                      image: { ...curr.image, attachment: e.target.value }
                    }))}
                    className="w-full px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold"
                  >
                    <option value="scroll">Scroll</option>
                    <option value="fixed">Fixed (Parallax)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* 5. VIDEO CONTROLS & UPLOAD (LIVE)                        */}
          {/* ========================================================= */}
          {currentType === 'video' && (
            <div className="space-y-4 p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                  <Video className="h-3.5 w-3.5 text-indigo-600" />
                  <span>Video Background & Upload</span>
                </h4>
              </div>

              {/* Upload Video Dropzone & Button — ringan: preview instan + progress streaming */}
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDraggingVideo(true); }}
                onDragLeave={() => setIsDraggingVideo(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setIsDraggingVideo(false);
                  handleVideoUpload(e.dataTransfer.files?.[0]);
                }}
                onClick={() => { if (!isUploadingVideo) inspectorVidInputRef.current?.click(); }}
                className={`border-2 border-dashed rounded-xl p-3.5 text-center cursor-pointer transition-all ${
                  isDraggingVideo
                    ? 'border-indigo-600 bg-indigo-50/70 scale-[1.01]'
                    : 'border-slate-300 hover:border-indigo-400 bg-white'
                }`}
              >
                <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-1">
                  <Video className="h-4 w-4" />
                </div>
                <p className="text-xs font-bold text-slate-700">
                  {isUploadingVideo ? `Mengupload ${videoUploadPct}% — preview langsung tampil` : 'Upload Video from Device'}
                </p>
                <p className="text-[10px] text-slate-400">
                  Drag & drop MP4 (H.264) / WebM hingga 50MB — kualitas asli terjaga, streaming ringan
                </p>
                {isUploadingVideo && (
                  <div className="mt-2 text-left" onClick={(e) => e.stopPropagation()}>
                    <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
                      <div className="h-full bg-indigo-600 transition-all" style={{ width: `${videoUploadPct}%` }} />
                    </div>
                    <div className="mt-1.5 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-indigo-700 truncate max-w-[70%]">{videoPreviewName || 'video.mp4'}</span>
                      <button
                        type="button"
                        onClick={handleCancelVideoUpload}
                        className="text-[10px] font-extrabold text-rose-600 hover:text-rose-700 underline"
                      >
                        Batalkan
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Preview ringan: poster + video preload metadata (tidak autoplay penuh di inspector) */}
              {(bgConfig.video?.url || videoPoster) && (
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-950 relative">
                  {bgConfig.video?.pending && (
                    <div className="absolute top-1.5 left-1.5 z-10 px-2 py-0.5 rounded-full bg-amber-500 text-white text-[9px] font-extrabold shadow">
                      {isUploadingVideo ? `Uploading ${videoUploadPct}%` : 'Preview lokal — belum tersimpan di server'}
                    </div>
                  )}
                  {!bgConfig.video?.pending && bgConfig.video?.url && !bgConfig.video.url.startsWith('blob:') && !bgConfig.video.url.startsWith('data:') && (
                    <div className="absolute top-1.5 left-1.5 z-10 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-extrabold shadow">
                      Tersimpan di server — streaming ringan
                    </div>
                  )}
                  <video
                    key={bgConfig.video?.url || 'novideo'}
                    src={bgConfig.video?.url}
                    poster={bgConfig.video?.poster || videoPoster || undefined}
                    className="w-full aspect-video object-cover"
                    preload="metadata"
                    playsInline
                    muted
                    loop
                    controls={false}
                    onMouseEnter={(e) => { try { e.currentTarget.play()?.catch(() => {}); } catch (_) {} }}
                    onMouseLeave={(e) => { try { e.currentTarget.pause(); } catch (_) {} }}
                  />
                  <p className="px-2 py-1 text-[9px] font-mono text-slate-400 truncate bg-slate-950">
                    Hover untuk preview • {(bgConfig.video?.url || '').startsWith('blob:') ? 'preview lokal (belum upload selesai)' : (bgConfig.video?.url || '').slice(0, 80)}
                  </p>
                </div>
              )}

              <p className="text-[10px] leading-relaxed text-slate-500 bg-indigo-50/60 border border-indigo-100 rounded-xl px-2.5 py-2">
                💡 <b>Tips ringan & tajam:</b> MP4 H.264 720p–1080p, ≤50MB. Video disimpan sebagai file statis
                lalu diputar via <b>streaming progresif</b> (tidak di-download sekaligus). Hindari base64 —
                otomatis ditolak saat save agar database tidak jebol.
              </p>

              {/* Direct Video URL Input */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Video MP4/WebM URL</label>
                <input
                  type="text"
                  placeholder="https://assets.mixkit.co/videos/preview/..."
                  value={bgConfig.video?.url || ''}
                  onChange={(e) => applyLiveBackground(curr => ({
                    ...curr,
                    video: { ...curr.video, url: e.target.value }
                  }))}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono text-slate-800"
                />
              </div>

              {/* Looping Video Presets */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1.5">Curated Looping Video Presets</label>
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-0.5 ds-scrollbar-thin">
                  {BACKGROUND_VIDEO_PRESETS.map((vid) => {
                    const isSelected = bgConfig.video?.url === vid.url;
                    return (
                      <button
                        key={vid.id}
                        type="button"
                        onClick={() => applyLiveBackground(curr => ({
                          ...curr,
                          type: 'video',
                          video: { ...curr.video, url: vid.url, title: vid.title }
                        }))}
                        className={`aspect-video rounded-xl overflow-hidden border-2 relative text-left transition-all ${
                          isSelected
                            ? 'border-indigo-600 ring-2 ring-indigo-400 scale-[1.02]'
                            : 'border-slate-200 hover:border-indigo-400'
                        }`}
                      >
                        <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                          <Play className="h-4 w-4 text-white fill-white" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-1 bg-slate-950/70 text-[9px] text-white truncate font-bold">
                          {vid.title}
                        </div>
                        {isSelected && (
                          <div className="absolute top-1 right-1 px-1.5 py-0.5 bg-indigo-600 text-white rounded text-[8px] font-bold shadow-xs">
                            Active
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Video Toggles */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <label className="flex items-center gap-1.5 p-2 bg-white rounded-lg border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={bgConfig.video?.autoplay ?? true}
                    onChange={(e) => applyLiveBackground(curr => ({
                      ...curr,
                      video: { ...curr.video, autoplay: e.target.checked }
                    }))}
                    className="rounded text-indigo-600 focus:ring-indigo-500 h-3.5 w-3.5"
                  />
                  <span className="text-[11px] font-bold text-slate-700">Autoplay</span>
                </label>
                <label className="flex items-center gap-1.5 p-2 bg-white rounded-lg border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={bgConfig.video?.loop ?? true}
                    onChange={(e) => applyLiveBackground(curr => ({
                      ...curr,
                      video: { ...curr.video, loop: e.target.checked }
                    }))}
                    className="rounded text-indigo-600 focus:ring-indigo-500 h-3.5 w-3.5"
                  />
                  <span className="text-[11px] font-bold text-slate-700">Looping</span>
                </label>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* 6. DARK / TINT OVERLAY (LIVE FOR ALL TYPES)               */}
          {/* ========================================================= */}
          {(currentType === 'image' || currentType === 'video' || currentType === 'gradient' || currentType === 'color') && (
            <div className="space-y-3.5 p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-indigo-600" />
                  <span>Dark Tint / Color Overlay</span>
                </h4>
                <span className="text-[11px] font-mono font-bold text-indigo-600">
                  {bgConfig.overlay?.opacity ?? 0}%
                </span>
              </div>

              <div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={bgConfig.overlay?.opacity ?? 0}
                  onChange={(e) => applyLiveBackground(curr => ({
                    ...curr,
                    overlay: { ...curr.overlay, opacity: parseInt(e.target.value) }
                  }))}
                  className="w-full accent-indigo-600"
                />
              </div>

              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={bgConfig.overlay?.color || '#000000'}
                    onChange={(e) => applyLiveBackground(curr => ({
                      ...curr,
                      overlay: { ...curr.overlay, color: e.target.value }
                    }))}
                    className="w-8 h-7 rounded-lg border border-slate-200 cursor-pointer p-0.5 bg-white shadow-xs"
                  />
                  <span className="text-[11px] text-slate-600 font-bold">Tint Color</span>
                </div>

                <select
                  value={bgConfig.overlay?.blendMode || 'normal'}
                  onChange={(e) => applyLiveBackground(curr => ({
                    ...curr,
                    overlay: { ...curr.overlay, blendMode: e.target.value }
                  }))}
                  className="px-2 py-1 bg-white border border-slate-200 rounded-lg text-[11px] font-bold"
                >
                  <option value="normal">Normal</option>
                  <option value="multiply">Multiply (Darken)</option>
                  <option value="screen">Screen (Lighten)</option>
                  <option value="overlay">Overlay</option>
                </select>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* 7. VISUAL FILTERS (LIVE)                                  */}
          {/* ========================================================= */}
          <div className="space-y-3 p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200 shadow-xs">
            <h4 className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
              <span>Visual Filters (Blur & Brightness)</span>
            </h4>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-bold text-slate-600">Blur</label>
                <span className="text-[11px] font-mono font-bold text-indigo-600">{bgConfig.filters?.blur ?? 0}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="25"
                value={bgConfig.filters?.blur ?? 0}
                onChange={(e) => applyLiveBackground(curr => ({
                  ...curr,
                  filters: { ...curr.filters, blur: parseInt(e.target.value) }
                }))}
                className="w-full accent-indigo-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-bold text-slate-600">Brightness</label>
                <span className="text-[11px] font-mono font-bold text-indigo-600">{bgConfig.filters?.brightness ?? 100}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                value={bgConfig.filters?.brightness ?? 100}
                onChange={(e) => applyLiveBackground(curr => ({
                  ...curr,
                  filters: { ...curr.filters, brightness: parseInt(e.target.value) }
                }))}
                className="w-full accent-indigo-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-bold text-slate-600">Contrast</label>
                <span className="text-[11px] font-mono font-bold text-indigo-600">{bgConfig.filters?.contrast ?? 100}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                value={bgConfig.filters?.contrast ?? 100}
                onChange={(e) => applyLiveBackground(curr => ({
                  ...curr,
                  filters: { ...curr.filters, contrast: parseInt(e.target.value) }
                }))}
                className="w-full accent-indigo-600"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
  }

  // ==========================================
  // COMPONENT SELECTED -> COMPONENT INSPECTOR
  // ==========================================
  return (
    <div className="h-full flex flex-col">
      {/* Tabs */}
      <div className="flex items-center gap-1 px-3 pt-3 pb-2 border-b border-slate-200 overflow-x-auto scrollbar-thin">
        {COMPONENT_TABS.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap shrink-0 ${
                activeTab === tab.id
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Component</h3>
            <span className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full font-bold">
              {componentConfig?.label || selectedComponent.type}
            </span>
          </div>

          {/* 1. BUTTON SMART CTA CARD (Rendered on Content tab for buttons) */}
          {selectedComponent?.type === 'button' && activeTab === 'content' && (
            <div className="p-4 bg-indigo-50/70 border border-indigo-100 rounded-2xl space-y-4 mb-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-extrabold text-indigo-900 uppercase tracking-wide flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
                  <span>Smart CTA & Action Settings</span>
                </h4>
                <span className="text-[10px] text-indigo-600 font-bold bg-indigo-100/70 px-2 py-0.5 rounded-full uppercase">
                  {formValues.action?.type || formValues.actionType || formValues.linkType || 'web_url'}
                </span>
              </div>

              {/* Button Text */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Button Label / Text</label>
                <input
                  type="text"
                  value={formValues.content?.text || formValues.text || formValues.label || (typeof formValues.content === 'string' ? formValues.content : '')}
                  onChange={(e) => {
                    const val = e.target.value;
                    handleChange('label', val);
                    handleChange('text', val);
                    if (typeof formValues.content === 'object') {
                      handleChange('content', { ...formValues.content, text: val });
                    }
                  }}
                  placeholder="e.g. Hubungi Kami Sekarang"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800"
                />
              </div>

              {/* Action Type Selector */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Action Destination Type</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { id: 'card_form', label: '📋 Card Form' },
                    { id: 'web_url', label: '🌐 Web URL' },
                    { id: 'file_download', label: '📁 Download File' },
                    { id: 'whatsapp', label: '💬 WhatsApp' },
                    { id: 'page', label: '📄 Subpage' },
                    { id: 'section', label: '⚓ Section ID' },
                    { id: 'email', label: '✉️ Email' },
                    { id: 'phone', label: '📞 Phone' },
                  ].map(t => {
                    const currentType = formValues.action?.type || formValues.actionType || formValues.linkType || 'web_url';
                    const isSelected = currentType === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => handleButtonActionTypeChange(t.id)}
                        className={`py-2 px-1.5 text-[11px] font-bold rounded-xl border transition text-center truncate cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs ring-2 ring-indigo-500/20'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                        title={t.label}
                      >
                        {t.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Action Details Box */}
              <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-3">
                {/* Hidden File Input */}
                <input
                  type="file"
                  ref={buttonFileInputRef}
                  onChange={handleButtonFileUpload}
                  className="hidden"
                />

                {/* 0. CARD FORM (SUBMIT FORM TO WHATSAPP / EMAIL) */}
                {(formValues.actionType === 'card_form' || formValues.linkType === 'card_form' || formValues.action?.type === 'card_form') && (
                  <div className="space-y-3">
                    <div className="p-2.5 bg-indigo-50/80 border border-indigo-200/60 rounded-lg">
                      <p className="text-[11px] font-bold text-indigo-900 flex items-center gap-1.5 mb-1">
                        <Send className="w-3.5 h-3.5 text-indigo-600" />
                        Otomatisasi Kirim Isian Formulir
                      </p>
                      <p className="text-[10px] text-indigo-700 leading-relaxed">
                        Saat tombol ditekan, seluruh input data dari pengunjung pada kartu form ini akan otomatis dirangkum rapi dan dikirimkan ke WhatsApp atau Email.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-slate-700">Saluran Pengiriman Tujuan:</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            handleChange('formChannel', 'whatsapp');
                            if (formValues.action) {
                              handleChange('action', { ...formValues.action, formChannel: 'whatsapp' });
                            }
                          }}
                          className={`py-2 px-3 rounded-lg border text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer ${
                            (formValues.formChannel || formValues.action?.formChannel || 'whatsapp') === 'whatsapp'
                              ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            handleChange('formChannel', 'email');
                            if (formValues.action) {
                              handleChange('action', { ...formValues.action, formChannel: 'email' });
                            }
                          }}
                          className={`py-2 px-3 rounded-lg border text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer ${
                            (formValues.formChannel || formValues.action?.formChannel) === 'email'
                              ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Email</span>
                        </button>
                      </div>
                    </div>

                    {((formValues.formChannel || formValues.action?.formChannel || 'whatsapp') === 'whatsapp') ? (
                      <>
                        <div className="space-y-1">
                          <label className="text-[11px] font-medium text-slate-700 flex items-center gap-1">
                            <span className="text-emerald-600 font-bold">●</span> Nomor WhatsApp Penerima:
                          </label>
                          <input
                            type="text"
                            value={formValues.actionValue !== undefined ? formValues.actionValue : (formValues.formTarget || '')}
                            onChange={(e) => {
                              handleChange('actionValue', e.target.value);
                              handleChange('formTarget', e.target.value);
                            }}
                            placeholder="Contoh: 081199887766 atau 6281199887766"
                            className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono focus:bg-white focus:border-emerald-500 focus:outline-hidden"
                          />
                          <p className="text-[10px] text-slate-400">Pesan form akan dikirim langsung ke WhatsApp nomor ini.</p>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-medium text-slate-700">Header / Salam Pembuka WhatsApp:</label>
                          <input
                            type="text"
                            value={formValues.actionMessage !== undefined ? formValues.actionMessage : ''}
                            onChange={(e) => handleChange('actionMessage', e.target.value)}
                            placeholder="Halo Admin, ada permohonan baru dari formulir website:"
                            className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:border-emerald-500 focus:outline-hidden"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="space-y-1">
                          <label className="text-[11px] font-medium text-slate-700 flex items-center gap-1">
                            <span className="text-indigo-600 font-bold">●</span> Alamat Email Tujuan Penerima:
                          </label>
                          <input
                            type="email"
                            value={formValues.actionValue !== undefined ? formValues.actionValue : (formValues.formTarget || '')}
                            onChange={(e) => {
                              handleChange('actionValue', e.target.value);
                              handleChange('formTarget', e.target.value);
                            }}
                            placeholder="secretariat@nusantaragroup.co.id"
                            className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono focus:bg-white focus:border-indigo-500 focus:outline-hidden"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-medium text-slate-700">Subjek Email:</label>
                          <input
                            type="text"
                            value={formValues.actionMessage !== undefined ? formValues.actionMessage : ''}
                            onChange={(e) => handleChange('actionMessage', e.target.value)}
                            placeholder="[Form Website] Permohonan Baru Pemegang Saham"
                            className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:border-indigo-500 focus:outline-hidden"
                          />
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* 1. WEB URL */}
                {((formValues.actionType || formValues.linkType || formValues.action?.type || 'web_url') === 'web_url') && (
                  <>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 mb-1">Web URL Destination</label>
                      <input
                        type="url"
                        value={formValues.actionValue !== undefined ? formValues.actionValue : (formValues.href || formValues.linkTarget || '')}
                        onChange={(e) => handleChange('actionValue', e.target.value)}
                        placeholder="https://example.com/promo"
                        className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono focus:bg-white focus:border-indigo-500 focus:outline-hidden"
                      />
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer pt-1">
                      <input
                        type="checkbox"
                        checked={formValues.target === '_blank' || formValues.linkOpenNewTab === true || formValues.action?.target === '_blank'}
                        onChange={(e) => handleChange('target', e.target.checked ? '_blank' : '_self')}
                        className="w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-[11px] text-slate-600 font-medium">Buka di Tab Baru (`_blank`)</span>
                    </label>
                  </>
                )}

                {/* 1.5 FILE DOWNLOAD / UPLOAD */}
                {((formValues.actionType || formValues.linkType || formValues.action?.type) === 'file_download' || (formValues.actionType || formValues.linkType || formValues.action?.type) === 'file') && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 mb-1 flex items-center gap-1">
                        <Download className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Upload File yang Dapat Diunduh Pengunjung</span>
                      </label>

                      {/* Dropzone Upload Button */}
                      <div
                        onClick={() => buttonFileInputRef.current?.click()}
                        className="border-2 border-dashed border-indigo-200 hover:border-indigo-500 bg-indigo-50/50 hover:bg-indigo-50 p-3.5 rounded-xl text-center cursor-pointer transition-all space-y-1.5"
                      >
                        <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto">
                          <Upload className="w-4 h-4" />
                        </div>
                        <div className="text-xs font-bold text-slate-700">
                          Klik untuk Upload File dari Perangkat (PC / HP)
                        </div>
                        <div className="text-[10px] text-slate-500">
                          Format: PDF, DOCX, XLSX, ZIP, PNG, JPG, MP3, DLL
                        </div>
                      </div>
                    </div>

                    {/* Attached File Preview Card */}
                    {(formValues.actionValue || formValues.action?.value) && (
                      <div className="p-3 bg-indigo-50/60 border border-indigo-200 rounded-xl space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2 overflow-hidden">
                            <div className="p-2 bg-indigo-600 text-white rounded-lg shrink-0">
                              <FileText className="w-4 h-4" />
                            </div>
                            <div className="overflow-hidden">
                              <p className="text-xs font-bold text-slate-800 truncate" title={formValues.fileName || formValues.action?.fileName || 'File Terlampir'}>
                                {formValues.fileName || formValues.action?.fileName || 'File Terlampir'}
                              </p>
                              <p className="text-[10px] text-slate-500 font-mono font-bold">
                                {formValues.fileSize || formValues.action?.fileSize || 'Local File Data'}
                              </p>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              handleChange('actionValue', '');
                              handleChange('fileName', '');
                              handleChange('fileSize', '');
                            }}
                            className="p-1 text-slate-400 hover:text-rose-600 rounded-md hover:bg-rose-50 transition cursor-pointer"
                            title="Hapus File"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Set Download Icon Shortcut */}
                        <button
                          type="button"
                          onClick={() => {
                            const val = 'Download';
                            handleChange('iconLeft', val);
                            if (typeof formValues.content === 'object') {
                              handleChange('content', { ...formValues.content, iconLeft: val });
                            }
                            toast.success('Ikon tombol diubah ke Download!', 'Ikon Diperbarui');
                          }}
                          className="w-full py-1.5 px-2 bg-white hover:bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded-lg border border-indigo-200 transition flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <Download className="w-3 h-3 text-indigo-600" />
                          <span>Pasang Ikon Download pada Tombol</span>
                        </button>
                      </div>
                    )}

                    {/* Direct File URL Input */}
                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <label className="block text-[10px] font-bold text-slate-600">
                        Atau Masukkan Direct Link File Online (URL / CDN)
                      </label>
                      <input
                        type="text"
                        value={formValues.actionValue !== undefined ? formValues.actionValue : (formValues.href || formValues.linkTarget || '')}
                        onChange={(e) => handleChange('actionValue', e.target.value)}
                        placeholder="https://example.com/files/dokumen.pdf"
                        className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono focus:bg-white focus:border-indigo-500 focus:outline-hidden"
                      />
                      <div>
                        <label className="block text-[9px] font-bold text-slate-500 mb-0.5">Nama File Unduhan (Custom File Name)</label>
                        <input
                          type="text"
                          value={formValues.fileName || ''}
                          onChange={(e) => handleChange('fileName', e.target.value)}
                          placeholder="e.g. Brosur-Perusahaan-2026.pdf"
                          className="w-full px-2 py-1 bg-slate-50 border border-slate-200 rounded-md text-[11px] font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. WHATSAPP */}
                {(formValues.actionType || formValues.linkType || formValues.action?.type) === 'whatsapp' && (
                  <>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 mb-1 flex items-center gap-1">
                        <span className="text-emerald-600 font-bold">●</span> Nomor WhatsApp (Format: 08... atau 628...)
                      </label>
                      <input
                        type="text"
                        value={formValues.actionValue !== undefined ? formValues.actionValue : (formValues.linkTarget || '')}
                        onChange={(e) => handleChange('actionValue', e.target.value)}
                        placeholder="Contoh: 081234567890 atau 6281234567890"
                        className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono focus:bg-white focus:border-emerald-500 focus:outline-hidden"
                      />
                      <span className="text-[9px] text-slate-400 mt-0.5 block">Otomatis diformat internasional ke https://wa.me/62...</span>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 mb-1">Pesan Otomatis Default</label>
                      <textarea
                        rows={2}
                        value={formValues.actionMessage !== undefined ? formValues.actionMessage : ''}
                        onChange={(e) => handleChange('actionMessage', e.target.value)}
                        placeholder="Halo Admin, saya ingin konsultasi..."
                        className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs resize-none focus:bg-white focus:border-emerald-500 focus:outline-hidden"
                      />
                    </div>
                  </>
                )}

                {/* 3. SUBPAGE */}
                {(formValues.actionType || formValues.linkType || formValues.action?.type) === 'page' && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 mb-1">Select Existing Subpage</label>
                      <select
                        value={formValues.actionValue !== undefined ? formValues.actionValue : (formValues.linkTarget || '')}
                        onChange={(e) => {
                          handleChange('actionValue', e.target.value);
                          handleChange('linkTarget', e.target.value);
                        }}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:bg-white focus:border-indigo-500 focus:outline-hidden cursor-pointer"
                      >
                        <option value="">-- Select Subpage --</option>
                        {Object.values(pages).map(p => (
                          <option key={p.id} value={p.id}>
                            📄 {p.name} (/{p.slug})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Create New Subpage directly */}
                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <label className="block text-[11px] font-extrabold text-indigo-900">Create New Subpage for This Button</label>
                      <div className="flex flex-col gap-2">
                        <input
                          type="text"
                          placeholder="Subpage name (e.g. Pricing Table)"
                          value={newSubpageName}
                          onChange={(e) => setNewSubpageName(e.target.value)}
                          className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 font-medium focus:bg-white focus:border-indigo-500 focus:outline-hidden"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            if (!newSubpageName.trim()) {
                              toast.error('Please enter a subpage name', 'Name Required');
                              return;
                            }
                            const newPid = addSubPage(newSubpageName.trim());
                            handleChange('actionValue', newPid);
                            handleChange('linkTarget', newPid);
                            setNewSubpageName('');
                            toast.success('New subpage created & linked to button!', 'Subpage');
                          }}
                          className="w-full py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                        >
                          <Plus className="h-3.5 w-3.5" />
                          <span>Create & Link Subpage</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. SECTION ANCHOR */}
                {(formValues.actionType || formValues.linkType || formValues.action?.type) === 'section' && (
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Target Landing Section</label>
                    <select
                      value={formValues.actionValue !== undefined ? formValues.actionValue : (formValues.linkTarget || formValues.href || '')}
                      onChange={(e) => {
                        handleChange('actionValue', e.target.value);
                        handleChange('linkTarget', e.target.value);
                      }}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:bg-white focus:border-indigo-500 focus:outline-hidden cursor-pointer"
                    >
                      <option value="">-- Select Section --</option>
                      {(landingSections.length > 0 ? landingSections : sections).map(sec => (
                        <option key={sec.id} value={`#${sec.id}`}>
                          {sec.type.toUpperCase()} ({sec.layout})
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* 5. EMAIL */}
                {(formValues.actionType || formValues.linkType || formValues.action?.type) === 'email' && (
                  <>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 mb-1">Alamat Email Tujuan</label>
                      <input
                        type="email"
                        value={formValues.actionValue !== undefined ? formValues.actionValue : ''}
                        onChange={(e) => handleChange('actionValue', e.target.value)}
                        placeholder="sales@company.com"
                        className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:border-indigo-500 focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 mb-1">Subjek Email Default</label>
                      <input
                        type="text"
                        value={formValues.actionMessage !== undefined ? formValues.actionMessage : ''}
                        onChange={(e) => handleChange('actionMessage', e.target.value)}
                        placeholder="Tanya Penawaran Produk"
                        className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:border-indigo-500 focus:outline-hidden"
                      />
                    </div>
                  </>
                )}

                {/* 6. PHONE */}
                {(formValues.actionType || formValues.linkType || formValues.action?.type) === 'phone' && (
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Nomor Telepon</label>
                    <input
                      type="tel"
                      value={formValues.actionValue !== undefined ? formValues.actionValue : ''}
                      onChange={(e) => handleChange('actionValue', e.target.value)}
                      placeholder="081234567890 / +6281234567890"
                      className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono focus:bg-white focus:border-indigo-500 focus:outline-hidden"
                    />
                  </div>
                )}
              </div>

              {/* Left / Right Icons */}
              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-indigo-100/80">
                <div>
                  <label className="block text-[10px] font-bold text-slate-600 mb-1">Ikon Kiri (Left)</label>
                  <select
                    value={formValues.content?.iconLeft || formValues.iconLeft || 'None'}
                    onChange={(e) => {
                      const val = e.target.value === 'None' ? null : e.target.value;
                      handleChange('iconLeft', val);
                      if (typeof formValues.content === 'object') {
                        handleChange('content', { ...formValues.content, iconLeft: val });
                      }
                    }}
                    className="w-full px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-xs cursor-pointer"
                  >
                    {['None', 'MessageCircle', 'ArrowRight', 'Send', 'Phone', 'Mail', 'Download', 'ShoppingCart', 'Calendar', 'Sparkles', 'CheckCircle', 'Play'].map(ik => (
                      <option key={`left-${ik}`} value={ik}>{ik}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-600 mb-1">Ikon Kanan (Right)</label>
                  <select
                    value={formValues.content?.iconRight || formValues.iconRight || 'None'}
                    onChange={(e) => {
                      const val = e.target.value === 'None' ? null : e.target.value;
                      handleChange('iconRight', val);
                      if (typeof formValues.content === 'object') {
                        handleChange('content', { ...formValues.content, iconRight: val });
                      }
                    }}
                    className="w-full px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-xs cursor-pointer"
                  >
                    {['None', 'ArrowRight', 'MessageCircle', 'Send', 'Phone', 'Mail', 'Download', 'ShoppingCart', 'Calendar', 'Sparkles', 'CheckCircle', 'Play'].map(ik => (
                      <option key={`right-${ik}`} value={ik}>{ik}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {selectedComponent?.type === 'card' ? (
            renderCardInspector(activeTab, formValues, handleChange, setActiveTab)
          ) : selectedComponent?.type === 'social' ? (
            renderSocialInspector(activeTab, formValues, handleChange, setActiveTab)
          ) : selectedComponent?.type === 'form' ? (
            <FormCardInspector
              activeTab={activeTab}
              formValues={formValues}
              handleChange={handleChange}
              setActiveTab={setActiveTab}
            />
          ) : selectedComponent?.type === 'image' || 'src' in (selectedComponent?.props || {}) ? (
            <ImageInspector
              activeTab={activeTab}
              formValues={formValues}
              handleChange={handleChange}
              setActiveTab={setActiveTab}
              addUpload={addUpload}
            />
          ) : (
            (() => {
              const allProps = Object.entries(propertyConfig?.props || {});
              const tabProps = allProps.filter(([key]) => {
                const mappedTab = PROP_TAB_MAPPING[key] || 'content';
                if (selectedComponent?.type === 'button') {
                  // For button, hide redundant content properties already shown in Smart CTA Card
                  if (activeTab === 'content' && ['label', 'href', 'linkType', 'linkTarget', 'icon', 'content'].includes(key)) {
                    return false;
                  }
                }
                return mappedTab === activeTab;
              });
              const propsToDisplay = tabProps;

              if (propsToDisplay.length === 0 && selectedComponent?.type === 'button' && activeTab === 'content') {
                return null;
              }

              return (
                <div className="space-y-4">
                  {propsToDisplay.map(([key, config]) => (
                    <div key={key}>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {config.label}
                      </label>
                      {renderInput(key, config, formValues[key], handleChange)}
                    </div>
                  ))}
                </div>
              );
            })()
          )}
        </div>

        {/* Delete */}
        <div className="p-4 pt-0">
          {selectedComponent?.isLocked ? (
            <div className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-50 text-amber-600 text-sm font-bold rounded-lg cursor-not-allowed select-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Locked – Cannot Delete
            </div>
          ) : (
            <button
              onClick={handleDelete}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-red-50 text-red-600 text-sm font-bold rounded-lg hover:bg-red-100 transition"
            >
              <Trash2 className="h-4 w-4" />
              Delete Component
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const renderInput = (key, config, value, onChange) => {
  switch (config.type) {
    case 'select':
      return (
        <div className="space-y-1.5">
          {key === 'align' ? (
            <div className="flex gap-1">
              {[
                { val: 'left', label: 'Left' },
                { val: 'center', label: 'Center' },
                { val: 'right', label: 'Right' },
                { val: 'justify', label: 'Justify' },
              ].map(al => (
                <button
                  key={al.val}
                  type="button"
                  onClick={() => onChange(key, al.val)}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-xl border transition ${
                    value === al.val
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {al.label}
                </button>
              ))}
            </div>
          ) : key === 'level' ? (
            <div className="grid grid-cols-6 gap-1">
              {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(lvl => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => onChange(key, lvl)}
                  className={`py-1.5 text-xs font-mono font-bold rounded-xl border transition uppercase ${
                    value === lvl
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          ) : key === 'fontWeight' ? (
            <div className="grid grid-cols-4 gap-1">
              {[
                { val: '400', label: 'Regular' },
                { val: '500', label: 'Medium' },
                { val: '600', label: 'Semibold' },
                { val: '700', label: 'Bold' },
                { val: '800', label: 'Extra' },
                { val: '900', label: 'Black' },
              ].map(fw => (
                <button
                  key={fw.val}
                  type="button"
                  onClick={() => onChange(key, fw.val)}
                  className={`py-1 text-[10px] font-bold rounded-lg border transition ${
                    String(value) === fw.val
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {fw.label}
                </button>
              ))}
            </div>
          ) : key === 'variant' && config.options?.length <= 5 ? (
            <div className="flex flex-wrap gap-1">
              {config.options.map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => onChange(key, opt)}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg border transition capitalize ${
                    value === opt
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          ) : (
            <select
              value={value ?? ''}
              onChange={(e) => onChange(key, e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800"
            >
              {(config.options || []).map(option => (
                <option key={option} value={option}>
                  {typeof option === 'string' ? option.charAt(0).toUpperCase() + option.slice(1) : option}
                </option>
              ))}
            </select>
          )}
        </div>
      );

    case 'color':
      return (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={value === 'transparent' ? '#ffffff' : (value || '#000000')}
              onChange={(e) => onChange(key, e.target.value)}
              className="w-10 h-9 border border-slate-200 rounded-xl cursor-pointer p-0.5 bg-white shadow-xs shrink-0"
            />
            <input
              type="text"
              value={value || ''}
              onChange={(e) => onChange(key, e.target.value)}
              className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-800"
              placeholder="#ffffff or transparent"
            />
          </div>
          <div className="flex flex-wrap gap-1">
            {[
              '#4f46e5', '#2563eb', '#06b6d4', '#10b981', '#f59e0b',
              '#ef4444', '#ec4899', '#8b5cf6', '#0f172a', '#64748b',
              '#f8fafc', '#ffffff', 'transparent'
            ].map(cHex => (
              <button
                key={cHex}
                type="button"
                onClick={() => onChange(key, cHex)}
                className={`w-5 h-5 rounded-md border shadow-2xs transition hover:scale-110 ${
                  (value || '').toLowerCase() === cHex.toLowerCase() ? 'ring-2 ring-indigo-500 scale-110 border-indigo-600' : 'border-slate-300'
                }`}
                style={{ backgroundColor: cHex === 'transparent' ? '#ffffff' : cHex }}
                title={cHex}
              />
            ))}
          </div>
        </div>
      );

    case 'range':
      return (
        <div className="space-y-1">
          <div className="flex justify-between text-xs font-bold text-slate-700">
            <span>{config.label}</span>
            <span className="text-indigo-600 font-mono">{value ?? config.default}{config.unit || '%'}</span>
          </div>
          <input
            type="range"
            min={config.min || 0}
            max={config.max || 100}
            value={value ?? config.default ?? 100}
            onChange={(e) => onChange(key, parseInt(e.target.value))}
            className="w-full accent-indigo-600"
          />
        </div>
      );

    case 'textarea':
      return (
        <textarea
          value={value ?? ''}
          onChange={(e) => onChange(key, e.target.value)}
          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 leading-relaxed font-medium"
          rows={config.rows || 3}
          placeholder={config.label}
        />
      );

    default:
      return (
        <div className="space-y-1.5">
          {key === 'content' || key === 'label' ? (
            <textarea
              value={value ?? ''}
              onChange={(e) => onChange(key, e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 font-medium leading-relaxed resize-y min-h-[60px]"
              placeholder={config.label}
            />
          ) : (
            <input
              type="text"
              value={value ?? ''}
              onChange={(e) => onChange(key, e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-800"
              placeholder={config.label}
            />
          )}

          {/* Quick Presets for Image URL */}
          {key === 'src' && (
            <div className="space-y-2 pt-1">
              <label className="block text-[10px] font-bold text-slate-500">Image Presets / Unsplash</label>
              <div className="grid grid-cols-3 gap-1">
                {[
                  { label: 'Tech / Office', url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80' },
                  { label: 'Creative', url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80' },
                  { label: 'Business', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80' },
                  { label: 'Modern Team', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80' },
                  { label: 'App / UI', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80' },
                  { label: 'Minimal', url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80' },
                ].map(p => (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => onChange(key, p.url)}
                    className="py-1 px-1.5 text-[9px] font-bold rounded-lg border border-slate-200 bg-white hover:border-indigo-500 hover:text-indigo-600 truncate transition"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick Presets for Icon Name */}
          {key === 'icon' && (
            <div className="pt-1">
              <label className="block text-[10px] font-bold text-slate-500 mb-1">Quick Icon Presets</label>
              <div className="grid grid-cols-4 gap-1">
                {[
                  { label: 'Globe', val: 'FaGlobe' },
                  { label: 'Play', val: 'FaPlay' },
                  { label: 'Truck', val: 'FaTruck' },
                  { label: 'Check', val: 'FaCheck' },
                  { label: 'Star', val: 'FaStar' },
                  { label: 'Rocket', val: 'FaRocket' },
                  { label: 'Shield', val: 'FaShieldAlt' },
                  { label: 'User', val: 'FaUser' },
                  { label: 'Phone', val: 'FaPhone' },
                  { label: 'Mail', val: 'FaEnvelope' },
                  { label: 'Store', val: 'FaStore' },
                  { label: 'Grad', val: 'FaGraduationCap' },
                  { label: 'Heart', val: 'FaHeart' },
                  { label: 'Chart', val: 'FaChartLine' },
                  { label: 'Bolt', val: 'FaBolt' },
                  { label: 'Award', val: 'FaAward' },
                ].map(ic => (
                  <button
                    key={ic.val}
                    type="button"
                    onClick={() => onChange(key, ic.val)}
                    className={`py-1 text-[10px] font-bold rounded-lg border transition truncate ${
                      value === ic.val
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {ic.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick Presets for Font Size */}
          {key === 'fontSize' && (
            <div className="flex flex-wrap gap-1 pt-1">
              {['12px', '14px', '16px', '18px', '20px', '24px', '32px', '40px', '48px', '64px'].map(sz => (
                <button
                  key={sz}
                  type="button"
                  onClick={() => onChange(key, sz)}
                  className={`px-1.5 py-0.5 text-[9px] font-mono font-bold rounded border transition ${
                    value === sz
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          )}

          {/* Quick Presets for Size */}
          {key === 'size' && (
            <div className="flex gap-1 pt-1">
              {['16px', '24px', '32px', '40px', '48px', '64px'].map(sz => (
                <button
                  key={sz}
                  type="button"
                  onClick={() => onChange(key, sz)}
                  className={`flex-1 py-1 text-[10px] font-bold rounded-lg border transition ${
                    value === sz
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          )}

          {/* Quick Presets for Border Radius */}
          {(key === 'borderRadius' || key === 'radius') && (
            <div className="flex gap-1 pt-1">
              {['0px', '8px', '12px', '16px', '24px', '9999px'].map(r => (
                <button
                  key={r}
                  type="button"
                  onClick={() => onChange(key, r)}
                  className={`flex-1 py-1 text-[10px] font-bold rounded-lg border transition ${
                    value === r
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {r === '9999px' ? 'Pill' : r}
                </button>
              ))}
            </div>
          )}
        </div>
      );
  }
};

const renderCardInspector = (activeTab, formValues, handleChange, setActiveTab) => {
  const cardSwatches = [
    '#ffffff', '#f8fafc', '#f1f5f9', '#e2e8f0', '#0f172a', '#1e1b4b',
    '#4f46e5', '#2563eb', '#0ea5e9', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#8b5cf6', 'transparent'
  ];

  const shadowOptions = [
    { id: 'none', label: 'None', preview: 'shadow-none border border-slate-200' },
    { id: 'sm', label: 'Small', preview: 'shadow-sm border border-slate-100' },
    { id: 'md', label: 'Medium', preview: 'shadow-md border border-slate-100' },
    { id: 'lg', label: 'Large', preview: 'shadow-lg border border-slate-100' },
    { id: 'xl', label: 'XL', preview: 'shadow-xl border border-slate-100' },
    { id: '2xl', label: '2XL', preview: 'shadow-2xl border border-slate-100' },
  ];

  const hoverOptions = [
    { id: 'none', label: 'None', desc: 'Static' },
    { id: 'lift', label: 'Lift Up', desc: 'Elevates card' },
    { id: 'scale', label: 'Scale Up', desc: 'Zooms slightly' },
    { id: 'glow', label: 'Glow Ring', desc: 'Glowing border' },
    { id: 'border', label: 'Border Highlight', desc: 'Color border' },
  ];

  const radiusPresets = [
    { label: '0px', value: '0px' },
    { label: '8px', value: '8px' },
    { label: '16px', value: '16px' },
    { label: '24px', value: '24px' },
    { label: '32px', value: '32px' },
    { label: 'Pill', value: '9999px' },
  ];

  return (
    <div className="space-y-4">
      {/* 1. CONTENT TAB */}
      {(activeTab === 'content' || activeTab === 'all') && (
        <div className="space-y-4">
          {/* Card Background Color Picker (Always accessible on Content tab!) */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800 flex items-center justify-between">
              <span>Card Background Color</span>
              <span className="text-[10px] font-mono text-slate-500">{formValues.background || '#ffffff'}</span>
            </h4>

            <div className="flex items-center gap-2">
              <input
                type="color"
                value={formValues.background === 'transparent' ? '#ffffff' : (formValues.background || '#ffffff')}
                onChange={(e) => handleChange('background', e.target.value)}
                className="w-10 h-9 rounded-xl border border-slate-200 cursor-pointer p-0.5 bg-white shadow-xs"
              />
              <input
                type="text"
                value={formValues.background || '#ffffff'}
                onChange={(e) => handleChange('background', e.target.value)}
                className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-800"
                placeholder="#ffffff or transparent"
              />
            </div>

            {/* Quick Color Swatches */}
            <div>
              <label className="block text-[10px] font-bold text-slate-600 mb-1.5">Color Swatches</label>
              <div className="flex flex-wrap gap-1.5">
                {cardSwatches.map(cHex => (
                  <button
                    key={cHex}
                    type="button"
                    onClick={() => handleChange('background', cHex)}
                    className={`w-6 h-6 rounded-lg border shadow-2xs transition hover:scale-110 ${
                      (formValues.background || '#ffffff').toLowerCase() === cHex.toLowerCase()
                        ? 'ring-2 ring-indigo-500 scale-110 border-indigo-600'
                        : 'border-slate-300'
                    }`}
                    style={{ backgroundColor: cHex === 'transparent' ? '#ffffff' : cHex }}
                    title={cHex}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800 flex items-center justify-between">
              <span>Card Variant Preset</span>
              <span className="text-[10px] text-indigo-600 font-mono uppercase">{formValues.variant || 'service'}</span>
            </h4>
            <select
              value={formValues.variant || 'service'}
              onChange={(e) => handleChange('variant', e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 shadow-2xs"
            >
              <option value="service">Service Card</option>
              <option value="feature">Feature Card</option>
              <option value="team">Team Member Card</option>
              <option value="testimonial">Testimonial Card</option>
              <option value="pricing">Pricing Plan Card</option>
              <option value="product">Product Card</option>
              <option value="default">Default Clean Card</option>
            </select>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800">Content Alignment</h4>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Align Items</label>
                <select
                  value={formValues.alignItems || 'stretch'}
                  onChange={(e) => handleChange('alignItems', e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium"
                >
                  <option value="stretch">Stretch (Fill)</option>
                  <option value="flex-start">Top / Left</option>
                  <option value="center">Center</option>
                  <option value="flex-end">Bottom / Right</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Justify Content</label>
                <select
                  value={formValues.justifyContent || 'flex-start'}
                  onChange={(e) => handleChange('justifyContent', e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium"
                >
                  <option value="flex-start">Start</option>
                  <option value="center">Center</option>
                  <option value="flex-end">End</option>
                  <option value="space-between">Space Between</option>
                </select>
              </div>
            </div>
          </div>

          {/* Quick shortcuts */}
          <div className="p-3 bg-indigo-50/60 rounded-2xl border border-indigo-100 space-y-2">
            <p className="text-[11px] font-bold text-indigo-900">Card Design Quick Links</p>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                type="button"
                onClick={() => setActiveTab('spacing')}
                className="px-2 py-1.5 bg-white text-indigo-700 text-[10px] font-bold rounded-lg border border-indigo-200 hover:bg-indigo-600 hover:text-white transition"
              >
                Size & Padding
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('color')}
                className="px-2 py-1.5 bg-white text-indigo-700 text-[10px] font-bold rounded-lg border border-indigo-200 hover:bg-indigo-600 hover:text-white transition"
              >
                Colors & Bg
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('border')}
                className="px-2 py-1.5 bg-white text-indigo-700 text-[10px] font-bold rounded-lg border border-indigo-200 hover:bg-indigo-600 hover:text-white transition"
              >
                Corners & Border
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. COLORS TAB */}
      {activeTab === 'color' && (
        <div className="space-y-4">
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800 flex items-center justify-between">
              <span>Background Color</span>
              <span className="text-[10px] font-mono text-slate-500">{formValues.background || '#ffffff'}</span>
            </h4>

            <div className="flex items-center gap-2">
              <input
                type="color"
                value={formValues.background === 'transparent' ? '#ffffff' : (formValues.background || '#ffffff')}
                onChange={(e) => handleChange('background', e.target.value)}
                className="w-10 h-9 rounded-xl border border-slate-200 cursor-pointer p-0.5 bg-white shadow-xs"
              />
              <input
                type="text"
                value={formValues.background || '#ffffff'}
                onChange={(e) => handleChange('background', e.target.value)}
                className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-800"
                placeholder="#ffffff or transparent"
              />
            </div>

            {/* Quick Color Swatches */}
            <div>
              <label className="block text-[10px] font-bold text-slate-600 mb-1.5">Color Swatches</label>
              <div className="flex flex-wrap gap-1.5">
                {cardSwatches.map(cHex => (
                  <button
                    key={cHex}
                    type="button"
                    onClick={() => handleChange('background', cHex)}
                    className={`w-6 h-6 rounded-lg border shadow-2xs transition hover:scale-110 ${
                      (formValues.background || '#ffffff').toLowerCase() === cHex.toLowerCase()
                        ? 'ring-2 ring-indigo-500 scale-110 border-indigo-600'
                        : 'border-slate-300'
                    }`}
                    style={{ backgroundColor: cHex === 'transparent' ? '#ffffff' : cHex }}
                    title={cHex}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Background Gradient */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800">Gradient Background (CSS)</h4>
            <input
              type="text"
              placeholder="e.g. linear-gradient(135deg, #4f46e5, #ec4899)"
              value={formValues.backgroundGradient || ''}
              onChange={(e) => handleChange('backgroundGradient', e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono text-slate-800"
            />
            {/* Presets */}
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { label: 'Clear', val: '' },
                { label: 'Indigo Silk', val: 'linear-gradient(135deg, #4f46e5, #ec4899)' },
                { label: 'Cyber Blue', val: 'linear-gradient(135deg, #2563eb, #06b6d4)' },
                { label: 'Dark Space', val: 'linear-gradient(180deg, #0f172a, #1e1b4b)' },
                { label: 'Sunset Glow', val: 'linear-gradient(135deg, #f97316, #ec4899)' },
                { label: 'Soft Glass', val: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))' },
              ].map(g => (
                <button
                  key={g.label}
                  type="button"
                  onClick={() => handleChange('backgroundGradient', g.val)}
                  className="py-1.5 px-2 text-[10px] font-bold rounded-lg border border-slate-200 bg-white hover:border-indigo-400 truncate"
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {/* Card Opacity */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-extrabold text-slate-800">Card Opacity</label>
              <span className="text-xs font-mono font-bold text-indigo-600">{formValues.opacity ?? 100}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={formValues.opacity ?? 100}
              onChange={(e) => handleChange('opacity', parseInt(e.target.value))}
              className="w-full accent-indigo-600"
            />
          </div>
        </div>
      )}

      {/* 3. SPACING TAB */}
      {activeTab === 'spacing' && (
        <div className="space-y-4">
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800">Card Dimensions (Size)</h4>
            
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Width</label>
                <input
                  type="text"
                  value={formValues.width || '100%'}
                  onChange={(e) => handleChange('width', e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono"
                  placeholder="100% or 350px"
                />
                <div className="flex gap-1 mt-1">
                  {['100%', '300px', '360px', 'auto'].map(w => (
                    <button
                      key={w}
                      type="button"
                      onClick={() => handleChange('width', w)}
                      className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[9px] font-bold text-slate-600 hover:bg-slate-100"
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Height</label>
                <input
                  type="text"
                  value={formValues.height || 'auto'}
                  onChange={(e) => handleChange('height', e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono"
                  placeholder="auto or 320px"
                />
                <div className="flex gap-1 mt-1">
                  {['auto', '280px', '350px', '100%'].map(h => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => handleChange('height', h)}
                      className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[9px] font-bold text-slate-600 hover:bg-slate-100"
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Min Height</label>
                <input
                  type="text"
                  value={formValues.minHeight || 'auto'}
                  onChange={(e) => handleChange('minHeight', e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono"
                  placeholder="auto or 200px"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Max Width</label>
                <input
                  type="text"
                  value={formValues.maxWidth || 'none'}
                  onChange={(e) => handleChange('maxWidth', e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono"
                  placeholder="none or 450px"
                />
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800">Inner Padding & Outer Margin</h4>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[10px] font-bold text-slate-600">Card Inner Padding</label>
                <span className="text-[10px] font-mono font-bold text-indigo-600">{formValues.padding || '24px'}</span>
              </div>
              <input
                type="text"
                value={formValues.padding || '24px'}
                onChange={(e) => handleChange('padding', e.target.value)}
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-mono mb-2"
                placeholder="24px or 16px 24px"
              />
              <div className="flex gap-1">
                {['12px', '16px', '24px', '32px', '40px'].map(p => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => handleChange('padding', p)}
                    className={`flex-1 py-1 text-[10px] font-bold rounded-lg border transition ${
                      formValues.padding === p
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200/70">
              <label className="block text-[10px] font-bold text-slate-600 mb-1">Card Outer Margin</label>
              <input
                type="text"
                value={formValues.margin || '0px'}
                onChange={(e) => handleChange('margin', e.target.value)}
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-mono"
                placeholder="0px or 16px 0"
              />
            </div>
          </div>
        </div>
      )}

      {/* 4. BORDER TAB */}
      {activeTab === 'border' && (
        <div className="space-y-4">
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="text-xs font-extrabold text-slate-800">Border Radius (Corners)</h4>
              <span className="text-[10px] font-mono font-bold text-indigo-600">{formValues.borderRadius || '16px'}</span>
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              {radiusPresets.map(r => (
                <button
                  key={r.value}
                  type="button"
                  onClick={() => handleChange('borderRadius', r.value)}
                  className={`py-2 text-xs font-bold rounded-xl border flex items-center justify-center gap-1 transition ${
                    (formValues.borderRadius || '16px') === r.value
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>{r.label}</span>
                </button>
              ))}
            </div>

            <input
              type="text"
              value={formValues.borderRadius || '16px'}
              onChange={(e) => handleChange('borderRadius', e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono"
              placeholder="e.g. 16px or 24px"
            />
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800">Border Width & Style</h4>

            <div>
              <label className="block text-[10px] font-bold text-slate-600 mb-1">Border Width</label>
              <div className="flex gap-1.5">
                {['0px', '1px', '2px', '3px', '4px'].map(bw => (
                  <button
                    key={bw}
                    type="button"
                    onClick={() => handleChange('borderWidth', bw)}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-xl border transition ${
                      (formValues.borderWidth || '1px') === bw
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {bw}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Border Style</label>
                <select
                  value={formValues.borderStyle || 'solid'}
                  onChange={(e) => handleChange('borderStyle', e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold"
                >
                  <option value="solid">Solid</option>
                  <option value="dashed">Dashed</option>
                  <option value="dotted">Dotted</option>
                  <option value="none">None</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Border Color</label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="color"
                    value={formValues.borderColor || '#e2e8f0'}
                    onChange={(e) => handleChange('borderColor', e.target.value)}
                    className="w-8 h-8 rounded-lg border border-slate-200 cursor-pointer p-0.5 bg-white"
                  />
                  <input
                    type="text"
                    value={formValues.borderColor || '#e2e8f0'}
                    onChange={(e) => handleChange('borderColor', e.target.value)}
                    className="flex-1 px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-[11px] font-mono font-bold"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. SHADOW TAB */}
      {activeTab === 'shadow' && (
        <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
          <h4 className="text-xs font-extrabold text-slate-800">Card Elevation / Box Shadow</h4>

          <div className="grid grid-cols-2 gap-2">
            {shadowOptions.map(s => {
              const isSelected = (formValues.shadow || 'md') === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleChange('shadow', s.id)}
                  className={`p-3 rounded-xl text-left bg-white transition-all ${s.preview} ${
                    isSelected
                      ? 'ring-2 ring-indigo-600 border-indigo-600'
                      : 'hover:border-indigo-400'
                  }`}
                >
                  <span className="block text-xs font-bold text-slate-800">{s.label}</span>
                  <span className="block text-[10px] text-slate-400 capitalize">{s.id} shadow</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 6. ANIMATION TAB */}
      {activeTab === 'animation' && (
        <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
          <h4 className="text-xs font-extrabold text-slate-800">Card Hover Animation</h4>

          <div className="space-y-2">
            {hoverOptions.map(h => {
              const isSelected = (formValues.hoverEffect || 'lift') === h.id;
              return (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => handleChange('hoverEffect', h.id)}
                  className={`w-full p-3 rounded-xl text-left border flex items-center justify-between transition-all ${
                    isSelected
                      ? 'bg-indigo-50/70 border-indigo-600 text-indigo-900 ring-1 ring-indigo-500'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div>
                    <span className="block text-xs font-bold">{h.label}</span>
                    <span className="block text-[10px] text-slate-500">{h.desc}</span>
                  </div>
                  {isSelected && <Check className="h-4 w-4 text-indigo-600" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 7. TYPOGRAPHY TAB */}
      {activeTab === 'typography' && (
        <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl text-center space-y-2">
          <p className="text-xs font-bold text-amber-800">Card Container Has No Text</p>
          <p className="text-[11px] text-amber-700 leading-relaxed">
            Card is a container component. To edit fonts and text colors, click on any Heading or Text component inside the card on the canvas.
          </p>
        </div>
      )}

      {/* 8. POSITION TAB */}
      {activeTab === 'position' && (
        <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
          <h4 className="text-xs font-extrabold text-slate-800">Position & Z-Index</h4>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[10px] font-bold text-slate-600 mb-1">X Position (px)</label>
              <input
                type="number"
                value={formValues.x || 0}
                onChange={(e) => handleChange('x', parseInt(e.target.value) || 0)}
                className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-600 mb-1">Y Position (px)</label>
              <input
                type="number"
                value={formValues.y || 0}
                onChange={(e) => handleChange('y', parseInt(e.target.value) || 0)}
                className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const renderSocialInspector = (activeTab, formValues, handleChange, setActiveTab) => {
  const ALL_PLATFORMS = [
    { id: 'facebook', label: 'Facebook', defaultUrl: 'https://facebook.com', color: '#1877F2' },
    { id: 'twitter', label: 'Twitter / X', defaultUrl: 'https://x.com', color: '#000000' },
    { id: 'instagram', label: 'Instagram', defaultUrl: 'https://instagram.com', color: '#E4405F' },
    { id: 'linkedin', label: 'LinkedIn', defaultUrl: 'https://linkedin.com', color: '#0A66C2' },
    { id: 'youtube', label: 'YouTube', defaultUrl: 'https://youtube.com', color: '#FF0000' },
    { id: 'github', label: 'GitHub', defaultUrl: 'https://github.com', color: '#24292e' },
    { id: 'tiktok', label: 'TikTok', defaultUrl: 'https://tiktok.com', color: '#000000' },
    { id: 'whatsapp', label: 'WhatsApp', defaultUrl: 'https://wa.me', color: '#25D366' },
    { id: 'discord', label: 'Discord', defaultUrl: 'https://discord.gg', color: '#5865F2' },
    { id: 'telegram', label: 'Telegram', defaultUrl: 'https://t.me', color: '#24A1DE' },
    { id: 'website', label: 'Website / Link', defaultUrl: 'https://example.com', color: '#4f46e5' },
  ];

  const rawPlatforms = formValues.platforms;
  const currentPlatforms = Array.isArray(rawPlatforms)
    ? rawPlatforms
    : typeof rawPlatforms === 'string'
      ? rawPlatforms.split(',').map(s => s.trim()).filter(Boolean)
      : ['facebook', 'twitter', 'linkedin'];

  const currentLinks = typeof formValues.socialLinks === 'object' && formValues.socialLinks !== null
    ? formValues.socialLinks
    : {};

  const togglePlatform = (platformId) => {
    let updated;
    if (currentPlatforms.includes(platformId)) {
      updated = currentPlatforms.filter(p => p !== platformId);
    } else {
      updated = [...currentPlatforms, platformId];
    }
    handleChange('platforms', updated);
  };

  const handleUrlChange = (platformId, urlValue) => {
    const updatedLinks = { ...currentLinks, [platformId]: urlValue };
    handleChange('socialLinks', updatedLinks);
  };

  const selectPreset = (presetList) => {
    handleChange('platforms', presetList);
  };

  return (
    <div className="space-y-4">
      {/* 1. CONTENT TAB */}
      {(activeTab === 'content' || activeTab === 'all') && (
        <div className="space-y-4">
          {/* Quick Presets */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider">Quick Presets</span>
              <span className="text-[10px] text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full font-bold">
                {currentPlatforms.length} Active
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => selectPreset(['facebook', 'instagram', 'twitter', 'linkedin'])}
                className="px-2.5 py-1 bg-white hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 text-[10px] font-bold rounded-lg border border-slate-200 transition shadow-2xs cursor-pointer"
              >
                Popular 4
              </button>
              <button
                type="button"
                onClick={() => selectPreset(['facebook', 'instagram', 'twitter', 'youtube', 'tiktok'])}
                className="px-2.5 py-1 bg-white hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 text-[10px] font-bold rounded-lg border border-slate-200 transition shadow-2xs cursor-pointer"
              >
                Social Media
              </button>
              <button
                type="button"
                onClick={() => selectPreset(['whatsapp', 'telegram', 'discord'])}
                className="px-2.5 py-1 bg-white hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 text-[10px] font-bold rounded-lg border border-slate-200 transition shadow-2xs cursor-pointer"
              >
                Messaging
              </button>
              <button
                type="button"
                onClick={() => selectPreset(ALL_PLATFORMS.map(p => p.id))}
                className="px-2.5 py-1 bg-white hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 text-[10px] font-bold rounded-lg border border-slate-200 transition shadow-2xs cursor-pointer"
              >
                Select All
              </button>
              <button
                type="button"
                onClick={() => selectPreset([])}
                className="px-2.5 py-1 bg-white hover:bg-red-50 hover:text-red-600 text-slate-500 text-[10px] font-bold rounded-lg border border-slate-200 transition shadow-2xs cursor-pointer"
              >
                Clear All
              </button>
            </div>
          </div>

          {/* Social Platforms & Links List */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                Platforms & Target Links
              </label>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Pilih sosial media yang ingin ditampilkan dan masukkan URL untuk mengarahkan pengunjung saat icon diklik.
            </p>

            <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1 ds-scrollbar-thin">
              {ALL_PLATFORMS.map((item) => {
                const isEnabled = currentPlatforms.includes(item.id);
                const currentUrl = currentLinks[item.id] !== undefined ? currentLinks[item.id] : item.defaultUrl;

                return (
                  <div
                    key={item.id}
                    className={`p-3 rounded-2xl border transition-all ${
                      isEnabled
                        ? 'bg-white border-indigo-200 shadow-xs ring-1 ring-indigo-100'
                        : 'bg-slate-50/70 border-slate-200/80 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={isEnabled}
                          onChange={() => togglePlatform(item.id)}
                          className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4 cursor-pointer"
                        />
                        <span className="w-2.5 h-2.5 rounded-full inline-block shrink-0" style={{ backgroundColor: item.color }} />
                        <span className="text-xs font-bold text-slate-800">{item.label}</span>
                      </label>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                          isEnabled ? 'bg-indigo-50 text-indigo-700' : 'bg-slate-200 text-slate-500'
                        }`}
                      >
                        {isEnabled ? 'Active' : 'Disabled'}
                      </span>
                    </div>

                    {isEnabled && (
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-bold text-slate-500 shrink-0">Link URL:</span>
                          <input
                            type="text"
                            value={currentUrl}
                            onChange={(e) => handleUrlChange(item.id, e.target.value)}
                            placeholder={item.defaultUrl}
                            className="flex-1 px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-800 focus:bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Style & Layout Controls Card */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3 pt-4">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
              Icon Display Settings
            </h4>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Icon Size</label>
                <select
                  value={formValues.size || 'medium'}
                  onChange={(e) => handleChange('size', e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800"
                >
                  <option value="small">Small (16px)</option>
                  <option value="medium">Medium (20px)</option>
                  <option value="large">Large (24px)</option>
                  <option value="xlarge">Extra Large (32px)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Alignment</label>
                <select
                  value={formValues.align || 'left'}
                  onChange={(e) => handleChange('align', e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800"
                >
                  <option value="left">Left Align</option>
                  <option value="center">Center Align</option>
                  <option value="right">Right Align</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Icon Style Variant</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'default', label: 'Default (Minimal)' },
                  { id: 'circle', label: 'Circle Badge' },
                  { id: 'square', label: 'Square Badge' },
                  { id: 'brand', label: 'Official Brand' },
                ].map(v => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => handleChange('styleVariant', v.id)}
                    className={`py-2 px-2 text-xs font-bold rounded-xl border transition cursor-pointer ${
                      (formValues.styleVariant || 'default') === v.id
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Custom Icon Color (Optional)</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={formValues.color || '#4f46e5'}
                  onChange={(e) => handleChange('color', e.target.value)}
                  className="w-9 h-8 rounded-xl border border-slate-200 cursor-pointer p-0.5 bg-white shadow-xs"
                />
                <input
                  type="text"
                  value={formValues.color || ''}
                  onChange={(e) => handleChange('color', e.target.value)}
                  placeholder="Default / Monochromatic"
                  className="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-800"
                />
                {formValues.color && (
                  <button
                    type="button"
                    onClick={() => handleChange('color', '')}
                    className="text-[10px] text-red-500 font-bold hover:underline cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* COLORS TAB */}
      {activeTab === 'color' && (
        <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
          <label className="block text-xs font-extrabold text-slate-800">Custom Colors</label>
          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">Icon Custom Color</label>
            <input
              type="color"
              value={formValues.color || '#4f46e5'}
              onChange={(e) => handleChange('color', e.target.value)}
              className="w-10 h-9 rounded-xl border border-slate-200 cursor-pointer p-0.5 bg-white shadow-xs"
            />
          </div>
        </div>
      )}
    </div>
  );
};

function FormCardInspector({ activeTab, formValues, handleChange, setActiveTab }) {
  // Fields state for the field editor
  const [editingFieldIdx, setEditingFieldIdx] = useState(0);
  const action = formValues.action || {};
  const actionType = action.type || 'card_form';
  const updateAction = (updates) => handleChange('action', { ...action, ...updates });

  const defaultFields = Array.isArray(formValues.fields) && formValues.fields.length > 0
    ? formValues.fields
    : [
        { id: 'f1', type: 'text', label: '', placeholder: 'Ketik teks di sini...', required: false, width: 'full' },
      ];

  const fields = Array.isArray(formValues.fields) && formValues.fields.length > 0 ? formValues.fields : defaultFields;

  const updateFields = (updatedFields) => handleChange('fields', updatedFields);

  const addField = (type = 'text') => {
    const newId = `f${Date.now()}`;
    const newField = {
      id: newId,
      type,
      label: type === 'select' ? 'Pilih Opsi Dropdown:' : '',
      placeholder: type === 'select' ? '-- Pilih Opsi --' : 'Ketik teks di sini...',
      required: false,
      width: 'full',
      ...(type === 'select' ? { options: ['Pilihan 1', 'Pilihan 2', 'Pilihan 3'], optionsText: 'Pilihan 1\nPilihan 2\nPilihan 3' } : {}),
    };
    updateFields([...fields, newField]);
    setEditingFieldIdx(fields.length);
  };

  const removeField = (idx) => {
    const updated = fields.filter((_, i) => i !== idx);
    updateFields(updated);
    if (editingFieldIdx === idx) setEditingFieldIdx(null);
  };

  const updateFieldProp = (idx, key, val) => {
    const updated = fields.map((f, i) => {
      if (i !== idx) return f;
      if (key === 'options' && Array.isArray(val)) {
        return { ...f, options: val, optionsText: val.join('\n') };
      }
      return { ...f, [key]: val };
    });
    updateFields(updated);
  };

  const updateFieldOptions = (idx, rawStr) => {
    const opts = rawStr.split('\n').map(o => o.trim()).filter(Boolean);
    const updated = fields.map((f, i) => i === idx ? { ...f, options: opts } : f);
    updateFields(updated);
  };

  const colorSwatches = [
    '#0d1627', '#0f172a', '#1e293b', '#060b18', '#1a1a2e', '#111827', '#18181b',
    '#ffffff', '#f8fafc', '#4f46e5', '#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'
  ];

  return (
    <div className="space-y-4">
      {/* ── CONTENT TAB ── */}
      {(activeTab === 'content' || activeTab === 'all') && (
        <div className="space-y-4">
          <div className="p-3.5 bg-indigo-50/70 rounded-2xl border border-indigo-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-extrabold text-indigo-950">Action Destination Type</h4>
              <span className="text-[10px] font-bold text-indigo-700 bg-white px-2 py-0.5 rounded-full border border-indigo-200">
                {actionType}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { id: 'card_form', label: '📋 Card Form' },
                { id: 'web_url', label: '🌐 Web URL' },
                { id: 'file_download', label: '📁 Download File' },
                { id: 'whatsapp', label: '💬 WhatsApp' },
                { id: 'page', label: '📄 Subpage' },
                { id: 'section', label: '⚓ Section ID' },
                { id: 'email', label: '✉️ Email' },
                { id: 'phone', label: '📞 Phone' },
              ].map((destination) => (
                <button
                  key={destination.id}
                  type="button"
                  onClick={() => updateAction({ type: destination.id })}
                  className={`py-2 px-1.5 text-[11px] font-bold rounded-xl border transition text-center truncate ${
                    actionType === destination.id
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs ring-2 ring-indigo-500/20'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {destination.label}
                </button>
              ))}
            </div>

            <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-3">
              {actionType === 'card_form' && (
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-700">Saluran Pengiriman Tujuan:</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'whatsapp', label: 'WhatsApp' },
                      { id: 'email', label: 'Email' },
                    ].map((channel) => (
                      <button
                        key={channel.id}
                        type="button"
                        onClick={() => updateAction({ formChannel: channel.id })}
                        className={`py-2 px-3 rounded-lg border text-xs font-bold transition ${
                          (action.formChannel || 'whatsapp') === channel.id
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {channel.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {(actionType === 'card_form' || actionType === 'whatsapp' || actionType === 'email') ? (
                <>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      {(actionType === 'email' || (actionType === 'card_form' && action.formChannel === 'email'))
                        ? 'Alamat Email Tujuan'
                        : 'Nomor WhatsApp Penerima'}
                    </label>
                    <input
                      type={actionType === 'email' || (actionType === 'card_form' && action.formChannel === 'email') ? 'email' : 'text'}
                      required
                      value={action.value || ''}
                      onChange={(e) => updateAction({ value: e.target.value })}
                      placeholder={actionType === 'email' || (actionType === 'card_form' && action.formChannel === 'email')
                        ? 'admin@example.com'
                        : 'Contoh: 081199887766'}
                      className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono focus:bg-white focus:border-indigo-500 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      {(actionType === 'email' || (actionType === 'card_form' && action.formChannel === 'email'))
                        ? 'Subjek Email'
                        : 'Header / Salam Pembuka WhatsApp'}
                    </label>
                    <input
                      type="text"
                      value={(actionType === 'email' || (actionType === 'card_form' && action.formChannel === 'email'))
                        ? (action.formSubject || '')
                        : (action.message || '')}
                      onChange={(e) => updateAction(
                        (actionType === 'email' || (actionType === 'card_form' && action.formChannel === 'email'))
                          ? { formSubject: e.target.value }
                          : { message: e.target.value }
                      )}
                      placeholder={(actionType === 'email' || (actionType === 'card_form' && action.formChannel === 'email'))
                        ? '[Form Website] Permohonan Baru'
                        : 'Halo Admin, ada permohonan baru dari formulir website:'}
                      className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:border-indigo-500 focus:outline-hidden"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      {actionType === 'web_url' ? 'Web URL Destination' :
                        actionType === 'file_download' ? 'File URL Destination' :
                          actionType === 'page' ? 'Subpage Destination' :
                            actionType === 'section' ? 'Section ID Destination' :
                              'Phone Number Destination'}
                    </label>
                    <input
                      type="text"
                      required={actionType !== 'section'}
                      value={action.value || ''}
                      onChange={(e) => updateAction({ value: e.target.value })}
                      placeholder={actionType === 'section' ? '#contact' : 'Masukkan tujuan'}
                      className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono focus:bg-white focus:border-indigo-500 focus:outline-hidden"
                    />
                  </div>
                  {actionType === 'web_url' && (
                    <label className="flex items-center gap-2 text-[11px] text-slate-700">
                      <input
                        type="checkbox"
                        checked={action.target === '_blank'}
                        onChange={(e) => updateAction({ target: e.target.checked ? '_blank' : '_self' })}
                      />
                      Buka di tab baru
                    </label>
                  )}
                  {actionType === 'file_download' && (
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">Nama File Unduhan</label>
                      <input
                        type="text"
                        value={action.fileName || ''}
                        onChange={(e) => updateAction({ fileName: e.target.value })}
                        placeholder="dokumen.pdf"
                        className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* 1. Fields Manager (+ Tambah Field Input / Dropdown) */}
          <div className="p-3.5 bg-indigo-50/70 rounded-2xl border border-indigo-200/80 space-y-3 shadow-2xs">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-extrabold text-indigo-950">Kelola Field Form Card</h4>
                <p className="text-[10px] text-indigo-700/80">Atur input ketik atau pilihan dropdown</p>
              </div>
              <span className="text-[10px] font-extrabold text-indigo-700 bg-white px-2 py-0.5 rounded-full border border-indigo-200">
                {fields.length} Input Field
              </span>
            </div>

            {/* Quick Add Buttons */}
            <div className="grid grid-cols-2 gap-1.5 pt-1">
              {[
                { type: 'text', label: '+ Input Teks' },
                { type: 'select', label: '+ Dropdown' },
                { type: 'textarea', label: '+ Textarea' },
                { type: 'email', label: '+ Email' },
                { type: 'tel', label: '+ Telepon' },
                { type: 'number', label: '+ Angka' },
              ].map(ft => (
                <button
                  key={ft.type}
                  type="button"
                  onClick={() => addField(ft.type)}
                  className="py-1.5 px-2 text-[11px] font-bold rounded-xl border border-indigo-300 bg-white text-indigo-800 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition shadow-2xs flex items-center justify-center gap-1"
                >
                  {ft.label}
                </button>
              ))}
            </div>

            {/* Fields List */}
            <div className="space-y-2 max-h-72 overflow-y-auto pr-1 pt-1">
              {fields.map((field, idx) => (
                <div key={field.id || idx} className="bg-white rounded-xl border border-indigo-200/80 overflow-hidden shadow-2xs">
                  {/* Field Row Header */}
                  <div
                    className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-indigo-50/50 transition"
                    onClick={() => setEditingFieldIdx(editingFieldIdx === idx ? null : idx)}
                  >
                    <span className="text-[9px] font-black px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-800 uppercase shrink-0">
                      {field.type}
                    </span>
                    <span className="flex-1 text-[11px] font-bold text-slate-800 truncate">
                      {field.placeholder || field.label || `Input #${idx + 1}`}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); removeField(idx); }}
                      className="text-slate-400 hover:text-red-600 transition shrink-0 p-1"
                      title="Hapus Field"
                    >
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                    </button>
                  </div>

                  {/* Field Detail Editor */}
                  {editingFieldIdx === idx && (
                    <div className="px-3 pb-3 space-y-2 border-t border-indigo-100 bg-slate-50/80">
                      <div className="pt-2">
                        <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">Tipe Input Field</label>
                        <select
                          value={field.type || 'text'}
                          onChange={(e) => updateFieldProp(idx, 'type', e.target.value)}
                          className="w-full px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-[11px] font-bold text-slate-800"
                        >
                          <option value="text">Teks (Biasa)</option>
                          <option value="select">Dropdown (Pilihan)</option>
                          <option value="textarea">Textarea (Multi-baris)</option>
                          <option value="email">Email</option>
                          <option value="tel">Nomor HP / WA</option>
                          <option value="number">Angka</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">Placeholder (Teks di dalam input)</label>
                        <input
                          type="text"
                          value={field.placeholder || ''}
                          onChange={(e) => updateFieldProp(idx, 'placeholder', e.target.value)}
                          className="w-full px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-[11px] font-medium text-slate-800"
                          placeholder="Ketik teks di sini..."
                        />
                      </div>

                      <div>
                        <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">Label (Judul di atas input - Opsional)</label>
                        <input
                          type="text"
                          value={field.label || ''}
                          onChange={(e) => updateFieldProp(idx, 'label', e.target.value)}
                          className="w-full px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-800"
                          placeholder="Nama Lengkap:"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">Lebar Input</label>
                          <select
                            value={field.width || 'full'}
                            onChange={(e) => updateFieldProp(idx, 'width', e.target.value)}
                            className="w-full px-2 py-1 bg-white border border-slate-200 rounded-lg text-[11px] font-medium"
                          >
                            <option value="full">Full (100%)</option>
                            <option value="half">Half (50%)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">Wajib Diisi?</label>
                          <select
                            value={field.required ? 'yes' : 'no'}
                            onChange={(e) => updateFieldProp(idx, 'required', e.target.value === 'yes')}
                            className="w-full px-2 py-1 bg-white border border-slate-200 rounded-lg text-[11px] font-medium"
                          >
                            <option value="no">Opsional</option>
                            <option value="yes">Wajib (Required)</option>
                          </select>
                        </div>
                      </div>

                      {/* Dropdown Options Editor */}
                      {field.type === 'select' && (
                        <div className="p-3 bg-indigo-50/90 rounded-xl border border-indigo-200/80 space-y-2.5">
                          <div className="flex items-center justify-between">
                            <label className="block text-[10px] font-black text-indigo-950 uppercase tracking-wider">
                              Daftar Pilihan Dropdown ({Array.isArray(field.options) ? field.options.filter(Boolean).length : 0})
                            </label>
                            <button
                              type="button"
                              onClick={() => {
                                const currentOpts = Array.isArray(field.options) ? [...field.options] : [];
                                updateFieldProp(idx, 'options', [...currentOpts, `Pilihan ${currentOpts.length + 1}`]);
                              }}
                              className="px-2.5 py-1 text-[10px] font-extrabold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-2xs flex items-center gap-1 cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                              <span>+ Tambah Opsi</span>
                            </button>
                          </div>

                          {/* List of Option Inputs */}
                          <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                            {(Array.isArray(field.options) && field.options.length > 0 ? field.options : ['Pilihan 1', 'Pilihan 2']).map((opt, optIdx) => (
                              <div key={optIdx} className="flex items-center gap-1.5">
                                <span className="text-[10px] font-bold text-indigo-500 w-4 shrink-0 text-right">{optIdx + 1}.</span>
                                <input
                                  type="text"
                                  value={opt}
                                  onChange={(e) => {
                                    const currentOpts = Array.isArray(field.options) ? [...field.options] : [];
                                    currentOpts[optIdx] = e.target.value;
                                    updateFieldProp(idx, 'options', currentOpts);
                                  }}
                                  onKeyDown={(e) => e.stopPropagation()}
                                  className="flex-1 px-2.5 py-1.5 bg-white border border-indigo-200 rounded-lg text-xs font-bold text-slate-800 focus:border-indigo-600 focus:outline-hidden shadow-2xs"
                                  placeholder={`Pilihan ${optIdx + 1}`}
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    const currentOpts = Array.isArray(field.options) ? [...field.options] : [];
                                    const filtered = currentOpts.filter((_, i) => i !== optIdx);
                                    updateFieldProp(idx, 'options', filtered);
                                  }}
                                  className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition shrink-0 cursor-pointer"
                                  title="Hapus Opsi Ini"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>

                          {/* Multi-line Fast Textarea */}
                          <div className="pt-2 border-t border-indigo-200/60">
                            <label className="block text-[9px] font-black text-indigo-900 uppercase tracking-wider mb-1">
                              PILIHAN DROPDOWN (1 PER BARIS)
                            </label>
                            <textarea
                              value={
                                typeof field.optionsText === 'string'
                                  ? field.optionsText
                                  : (Array.isArray(field.options) ? field.options.join('\n') : (field.options || ''))
                              }
                              onChange={(e) => {
                                const val = e.target.value;
                                const lines = val.split('\n');
                                const updated = fields.map((f, i) => i === idx ? { ...f, options: lines, optionsText: val } : f);
                                updateFields(updated);
                              }}
                              onKeyDown={(e) => e.stopPropagation()}
                              className="w-full px-3 py-2 bg-white border border-slate-900 rounded-xl text-xs font-bold text-slate-900 resize-y shadow-xs focus:border-indigo-600 focus:outline-hidden"
                              rows={4}
                              placeholder="Pilihan 1&#10;Pilihan 2&#10;Pilihan 3"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Card Header (Title / Subtitle / Badge) */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800">Card Header (Opsional)</h4>
            <div>
              <label className="block text-[10px] font-bold text-slate-600 mb-1">Form Title</label>
              <input
                type="text"
                value={formValues.title || ''}
                onChange={(e) => handleChange('title', e.target.value)}
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800"
                placeholder="Judul Form (Kosongkan jika hanya input)..."
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-600 mb-1">Subtitle</label>
              <textarea
                value={formValues.subtitle || ''}
                onChange={(e) => handleChange('subtitle', e.target.value)}
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 resize-none"
                placeholder="Deskripsi singkat form..."
                rows={2}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800">Tombol Submit</h4>
            <div>
              <label className="block text-[10px] font-bold text-slate-600 mb-1">Label Tombol</label>
              <input
                type="text"
                value={formValues.submitLabel || 'KIRIM PESAN'}
                onChange={(e) => handleChange('submitLabel', e.target.value)}
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-600 mb-1">Posisi Tombol</label>
              <div className="grid grid-cols-4 gap-1">
                {['full', 'left', 'center', 'right'].map(al => (
                  <button
                    key={al}
                    type="button"
                    onClick={() => handleChange('submitAlign', al)}
                    className={`py-1.5 text-[10px] font-bold rounded-lg border transition capitalize ${
                      (formValues.submitAlign || 'full') === al
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {al === 'full' ? 'Full Width' : al}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Layout: Grid Columns */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
            <h4 className="text-xs font-extrabold text-slate-800">Layout Kolom Fields</h4>
            <div className="grid grid-cols-2 gap-2">
              {[{ val: '1', label: '1 Kolom' }, { val: '2', label: '2 Kolom' }].map(opt => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => handleChange('gridCols', opt.val)}
                  className={`py-2 text-xs font-bold rounded-xl border transition ${
                    (formValues.gridCols || '2') === opt.val
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Fields Manager */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-extrabold text-slate-800">Kelola Fields Form</h4>
              <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">{fields.length} field</span>
            </div>

            {/* Add Field Buttons */}
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { type: 'text', label: '+ Teks' },
                { type: 'email', label: '+ Email' },
                { type: 'tel', label: '+ Telepon' },
                { type: 'textarea', label: '+ Textarea' },
                { type: 'select', label: '+ Dropdown' },
                { type: 'number', label: '+ Angka' },
              ].map(ft => (
                <button
                  key={ft.type}
                  type="button"
                  onClick={() => addField(ft.type)}
                  className="py-1.5 px-2 text-[10px] font-bold rounded-lg border border-dashed border-indigo-300 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition"
                >
                  {ft.label}
                </button>
              ))}
            </div>

            {/* Fields List */}
            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {fields.map((field, idx) => (
                <div key={field.id || idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  {/* Field Row Header */}
                  <div
                    className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-slate-50 transition"
                    onClick={() => setEditingFieldIdx(editingFieldIdx === idx ? null : idx)}
                  >
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 uppercase shrink-0">
                      {field.type}
                    </span>
                    <span className="flex-1 text-[11px] font-bold text-slate-700 truncate">{field.label || '(no label)'}</span>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); removeField(idx); }}
                      className="text-red-400 hover:text-red-600 transition shrink-0 p-0.5"
                      title="Hapus Field"
                    >
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                    </button>
                  </div>

                  {/* Field Detail Editor */}
                  {editingFieldIdx === idx && (
                    <div className="px-3 pb-3 space-y-2 border-t border-slate-100 bg-slate-50/60">
                      <div className="pt-2">
                        <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">Label</label>
                        <input
                          type="text"
                          value={field.label || ''}
                          onChange={(e) => updateFieldProp(idx, 'label', e.target.value)}
                          className="w-full px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-800"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">Placeholder</label>
                        <input
                          type="text"
                          value={field.placeholder || ''}
                          onChange={(e) => updateFieldProp(idx, 'placeholder', e.target.value)}
                          className="w-full px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-800"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">Lebar</label>
                          <select
                            value={field.width || 'full'}
                            onChange={(e) => updateFieldProp(idx, 'width', e.target.value)}
                            className="w-full px-2 py-1 bg-white border border-slate-200 rounded-lg text-[11px] font-medium"
                          >
                            <option value="full">Full Width</option>
                            <option value="half">Half (1/2)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">Required?</label>
                          <select
                            value={field.required ? 'yes' : 'no'}
                            onChange={(e) => updateFieldProp(idx, 'required', e.target.value === 'yes')}
                            className="w-full px-2 py-1 bg-white border border-slate-200 rounded-lg text-[11px] font-medium"
                          >
                            <option value="yes">Wajib Diisi</option>
                            <option value="no">Opsional</option>
                          </select>
                        </div>
                      </div>

                      {/* Dropdown options editor */}
                      {field.type === 'select' && (
                        <div>
                          <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">Pilihan Dropdown (1 per baris)</label>
                          <textarea
                            value={Array.isArray(field.options) ? field.options.join('\n') : ''}
                            onChange={(e) => updateFieldOptions(idx, e.target.value)}
                            className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-800 resize-none"
                            rows={4}
                            placeholder="Pilihan 1&#10;Pilihan 2&#10;Pilihan 3"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="p-3 bg-indigo-50/60 rounded-2xl border border-indigo-100 space-y-2">
            <p className="text-[11px] font-bold text-indigo-900">Quick Design Links</p>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { label: 'Card Style', tab: 'color' },
                { label: 'Input Style', tab: 'typography' },
                { label: 'Spacing', tab: 'spacing' },
              ].map(ql => (
                <button
                  key={ql.tab}
                  type="button"
                  onClick={() => setActiveTab(ql.tab)}
                  className="px-2 py-1.5 bg-white text-indigo-700 text-[10px] font-bold rounded-lg border border-indigo-200 hover:bg-indigo-600 hover:text-white transition"
                >
                  {ql.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── COLOR TAB ── Card & Input Colors */}
      {activeTab === 'color' && (
        <div className="space-y-4">
          {/* Card Background */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800">Card Background</h4>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={formValues.background === 'transparent' ? '#0f172a' : (formValues.background || '#0f172a')}
                onChange={(e) => handleChange('background', e.target.value)}
                className="w-10 h-9 rounded-xl border border-slate-200 cursor-pointer p-0.5 bg-white shadow-xs"
              />
              <input
                type="text"
                value={formValues.background || '#0f172a'}
                onChange={(e) => handleChange('background', e.target.value)}
                className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-800"
                placeholder="#0f172a"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {colorSwatches.map(c => (
                <button key={c} type="button" onClick={() => handleChange('background', c)}
                  className={`w-6 h-6 rounded-lg border shadow-2xs transition hover:scale-110 ${(formValues.background || '#0f172a') === c ? 'ring-2 ring-indigo-500 scale-110 border-indigo-600' : 'border-slate-300'}`}
                  style={{ backgroundColor: c }}
                  title={c}
                />
              ))}
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-600 mb-1">Gradient CSS (Opsional)</label>
              <input
                type="text"
                value={formValues.backgroundGradient || ''}
                onChange={(e) => handleChange('backgroundGradient', e.target.value)}
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-mono text-slate-800"
                placeholder="linear-gradient(135deg, #0f172a, #1e1b4b)"
              />
            </div>
          </div>

          {/* Title & Text Colors */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800">Warna Teks</h4>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Warna Title</label>
                <div className="flex items-center gap-1.5">
                  <input type="color" value={formValues.color || '#ffffff'} onChange={(e) => handleChange('color', e.target.value)}
                    className="w-8 h-7 rounded-lg border border-slate-200 cursor-pointer p-0.5 bg-white" />
                  <input type="text" value={formValues.color || '#ffffff'} onChange={(e) => handleChange('color', e.target.value)}
                    className="flex-1 px-2 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-mono" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Warna Subtitle</label>
                <div className="flex items-center gap-1.5">
                  <input type="color" value={formValues.subtitleColor || '#94a3b8'} onChange={(e) => handleChange('subtitleColor', e.target.value)}
                    className="w-8 h-7 rounded-lg border border-slate-200 cursor-pointer p-0.5 bg-white" />
                  <input type="text" value={formValues.subtitleColor || '#94a3b8'} onChange={(e) => handleChange('subtitleColor', e.target.value)}
                    className="flex-1 px-2 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-mono" />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button Colors */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800">Warna Tombol Submit</h4>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Bg Tombol</label>
                <div className="flex items-center gap-1.5">
                  <input type="color" value={formValues.submitBackground || '#2563eb'} onChange={(e) => handleChange('submitBackground', e.target.value)}
                    className="w-8 h-7 rounded-lg border border-slate-200 cursor-pointer p-0.5 bg-white" />
                  <input type="text" value={formValues.submitBackground || '#2563eb'} onChange={(e) => handleChange('submitBackground', e.target.value)}
                    className="flex-1 px-2 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-mono" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Warna Teks</label>
                <div className="flex items-center gap-1.5">
                  <input type="color" value={formValues.submitColor || '#ffffff'} onChange={(e) => handleChange('submitColor', e.target.value)}
                    className="w-8 h-7 rounded-lg border border-slate-200 cursor-pointer p-0.5 bg-white" />
                  <input type="text" value={formValues.submitColor || '#ffffff'} onChange={(e) => handleChange('submitColor', e.target.value)}
                    className="flex-1 px-2 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-mono" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── TYPOGRAPHY TAB ── Input Style */}
      {activeTab === 'typography' && (
        <div className="space-y-4">
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800">Style Input Field</h4>
            <div>
              <label className="block text-[10px] font-bold text-slate-600 mb-1">Background Input</label>
              <div className="flex items-center gap-2">
                <input type="color" value={formValues.inputBackground || '#1e293b'} onChange={(e) => handleChange('inputBackground', e.target.value)}
                  className="w-9 h-8 rounded-xl border border-slate-200 cursor-pointer p-0.5 bg-white shadow-xs" />
                <input type="text" value={formValues.inputBackground || '#1e293b'} onChange={(e) => handleChange('inputBackground', e.target.value)}
                  className="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-800" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Warna Teks Input</label>
                <div className="flex items-center gap-1.5">
                  <input type="color" value={formValues.inputColor || '#ffffff'} onChange={(e) => handleChange('inputColor', e.target.value)}
                    className="w-8 h-7 rounded-lg border border-slate-200 cursor-pointer p-0.5 bg-white" />
                  <input type="text" value={formValues.inputColor || '#ffffff'} onChange={(e) => handleChange('inputColor', e.target.value)}
                    className="flex-1 px-2 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-mono" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Warna Label</label>
                <div className="flex items-center gap-1.5">
                  <input type="color" value={formValues.labelColor || '#94a3b8'} onChange={(e) => handleChange('labelColor', e.target.value)}
                    className="w-8 h-7 rounded-lg border border-slate-200 cursor-pointer p-0.5 bg-white" />
                  <input type="text" value={formValues.labelColor || '#94a3b8'} onChange={(e) => handleChange('labelColor', e.target.value)}
                    className="flex-1 px-2 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-mono" />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-600 mb-1">Border Input</label>
              <div className="flex items-center gap-2">
                <input type="color" value={formValues.inputBorderColor || '#334155'} onChange={(e) => handleChange('inputBorderColor', e.target.value)}
                  className="w-9 h-8 rounded-xl border border-slate-200 cursor-pointer p-0.5 bg-white shadow-xs" />
                <input type="text" value={formValues.inputBorderColor || '#334155'} onChange={(e) => handleChange('inputBorderColor', e.target.value)}
                  className="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-800" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-600 mb-1">Border Radius Input</label>
              <div className="flex gap-1">
                {['6px', '8px', '10px', '12px', '16px', '9999px'].map(r => (
                  <button key={r} type="button" onClick={() => handleChange('inputRadius', r)}
                    className={`flex-1 py-1 text-[10px] font-bold rounded-lg border transition ${(formValues.inputRadius || '10px') === r ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'}`}>
                    {r === '9999px' ? 'Pill' : r}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── SPACING TAB ── */}
      {activeTab === 'spacing' && (
        <div className="space-y-4">
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800">Padding & Gap</h4>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Card Padding</label>
                <input type="text" value={formValues.padding || '32px'} onChange={(e) => handleChange('padding', e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-mono" placeholder="32px" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Field Gap</label>
                <input type="text" value={formValues.gap || '16px'} onChange={(e) => handleChange('gap', e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-mono" placeholder="16px" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-600 mb-1">Margin (Outer)</label>
              <input type="text" value={formValues.margin || '0px'} onChange={(e) => handleChange('margin', e.target.value)}
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-mono" placeholder="0px or 16px auto" />
            </div>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800">Border & Radius</h4>
            <div className="grid grid-cols-3 gap-1.5">
              {['0px', '12px', '16px', '20px', '24px', '32px'].map(r => (
                <button key={r} type="button" onClick={() => handleChange('borderRadius', r)}
                  className={`py-1.5 px-1 text-[10px] font-bold rounded-lg border transition truncate ${(formValues.borderRadius || '20px') === r ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'}`}>
                  {r}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Border Width</label>
                <select value={formValues.borderWidth || '1px'} onChange={(e) => handleChange('borderWidth', e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold">
                  <option value="0px">None</option>
                  <option value="1px">1px</option>
                  <option value="2px">2px</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Border Color</label>
                <div className="flex items-center gap-1.5">
                  <input type="color" value={formValues.borderColor || '#1e293b'} onChange={(e) => handleChange('borderColor', e.target.value)}
                    className="w-8 h-7 rounded-lg border border-slate-200 cursor-pointer p-0.5 bg-white" />
                  <input type="text" value={formValues.borderColor || '#1e293b'} onChange={(e) => handleChange('borderColor', e.target.value)}
                    className="flex-1 px-2 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-mono" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
            <h4 className="text-xs font-extrabold text-slate-800">Card Shadow</h4>
            <div className="grid grid-cols-3 gap-1.5">
              {['none', 'sm', 'md', 'lg', 'xl', '2xl'].map(s => (
                <button key={s} type="button" onClick={() => handleChange('shadow', s)}
                  className={`py-1.5 text-[10px] font-bold rounded-lg border transition ${(formValues.shadow || 'xl') === s ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'}`}>
                  {s === 'none' ? 'None' : s.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── BORDER TAB ── Submit Radius */}
      {activeTab === 'border' && (
        <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
          <h4 className="text-xs font-extrabold text-slate-800">Radius Tombol Submit</h4>
          <div className="flex gap-1">
            {['6px', '8px', '12px', '16px', '24px', '9999px'].map(r => (
              <button key={r} type="button" onClick={() => handleChange('submitRadius', r)}
                className={`flex-1 py-1.5 text-[10px] font-bold rounded-lg border transition ${(formValues.submitRadius || '12px') === r ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'}`}>
                {r === '9999px' ? 'Pill' : r}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ImageInspector({ activeTab, formValues, handleChange, setActiveTab, addUpload }) {
  const fileInputRef = useRef(null);
  const [selectedPresetCategory, setSelectedPresetCategory] = useState('all');

  const PRESET_CATEGORIES = [
    { id: 'all', label: 'All Presets' },
    { id: 'industry', label: 'Industry & Factory' },
    { id: 'retail', label: 'Retail & Store' },
    { id: 'dairy', label: 'Dairy & Farm' },
    { id: 'logistics', label: 'Logistics & Fleet' },
    { id: 'education', label: 'Campus & Education' },
    { id: 'umkm', label: 'UMKM & Culinary' },
    { id: 'tech', label: 'Tech & Digital' },
  ];

  const IMAGE_PRESETS = [
    // Industry
    { cat: 'industry', title: 'Smart Factory Line', url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80' },
    { cat: 'industry', title: 'Industrial Robotics', url: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&auto=format&fit=crop&q=80' },
    { cat: 'industry', title: 'Heavy Machinery & Metal', url: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=80' },
    { cat: 'industry', title: 'High-Tech Engineering', url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80' },
    // Retail
    { cat: 'retail', title: 'Modern Supermarket', url: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&auto=format&fit=crop&q=80' },
    { cat: 'retail', title: 'Fashion Boutique', url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80' },
    { cat: 'retail', title: 'Fresh Grocery Display', url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80' },
    { cat: 'retail', title: 'Gadgets & Electronics', url: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=800&auto=format&fit=crop&q=80' },
    // Dairy
    { cat: 'dairy', title: 'Dairy Cattle Pasture', url: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?w=800&auto=format&fit=crop&q=80' },
    { cat: 'dairy', title: 'Fresh Milk Processing', url: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&auto=format&fit=crop&q=80' },
    { cat: 'dairy', title: 'Alpine Green Farm', url: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&auto=format&fit=crop&q=80' },
    { cat: 'dairy', title: 'Artisan Dairy Products', url: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&auto=format&fit=crop&q=80' },
    // Logistics
    { cat: 'logistics', title: 'Freight Trucks Highway', url: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&auto=format&fit=crop&q=80' },
    { cat: 'logistics', title: 'Port Container Cranes', url: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&auto=format&fit=crop&q=80' },
    { cat: 'logistics', title: 'Automated Warehouse', url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80' },
    { cat: 'logistics', title: 'Global Air Cargo', url: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&auto=format&fit=crop&q=80' },
    // Education
    { cat: 'education', title: 'Smart Campus Library', url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=80' },
    { cat: 'education', title: 'Modern Research Lab', url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80' },
    { cat: 'education', title: 'University Students', url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80' },
    { cat: 'education', title: 'Campus Hall Architecture', url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop&q=80' },
    // UMKM
    { cat: 'umkm', title: 'Artisan Cafe & Coffee', url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80' },
    { cat: 'umkm', title: 'Handcrafted Bakery', url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80' },
    { cat: 'umkm', title: 'Traditional Pottery Craft', url: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&auto=format&fit=crop&q=80' },
    { cat: 'umkm', title: 'Herbal Wellness Spa', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80' },
    // Tech
    { cat: 'tech', title: 'AI & Developer Workspace', url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80' },
    { cat: 'tech', title: 'Modern Tech Office', url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80' },
    { cat: 'tech', title: 'Creative Studio Design', url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80' },
    { cat: 'tech', title: 'Cyber Network Server', url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80' },
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file (PNG, JPG, WEBP, SVG)', 'Invalid File');
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      handleChange('src', dataUrl);
      if (typeof addUpload === 'function') {
        addUpload({
          name: file.name,
          url: dataUrl,
          size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
          type: 'image'
        });
      }
      toast.success(`Image "${file.name}" uploaded successfully!`, 'Image Updated');
    };
    reader.readAsDataURL(file);
  };

  const filteredPresets = selectedPresetCategory === 'all'
    ? IMAGE_PRESETS
    : IMAGE_PRESETS.filter(p => p.cat === selectedPresetCategory);

  const currentSrc = formValues.src || '';

  return (
    <div className="space-y-4">
      {/* 1. CONTENT TAB */}
      {(activeTab === 'content' || activeTab === 'all') && (
        <div className="space-y-4">
          {/* Live Preview Card */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">Image Preview</span>
              <span className="text-[10px] text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full font-bold">
                {formValues.objectFit || 'cover'}
              </span>
            </div>

            <div className="relative w-full h-40 bg-slate-900/10 rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center group">
              {currentSrc ? (
                <img
                  src={currentSrc}
                  alt={formValues.alt || 'Preview'}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center p-4 text-slate-400">
                  <ImageIcon className="h-8 w-8 mx-auto mb-1 opacity-50" />
                  <span className="text-xs">No image URL specified</span>
                </div>
              )}
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3 py-1.5 bg-white text-slate-800 text-xs font-bold rounded-lg shadow-md hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer"
                >
                  <Upload className="h-3.5 w-3.5 text-indigo-600" />
                  <span>Upload Local</span>
                </button>
              </div>
            </div>
          </div>

          {/* Image Source & File Upload */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <div>
              <label className="block text-xs font-extrabold text-slate-800 mb-1">Image URL</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={currentSrc}
                  onChange={(e) => handleChange('src', e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono text-slate-800"
                />
                {currentSrc && (
                  <button
                    type="button"
                    onClick={() => handleChange('src', '')}
                    className="p-2 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition cursor-pointer"
                    title="Clear Image"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold text-slate-800 mb-1">Image Alt Text (SEO)</label>
              <input
                type="text"
                value={formValues.alt || ''}
                onChange={(e) => handleChange('alt', e.target.value)}
                placeholder="Deskripsi gambar untuk SEO..."
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800"
              />
            </div>

            <div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*"
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-2.5 px-3 bg-white hover:bg-indigo-50 border-2 border-dashed border-indigo-200 hover:border-indigo-400 rounded-xl text-xs font-bold text-indigo-700 flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <Upload className="h-4 w-4 text-indigo-600" />
                <span>Upload Image dari Komputer / HP</span>
              </button>
            </div>
          </div>

          {/* Curated Presets Library */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-extrabold text-slate-800">Pilih Preset Gambar Siap Pakai</label>
            </div>

            <div className="flex gap-1 overflow-x-auto pb-1 ds-scrollbar-thin">
              {PRESET_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedPresetCategory(cat.id)}
                  className={`px-2 py-1 text-[10px] font-bold rounded-lg whitespace-nowrap transition cursor-pointer ${
                    selectedPresetCategory === cat.id
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1 ds-scrollbar-thin">
              {filteredPresets.map((preset, pIdx) => (
                <button
                  key={pIdx}
                  type="button"
                  onClick={() => {
                    handleChange('src', preset.url);
                    handleChange('alt', preset.title);
                    toast.success(`Gambar "${preset.title}" diterapkan!`, 'Preset Dipilih');
                  }}
                  className={`group relative rounded-xl overflow-hidden border text-left transition cursor-pointer ${
                    currentSrc === preset.url
                      ? 'ring-2 ring-indigo-600 border-indigo-600'
                      : 'border-slate-200 hover:border-indigo-300'
                  }`}
                >
                  <img
                    src={preset.url}
                    alt={preset.title}
                    className="w-full h-20 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="p-1.5 bg-white/95 backdrop-blur-xs">
                    <span className="block text-[10px] font-bold text-slate-800 truncate">{preset.title}</span>
                  </div>
                  {currentSrc === preset.url && (
                    <div className="absolute top-1 right-1 bg-indigo-600 text-white p-0.5 rounded-full shadow-xs">
                      <Check className="h-3 w-3" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. SPACING & DIMENSIONS TAB */}
      {activeTab === 'spacing' && (
        <div className="space-y-4">
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800">Dimensions (Width & Height)</h4>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Width</label>
                <input
                  type="text"
                  value={formValues.width || '100%'}
                  onChange={(e) => handleChange('width', e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono"
                  placeholder="100% or 400px"
                />
                <div className="flex gap-1 mt-1">
                  {['100%', '300px', '450px', 'auto'].map(w => (
                    <button
                      key={w}
                      type="button"
                      onClick={() => handleChange('width', w)}
                      className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[9px] font-bold text-slate-600 hover:bg-slate-100"
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Height</label>
                <input
                  type="text"
                  value={formValues.height || 'auto'}
                  onChange={(e) => handleChange('height', e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono"
                  placeholder="auto or 300px"
                />
                <div className="flex gap-1 mt-1">
                  {['auto', '240px', '320px', '400px'].map(h => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => handleChange('height', h)}
                      className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[9px] font-bold text-slate-600 hover:bg-slate-100"
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800">Object Fit (Scaling Behavior)</h4>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { id: 'cover', label: 'Cover (Fill & Crop)' },
                { id: 'contain', label: 'Contain (Fit Whole)' },
                { id: 'fill', label: 'Fill (Stretch)' },
                { id: 'none', label: 'Original Size' },
              ].map(f => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => handleChange('objectFit', f.id)}
                  className={`py-2 px-2 text-xs font-bold rounded-xl border transition ${
                    (formValues.objectFit || 'cover') === f.id
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800">Outer Margin</h4>
            <input
              type="text"
              value={formValues.margin || '0px'}
              onChange={(e) => handleChange('margin', e.target.value)}
              className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-mono"
              placeholder="0px or 16px auto"
            />
          </div>
        </div>
      )}

      {/* 3. BORDER & CORNERS TAB */}
      {activeTab === 'border' && (
        <div className="space-y-4">
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-xs font-extrabold text-slate-800">Corner Radius</label>
              <span className="text-xs font-mono font-bold text-indigo-600">{formValues.borderRadius || '12px'}</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { label: 'Square (0px)', val: '0px' },
                { label: 'Small (8px)', val: '8px' },
                { label: 'Medium (12px)', val: '12px' },
                { label: 'Large (16px)', val: '16px' },
                { label: 'Extra (24px)', val: '24px' },
                { label: 'Full / Circle', val: '9999px' },
              ].map(r => (
                <button
                  key={r.val}
                  type="button"
                  onClick={() => handleChange('borderRadius', r.val)}
                  className={`py-1.5 px-1 text-[10px] font-bold rounded-lg border transition truncate ${
                    (formValues.borderRadius || '12px') === r.val
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800">Border Outline</h4>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Border Width</label>
                <select
                  value={formValues.borderWidth || '0px'}
                  onChange={(e) => handleChange('borderWidth', e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold"
                >
                  <option value="0px">None (0px)</option>
                  <option value="1px">1px</option>
                  <option value="2px">2px</option>
                  <option value="4px">4px</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Border Style</label>
                <select
                  value={formValues.borderStyle || 'solid'}
                  onChange={(e) => handleChange('borderStyle', e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold"
                >
                  <option value="solid">Solid</option>
                  <option value="dashed">Dashed</option>
                  <option value="dotted">Dotted</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-600 mb-1">Border Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={formValues.borderColor || '#e2e8f0'}
                  onChange={(e) => handleChange('borderColor', e.target.value)}
                  className="w-10 h-8 rounded-lg border border-slate-200 cursor-pointer p-0.5 bg-white"
                />
                <input
                  type="text"
                  value={formValues.borderColor || '#e2e8f0'}
                  onChange={(e) => handleChange('borderColor', e.target.value)}
                  className="flex-1 px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. SHADOW TAB */}
      {activeTab === 'shadow' && (
        <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
          <label className="block text-xs font-extrabold text-slate-800">Shadow Effects</label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'none', label: 'None' },
              { id: 'sm', label: 'Small Shadow' },
              { id: 'md', label: 'Medium Shadow' },
              { id: 'lg', label: 'Large Shadow' },
              { id: 'xl', label: 'Extra Large' },
              { id: '2xl', label: '2XL Shadow' },
            ].map(s => (
              <button
                key={s.id}
                type="button"
                onClick={() => handleChange('shadow', s.id)}
                className={`py-2 px-2 text-xs font-bold rounded-xl border transition ${
                  (formValues.shadow || 'none') === s.id
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 5. COLOR & FILTERS TAB */}
      {(activeTab === 'color' || activeTab === 'animation') && (
        <div className="space-y-4">
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800">Opacity & Image Transparency</h4>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[10px] font-bold text-slate-600">Opacity</label>
                <span className="text-[10px] font-mono font-bold text-indigo-600">{formValues.opacity ?? 100}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={formValues.opacity ?? 100}
                onChange={(e) => handleChange('opacity', parseInt(e.target.value))}
                className="w-full accent-indigo-600"
              />
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800">Hover Animation Effect</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'none', label: 'Static (None)' },
                { id: 'scale', label: 'Zoom In (Scale)' },
                { id: 'lift', label: 'Lift Up (Elevate)' },
                { id: 'glow', label: 'Glow Ring' },
              ].map(h => (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => handleChange('hoverEffect', h.id)}
                  className={`py-2 px-2 text-xs font-bold rounded-xl border transition ${
                    (formValues.hoverEffect || 'none') === h.id
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {h.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 6. POSITION TAB */}
      {activeTab === 'position' && (
        <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
          <h4 className="text-xs font-extrabold text-slate-800">Position & Transform Offset</h4>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[10px] font-bold text-slate-600 mb-1">X Offset (px)</label>
              <input
                type="number"
                value={formValues.x || 0}
                onChange={(e) => handleChange('x', parseInt(e.target.value) || 0)}
                className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-600 mb-1">Y Offset (px)</label>
              <input
                type="number"
                value={formValues.y || 0}
                onChange={(e) => handleChange('y', parseInt(e.target.value) || 0)}
                className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
