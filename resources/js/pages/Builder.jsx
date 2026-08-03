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
        <div className="h-full flex flex-col">
            {/* Builder toolbar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white shrink-0">
                <h1 className="text-sm font-semibold text-gray-900">Website Builder</h1>
                <button
                    onClick={handleSave}
                    disabled={isSaving || isContentLoading}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-50"
                >
                    {isSaving ? <Spinner size="sm" /> : <Save className="h-4 w-4" />}
                    {isSaving ? 'Saving…' : 'Save'}
                </button>
            </div>

            {/* GrapesJS canvas */}
            {isContentLoading ? (
                <div className="flex-1 flex items-center justify-center">
                    <Spinner size="lg" />
                </div>
            ) : (
                <div id="gjs" className="flex-1 overflow-hidden" />
            )}
        </div>
    );
}
