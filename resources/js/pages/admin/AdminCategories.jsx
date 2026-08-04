import { useState } from 'react';
import { Layers, Plus, Trash2, Edit2, Shield, Search, Save } from 'lucide-react';
import { Card } from '@components/ui';
import { toast } from '@store';

export default function AdminCategories() {
    const [categories, setCategories] = useState([
        { id: 1, name: 'Corporate & Profile', slug: 'corporate', count: 12, status: 'Active' },
        { id: 2, name: 'E-Commerce', slug: 'ecommerce', count: 8, status: 'Active' },
        { id: 3, name: 'Creative Portfolio', slug: 'portfolio', count: 15, status: 'Active' },
        { id: 4, name: 'SaaS & Technology', slug: 'saas', count: 9, status: 'Active' },
        { id: 5, name: 'Financial & Banking', slug: 'finance', count: 5, status: 'Active' },
        { id: 6, name: 'Healthcare & Medical', slug: 'healthcare', count: 4, status: 'Active' },
    ]);

    const [newCatName, setNewCatName] = useState('');
    const [isAddOpen, setIsAddOpen] = useState(false);

    const handleAdd = (e) => {
        e.preventDefault();
        if (!newCatName.trim()) return;

        const newCat = {
            id: Date.now(),
            name: newCatName,
            slug: newCatName.toLowerCase().replace(/\s+/g, '-'),
            count: 0,
            status: 'Active',
        };

        setCategories([...categories, newCat]);
        setNewCatName('');
        setIsAddOpen(false);
        toast.success(`Category "${newCat.name}" added!`, 'Category Created');
    };

    const handleDelete = (id, name) => {
        if (confirm(`Delete category "${name}"?`)) {
            setCategories(categories.filter((c) => c.id !== id));
            toast.info(`Category "${name}" removed.`, 'Category Deleted');
        }
    };

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-2">
                        <Shield className="h-3.5 w-3.5" />
                        <span>Category Taxonomy</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Industry Categories</h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Manage industry taxonomies and template categorization rules.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => setIsAddOpen(true)}
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm shadow-md transition-all"
                >
                    <Plus className="h-4 w-4 stroke-[3]" />
                    <span>Add Category</span>
                </button>
            </div>

            {/* List */}
            <Card className="overflow-hidden">
                <div className="p-5 border-b border-slate-100 font-extrabold text-slate-900 text-base">
                    Active Categories ({categories.length})
                </div>

                <div className="divide-y divide-slate-100">
                    {categories.map((cat) => (
                        <div key={cat.id} className="p-4 sm:px-6 flex items-center justify-between hover:bg-slate-50/80 transition">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                                    <Layers className="h-5 w-5 stroke-[2]" />
                                </div>
                                <div>
                                    <p className="font-extrabold text-slate-900 text-sm">{cat.name}</p>
                                    <p className="text-xs text-slate-400">
                                        Slug: <span className="font-mono text-slate-600">{cat.slug}</span> • {cat.count} Templates
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
                                    {cat.status}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => handleDelete(cat.id, cat.name)}
                                    className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Modal */}
            {isAddOpen && (
                <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-150">
                        <h3 className="text-base font-extrabold text-slate-900">Add New Category</h3>
                        <form onSubmit={handleAdd} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">Category Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Real Estate & Hospitality"
                                    value={newCatName}
                                    onChange={(e) => setNewCatName(e.target.value)}
                                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input"
                                />
                            </div>

                            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                                <button
                                    type="button"
                                    onClick={() => setIsAddOpen(false)}
                                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 text-xs font-bold bg-indigo-600 text-white rounded-xl shadow-md shadow-indigo-600/20 hover:bg-indigo-700 transition"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
