import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), eslint()],
    resolve: {
        alias: [
            {
                find: '@components',
                replacement: path.resolve(__dirname, 'src/components'),
            },
            {
                find: '@constants',
                replacement: path.resolve(__dirname, 'src/constants'),
            },
            {
                find: '@routes',
                replacement: path.resolve(__dirname, 'src/routes'),
            },
            {
                find: '@layouts',
                replacement: path.resolve(__dirname, 'src/layouts'),
            },
            { find: '@page', replacement: path.resolve(__dirname, 'src/page') },
            {
                find: '@utils',
                replacement: path.resolve(__dirname, 'src/utils'),
            },
            {
                find: '@types',
                replacement: path.resolve(__dirname, 'src/types'),
            },
            {
                find: '@assets',
                replacement: path.resolve(__dirname, 'src/assets'),
            },
            {
                find: '@hooks',
                replacement: path.resolve(__dirname, 'src/hooks'),
            },
            {
                find: '@config',
                replacement: path.resolve(__dirname, 'src/config'),
            },
            {
                find: '@shared',
                replacement: path.resolve(__dirname, 'src/shared'),
            },
            {
                find: '@data',
                replacement: path.resolve(__dirname, 'src/data'),
            },
            {
                find: '@lib',
                replacement: path.resolve(__dirname, 'src/lib'),
            },
        ],
    },
});
