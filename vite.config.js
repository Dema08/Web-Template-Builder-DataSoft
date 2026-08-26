import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '@features': path.resolve(__dirname, 'resources/js/features'),
            '@shared': path.resolve(__dirname, 'resources/js/shared'),
            '@layouts': path.resolve(__dirname, 'resources/js/layouts'),
            '@router': path.resolve(__dirname, 'resources/js/router'),
            '@builder': path.resolve(__dirname, 'resources/js/features/builder'),
            '@pages': path.resolve(__dirname, 'resources/js/router'),
            '@hooks': path.resolve(__dirname, 'resources/js/shared/hooks'),
            '@store': path.resolve(__dirname, 'resources/js/shared/stores'),
            '@api': path.resolve(__dirname, 'resources/js/shared/api'),
            '@utils': path.resolve(__dirname, 'resources/js/shared/utils'),
            '@constants': path.resolve(__dirname, 'resources/js/shared/constants'),
        },
    },
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
        // Proxy API requests to the Laravel backend during local development.
        // Run `php artisan serve` on port 8000 (or update the target below).
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
