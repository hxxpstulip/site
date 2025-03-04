// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
    server: {
      host: '0.0.0.0', // Make the server accessible on all network interfaces
      port: 3000,      // Set your desired port (default is 3000)
    }
  });