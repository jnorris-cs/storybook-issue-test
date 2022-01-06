import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: {
      origin: 'http://localhost:6005',
      credentials: true
    },
  }
  // plugins: [
  //   {
  //     name: "configure-response-headers",
  //     configureServer: (server) => {
  //       server.middlewares.use((_req, res, next) => {
  //         console.log('test')
  //         res.setHeader('Test-Header', 'A random value');
  //         res.setHeader("Access-Control-Allow-Origin", "http://localhost:6005/");
  //         next();
  //       });
  //     },
  //   },
  // ],
});