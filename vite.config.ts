import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    workbox: { globPatterns: ['**/*.{js,css,html,svg,woff2,json,mp3}'] },
    manifest: { name: 'Précieux', short_name: 'Précieux', lang: 'fr',
      theme_color: '#282B4A', background_color: '#EEEBDA', display: 'standalone',
      icons: [{ src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }] }
  })],
  test: { environment: 'node' }
});
