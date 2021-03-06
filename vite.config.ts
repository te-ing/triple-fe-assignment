import { resolve } from 'path'

import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import react from '@vitejs/plugin-react'
import StylelintPlugin from 'vite-plugin-stylelint'

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  plugins: [react(), eslint(), StylelintPlugin()],
})
