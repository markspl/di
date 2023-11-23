import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteJest } from 'vite-jest';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), viteJest()],
});
