const initData = require("../../helpers/script.json");

const toHtml = text => {
  /** @type {String} */
  const lined = text.split("[n]").join("<br/>");
  const boldParts = lined.split("[b]");

  return boldParts.reduce(function(result, part, i) {
    return result + (i % 2 === 0 ? part : `<b>${part}</b>`);
  }, "");
};
const component = ctx => ({
  /** all global text return into object with values */
  data: () => ({
    translations: Object.keys(initData.const).reduce((data, key) => {
      const result = ctx.tutor.t(key);
      return Object.assign(data, {
        [key]: { text: result, html: toHtml(result) }
      });
    }, {})
  })
});

export default {
  install: (vm, ctx) => vm.mixin(component(ctx))
};
