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
            '@pages': path.resolve(__dirname, 'resources/js/pages'),
            '@components': path.resolve(__dirname, 'resources/js/components'),
            '@layouts': path.resolve(__dirname, 'resources/js/layouts'),
            '@hooks': path.resolve(__dirname, 'resources/js/hooks'),
            '@router': path.resolve(__dirname, 'resources/js/router'),
            '@services': path.resolve(__dirname, 'resources/js/services'),
            '@store': path.resolve(__dirname, 'resources/js/store'),
            '@api': path.resolve(__dirname, 'resources/js/api'),
            '@utils': path.resolve(__dirname, 'resources/js/utils'),
            '@constants': path.resolve(__dirname, 'resources/js/constants'),
            '@assets': path.resolve(__dirname, 'resources/js/assets'),
        },
    },
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});
