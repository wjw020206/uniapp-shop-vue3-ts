import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import { globalIgnores } from 'eslint/config'
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,ts}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        // 配置 uni-app 全局变量
        uni: false,
        wx: false,
        WechatMiniprogram: false,
        getCurrentPages: false,
        UniApp: false,
        UniHelper: false,
        Page: false,
        AnyObject: false,
      },
    },
  },
  globalIgnores(['dist/', 'uni_modules/']),
  ...pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  skipFormatting,
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'vue/block-lang': 'off',
    },
  },
)
