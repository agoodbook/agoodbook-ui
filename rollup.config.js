import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import del from "rollup-plugin-delete";
import alias from "@rollup/plugin-alias";

export default {
  input: "components/index.tsx",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  plugins: [
    del({ targets: "dist/*" }),
    typescript(),
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    commonjs(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    postcss(),
    alias({
      entries: [
        { find: "@src", replacement: "./src" }, // Example alias for '@src'
        { find: "@components", replacement: "./components" }, // Another example
      ],
    }),
  ],
  external: ["react", "react-dom"],
};
