import { Globe } from 'lucide-react';
import { APP_NAME } from '@constants';

/**
 * Brand logo for the guest layout.
 */
export default function Logo({ className = '' }) {
    return (
        <div className={`flex items-center justify-center gap-3 ${className}`}>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
                <Globe className="h-6 w-6" />
            </span>
            <span className="text-left">
                <span className="block text-lg font-bold text-gray-900 leading-tight">
                    {APP_NAME}
                </span>
                <span className="block text-xs text-gray-500 leading-tight">
                    Build your company website
                </span>
            </span>
        </div>
    );
}
