import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
})

module.exports = {
  theme: {
    extend: {
      colors: {
        brandBlue: '#065c77',
      },
    },
  },
};
