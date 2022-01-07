import { defineConfig } from "vite";

export default defineConfig({
  server: {
    cors: {
      origin: 'http://localhost:6003',
      credentials: true
    },
  }
});