const { override, fixBabelImports, addLessLoader } = require("customize-cra");
const baseColor = "#c5cab6";
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    /** see document Customize Theme to change Theme */
    modifyVars: {
      "@text-color": baseColor,
      "@body-background": baseColor,
      "@font-size-base": "11.2px",
      "@border-radius-base": "2px",
      "@input-height-base": "18px",
      "@input-border-color": baseColor,
      "@input-bg": "#303030",
      "@input-padding-horizontal": "1px"
    }
  })
);
