// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import pluginN from 'eslint-plugin-n' // 👈 importer plugin’et

export default withNuxt({
  plugins: {
    n: pluginN, // 👈 Flat Config kræver objekt med reference
  },
  rules: {
    'n/no-process-env': ['error'],

    'indent': 'off',
    'quotes': 'off',
    '@stylistic/no-tabs': 'off',
    '@stylistic/indent': 'off',
    '@stylistic/jsx-indent': 'off',
    '@stylistic/jsx-indent-props': 'off',
    'no-tabs': 'off',
    'vue/html-indent': ['error', 'tab', { attribute: 1, baseIndent: 1 }],
    'vue/script-indent': ['error', 'tab', { baseIndent: 1, switchCase: 1 }],
    'no-extra-semi': 'off',
    'comma-dangle': 'off'
  }
})
