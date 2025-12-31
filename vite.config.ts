import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remoteFileProtocol,
} from '@remix-run/dev';
import {defineConfig} from 'vite';
import {getLoadContext} from './server';
import {hydrogen, hydrogenVite} from '@shopify/hydrogen/vite';
import {oxygen} from '@shopify/remix-oxygen';

export default defineConfig({
  plugins: [
    remoteFileProtocol(),
    remix({
      appDirectory: 'app',
      ssr: true,
      presets: [hydrogen.preset(), oxygen.preset()],
    }),
    hydrogenVite(),
  ],
  build: {
    target: 'ES2022',
  },
});
