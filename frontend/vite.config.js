/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {port :5173},
  define : {'process.env': process.env, },
});

