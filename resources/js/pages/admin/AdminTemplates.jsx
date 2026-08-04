import { useState } from 'react';
import {
    Plus,
    Search,
    Edit2,
    Trash2,
    Star,
    Layers,
    Shield,
    Check,
    Upload,
} from 'lucide-react';
import { Card } from '@components/ui';
import { toast } from '@store';

export default function AdminTemplates() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newCategory, setNewCategory] = useState('corporate');
    const [newBadge, setNewBadge] = useState('Featured');

    const [templatesList, setTemplatesList] = useState([
        {
            id: 't-1',
            title: 'DataSoft Enterprise Suite',
            category: 'Corporate',
            badge: 'Popular',
            status: 'Active',
            rating: '4.9',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
        },
        {
            id: 't-2',
            title: 'Nexus Business Pro',
            category: 'Corporate',
            badge: 'Featured',
            status: 'Active',
            rating: '4.8',
            image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80',
        },
        {
            id: 't-3',
            title: 'EcoStore Commerce',
            category: 'E-Commerce',
            badge: 'New',
            status: 'Active',
            rating: '4.9',
            image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80',
        },
        {
            id: 't-4',
            title: 'Alpha SaaS Launchpad',
            category: 'SaaS & Tech',
            badge: 'Hot',
            status: 'Active',
            rating: '5.0',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
        },
    ]);

    const filteredTemplates = templatesList.filter(
        (t) =>
            t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            t.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAddTemplate = (e) => {
        e.preventDefault();
        if (!newTitle.trim()) return;

        const newTpl = {
            id: `t-${Date.now()}`,
            title: newTitle,
            category: newCategory.toUpperCase(),
            badge: newBadge,
            status: 'Active',
            rating: '5.0',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
        };

        setTemplatesList([newTpl, ...templatesList]);
        setIsAddModalOpen(false);
        setNewTitle('');
        toast.success(`Template "${newTpl.title}" added to system!`, 'Template Created');
    };

    const handleDeleteTemplate = (id, title) => {
        if (confirm(`ADMIN ACTION: Delete template "${title}"?`)) {
            setTemplatesList(templatesList.filter((t) => t.id !== id));
            toast.info(`Template "${title}" removed.`, 'Template Deleted');
        }
    };

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-2">
                        <Shield className="h-3.5 w-3.5" />
                        <span>Template Manager</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">System Templates</h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Create, upload, and update default corporate website templates for DataSoft users.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => setIsAddModalOpen(true)}
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm shadow-md shadow-indigo-600/20 transition-all"
                >
                    <Plus className="h-4 w-4 stroke-[3]" />
                    <span>Upload New Template</span>
                </button>
            </div>

            {/* Toolbar */}
            <Card className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-full sm:w-80">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search templates by title or category..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input"
                    />
                </div>

                <div className="text-xs font-bold text-slate-500">
                    Total Active Templates: <span className="text-slate-900 font-extrabold">{templatesList.length}</span>
                </div>
            </Card>

            {/* Template Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredTemplates.map((tpl) => (
                    <Card
                        key={tpl.id}
                        className="border border-slate-200/80 overflow-hidden flex flex-col justify-between group hover:shadow-md transition-all duration-200"
                    >
                        <div className="relative h-44 bg-slate-100 overflow-hidden border-b border-slate-100">
                            <img
                                src={tpl.image}
                                alt={tpl.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                            />
                            <div className="absolute top-3 left-3">
                                <span className="px-2.5 py-1 rounded-full bg-slate-900/80 text-white text-[10px] font-extrabold uppercase backdrop-blur-md">
                                    {tpl.badge}
                                </span>
                            </div>
                        </div>

                        <div className="p-4 space-y-3">
                            <div>
                                <h3 className="text-sm font-extrabold text-slate-900 truncate group-hover:text-indigo-600 transition">{tpl.title}</h3>
                                <p className="text-xs font-bold text-indigo-600 mt-0.5">{tpl.category}</p>
                            </div>

                            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                                <span className="text-[11px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                                    {tpl.status}
                                </span>

                                <div className="flex items-center gap-1">
                                    <button
                                        type="button"
                                        onClick={() => handleDeleteTemplate(tpl.id, tpl.title)}
                                        className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Add Template Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 space-y-5 animate-in fade-in zoom-in-95 duration-150">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                            <h3 className="text-base font-extrabold text-slate-900">Add New Template</h3>
                            <button
                                type="button"
                                onClick={() => setIsAddModalOpen(false)}
                                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition"
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={handleAddTemplate} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">Template Title</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. DataSoft Executive Corporate"
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">Category</label>
                                <select
                                    value={newCategory}
                                    onChange={(e) => setNewCategory(e.target.value)}
                                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input"
                                >
                                    <option value="corporate">Corporate</option>
                                    <option value="ecommerce">E-Commerce</option>
                                    <option value="saas">SaaS & Tech</option>
                                    <option value="portfolio">Portfolio</option>
                                </select>
                            </div>

                            <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                                <button
                                    type="button"
                                    onClick={() => setIsAddModalOpen(false)}
                                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md shadow-indigo-600/20 transition"
                                >
                                    Create Template
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
