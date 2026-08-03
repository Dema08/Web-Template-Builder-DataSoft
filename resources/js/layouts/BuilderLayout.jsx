import { Outlet } from 'react-router-dom';

/**
 * Fullscreen layout for the GrapesJS builder canvas.
 * No sidebar chrome — the builder owns the entire viewport.
 */
export default function BuilderLayout() {
    return (
        <div className="h-screen w-screen overflow-hidden bg-white">
            <Outlet />
        </div>
    );
}
