const { createFilter } = require('rollup-pluginutils');

module.exports = function removeUnnecessaryModuleExports(options = {}) {
  const filter = createFilter(options.include, options.exclude);

  return {
    transform (code, id) {
      if (!filter(id)) { return; }

      let generatedCode = code;

      const index = code.indexOf('export default src;');
      if (index !== -1) {
        const start = code.slice(0, index);
        const end = code.slice(index + 'export default src;'.length);

        generatedCode = start + end;
      }

      return {
        code: generatedCode,
        map: `{"version":3,"file":"${id}","sources":[],"sourcesContent":[],"names":[],"mappings":""}`
      };
    }
  };
};
