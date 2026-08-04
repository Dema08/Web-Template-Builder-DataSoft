import { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import grapesjsPresetWebpage from 'grapesjs-preset-webpage';
import 'grapesjs/dist/css/grapes.min.css';
import { Save } from 'lucide-react';
import { useWebsite } from '@hooks';
import { useWebsiteStore } from '@store';
import { Spinner } from '@components/ui';

export default function Builder() {
    const editorRef = useRef(null);
    const { content, isContentLoading, saveContent, isSaving } = useWebsite();
    const { setEditor, markDirty } = useWebsiteStore();

    // Initialize GrapesJS once on mount.
    useEffect(() => {
        if (editorRef.current) return;

        const editor = grapesjs.init({
            container: '#gjs',
            height: '100%',
            width: 'auto',
            storageManager: false, // We persist via our own API
            fromElement: false,
            plugins: [grapesjsPresetWebpage],
            pluginsOpts: {
                [grapesjsPresetWebpage]: {
                    blocksBasicOpts: { flexGrid: true },
                },
            },
            canvas: {
                styles: [],
                scripts: [],
            },
        });

        editorRef.current = editor;
        setEditor(editor);
        markDirty();

        // Hook into the editor's "changed" event to track dirty state.
        editor.on('update', () => markDirty());

        return () => {
            editor.destroy();
            editorRef.current = null;
        };
    }, [setEditor, markDirty]);

    // Load saved content once it's available.
    useEffect(() => {
        if (!content || !editorRef.current) return;

        const editor = editorRef.current;
        if (content?.components) {
            editor.setComponents(content.components);
        }
        if (content?.styles) {
            editor.setStyle(content.styles);
        }
        if (content?.html) {
            editor.setComponents(content.html);
        }
    }, [content]);

    const handleSave = () => {
        const editor = editorRef.current;
        if (!editor) return;

        saveContent({
            html: editor.getHtml(),
            css: editor.getCss(),
            js: editor.getJs(),
            components: editor.getComponents(),
            styles: editor.getStyle(),
        });
    };

    return (
        <div className="h-full flex flex-col font-sans">
            {/* Builder toolbar */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-slate-200 bg-white shrink-0 shadow-xs">
                <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-xs">
                        DS
                    </div>
                    <h1 className="text-sm font-extrabold text-slate-900">DataSoft Visual Website Builder</h1>
                </div>

                <button
                    onClick={handleSave}
                    disabled={isSaving || isContentLoading}
                    className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md shadow-blue-600/20 transition disabled:opacity-50"
                >
                    {isSaving ? <Spinner size="sm" /> : <Save className="h-4 w-4" />}
                    <span>{isSaving ? 'Saving Website…' : 'Save Changes'}</span>
                </button>
            </div>

            {/* GrapesJS canvas */}
            {isContentLoading ? (
                <div className="flex-1 flex items-center justify-center bg-slate-50">
                    <Spinner size="lg" />
                </div>
            ) : (
                <div id="gjs" className="flex-1 overflow-hidden" />
            )}
        </div>
    );
}
