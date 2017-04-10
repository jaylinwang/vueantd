module.exports = {
  extends: "airbnb",
  plugins: [
    "html"
  ],
  rules: {
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    "no-plusplus": ["error", {
      "allowForLoopAfterthoughts": true
    }],
    'func-names': ['error', 'never'],
    "arrow-body-style": ["error", "always"],
  },
};
