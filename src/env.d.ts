/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare interface Window {
  collectEvent: (name: string, params: Object) => void
}
declare interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
}
declare interface ImportMeta {
  readonly env: ImportMetaEnv
}
