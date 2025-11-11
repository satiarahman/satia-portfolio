import { defineConfig } from 'vitest/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = fileURLToPath(new URL('./', import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(rootDir, './')}/`,
    },
  },
  test: {
    environment: 'happy-dom',
    setupFiles: ['tests/setup.ts'],
    globals: true,
    include: ['**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules', '.next', 'dist', 'out'],
    css: false,
  },
});


