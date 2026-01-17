import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'


export default defineConfig({
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                src: 'src/images', // Path to the folder you want to include
                dest: 'src/',    // Destination folder in the output (dist)
                },
            ],
        }),
    ],
    base: '/TechNinja/',
})
