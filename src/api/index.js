// export default api
const modulesFiles = require.context("./", true, /\.js$/);
const api = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  let moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  const patterm = /\//;
  if (patterm.test(moduleName)) {
    moduleName = moduleName.split("/")[1];
  }
  modules[moduleName] = value.default;
  return modules;
}, {});
export default api;
