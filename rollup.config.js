import { emptyDir } from "rollup-plugin-empty-dir";
import { chromeExtension, simpleReloader } from "rollup-plugin-chrome-extension";
import zip from "rollup-plugin-zip";

// We consider it's production if we're not watching
const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/manifest.json",
  output: {
    dir: production ? "dist/prod/build" : "dist/dev/build",
    format: "esm",
  },
  plugins: [
    emptyDir(),
    chromeExtension(),
    !production && simpleReloader(),
    zip({ file: `../${process.env.npm_package_name}.zip` }),
  ],
};
