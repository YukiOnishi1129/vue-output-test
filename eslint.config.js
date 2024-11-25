import { defineConfig } from 'eslint-define-config'
import vueConfig from 'eslint-plugin-vue'
import prettierConfig from 'eslint-config-prettier'

export default defineConfig([
  {
    files: ['**/*.vue', '**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        browser: true,
        'vue/setup-compiler-macro': true
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    plugins: {
      vue: vueConfig
    },
    processor: vueConfig.processors['.vue'],
    rules: {
      ...vueConfig.configs['vue3-recommended'].rules,
      ...prettierConfig.rules
    }
  }
])
