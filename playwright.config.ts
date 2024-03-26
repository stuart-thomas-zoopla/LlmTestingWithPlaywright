import { defineConfig } from '@playwright/test';
export default defineConfig({
  use: {
  baseURL: 'http://localhost:11434',
    extraHTTPHeaders: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Connection': 'keep-alive'
    }
  }
});