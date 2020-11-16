module.exports = {
  root: true,
  env: {
	node: true,
	browser:true
  },
  parser:"vue-eslint-parser",
  extends: ["plugin:vue/vue3-recommended", "eslint:recommended", "prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  plugins:["prettier"],
  rules: {
    "no-console": "off",
  }
};
