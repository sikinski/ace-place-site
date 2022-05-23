// {
//   "env": {
//     // где будет исполняться наш код
//     "browser": true,
//     "es2021": true
//   },
//   /* Пресет с настройками. prettier должен быть последним.
//   Он удаляет некоторые правила eslint из-за которых могут возникать конфликты. */
//   "extends": ["plugin:vue/vue3-recommended", "prettier"],
//   //   "parser": "babel-eslint", // Парсер для обработки jsx кода
//   //   "parserOptions": {
//   //     "ecmaFeatures": {
//   //       "jsx": true
//   //     },
//   //     "ecmaVersion": 11, // версия стандарта JavaScript. Последний 12 (2021).
//   //     "sourceType": "module" // Позволяет использовать import/export
//   //   },
//   // Здесь мы подключаем используемые плагины.
//   //   "plugins": ["prettier"],
//   "rules": {
//     // "prettier/prettier": "error", // Обязательно!! Подсвечивает ошибки из Prettier.
//     "eol-last": ["error", "always"]
//   }
// }
module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'eol-last': ['error', 'always'],
  },
};
