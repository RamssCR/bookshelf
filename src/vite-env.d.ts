/// <reference types="vite/client" />

export type CustomEnvVariables = ImportMetaEnv & {
  readonly VITE_API_URL: string
}