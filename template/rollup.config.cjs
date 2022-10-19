const { resolve } = require("path");
const cssnext = require("postcss-cssnext");
const template = require("rollup-plugin-generate-html-template");
const postcss = require("rollup-plugin-postcss");
const serve = require("rollup-plugin-serve");
const livereload = require("rollup-plugin-livereload");

module.exports = {
  input: "./src/index.js",
  output: {
    file: `./dist/index.js`,
    format: "esm",
  },
  watch: {
    include: "src/**/*",
  },
  plugins: [
    postcss({
      plugins: [cssnext],
      extract: resolve(__dirname, `./dist/index.css`), // 输出路径
    }),
    template({
      template: "src/index.html",
      target: "./dist/index.html",
      attrs: ["type='module'"],
      replaceVars: {
        __STYLE_URL__: `index.css`,
      },
    }),
    serve("dist"),
    livereload("dist"),
  ],
};
