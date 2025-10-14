// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  // Integrate Prettier and adjust indentation/quotes to match .editorconfig/.prettierrc
  rules: {
    // Prettier formatting is handled separately; remove plugin rule if plugin isn't installed
    // If any rule enforces spaces for indentation, turn it off so tabs are allowed
    'indent': 'off',
    // Quotes handled by Prettier config (we use double quotes in .prettierrc), so disable eslint quote rule
    'quotes': 'off',
  // Disable conflicting stylistic rules coming from Nuxt's generated config so Prettier/editorconfig can control indentation
  '@stylistic/no-tabs': 'off',
  '@stylistic/indent': 'off',
  '@stylistic/jsx-indent': 'off',
  '@stylistic/jsx-indent-props': 'off',
  // Allow tabs at the eslint core level and use Vue-specific rules that accept 'tab'
  'no-tabs': 'off',
  'vue/html-indent': ['error', 'tab', { attribute: 1, baseIndent: 1 }],
  'vue/script-indent': ['error', 'tab', { baseIndent: 1, switchCase: 1 }],
    // Let Prettier handle extra semicolons
    'no-extra-semi': 'off',
    // Turn off comma-dangle rule (Prettier enforces trailing commas)
    'comma-dangle': 'off'
  }
})
