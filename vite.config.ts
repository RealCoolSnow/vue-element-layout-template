/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { join } from 'path';
import Vue from '@vitejs/plugin-vue';
import { UserConfig } from 'vite';
import ViteComponents from 'vite-plugin-components';
import { viteMockServe } from 'vite-plugin-mock';
import viteCompression from 'vite-plugin-compression';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

const resolve = (dir: string) => join(__dirname, dir);
// doc#https://vitejs.dev/config/#config-file
const config: UserConfig = {
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  build: {
    target: 'es2015',
    // terserOptions: {
    //   compress: {
    //     drop_console: true, // 所有console
    //     // pure_funcs: ['console.log'], // 单独指定
    //     drop_debugger: true,
    //   },
    // },
    /* 如需分包时开启 */
    /*
    rollupOptions: {
      output: {
        // 方式-1:所有依赖都分包
        // manualChunks(id) {
        //   if (id.includes('node_modules'))
        //     return id.toString().split('node_modules/')[1].split('/')[0].toString()
        // },
        // 方式-2:只对大的依赖分包
        manualChunks: {
          vant: ['vant'], // 要分包的依赖
        },
      },
    }, */
  },
  plugins: [
    Vue(),
    ViteComponents(),
    // gzip压缩 https://github.com/anncwb/vite-plugin-compression
    viteCompression(),
    viteMockServe({
      mockPath: 'src/mock',
      watchFiles: true,
      localEnabled: process.env.NODE_ENV === 'development',
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    /** 本地请求转发 */
    proxy: {
      '/api/': {
        target: 'https://url.devserver/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
};

export default config;
