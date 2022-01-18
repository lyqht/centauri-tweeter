module.exports = {
    root: true,
    extends: "@react-native-community",
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    rules: {
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        quotes: ["error", "double"],
        "@typescript-eslint/indent": ["error", 4],
        "prettier/prettier": 0,
        "react-hooks/exhaustive-deps": "warn",
    },
};
