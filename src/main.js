import Vue from "vue";
import App from "./components/App.vue";
import enviroment from "./enviroment";
import translations from "./mixins/translations";

enviroment();

Vue.config.productionTip = false;

const init = function init(wrapper) {
  const div = document.createElement("div");
  div.classList.add("app");
  wrapper.appendChild(div);

  Vue.use(translations, this);
  return new Vue({
    el: ".app",
    render: h => h(App)
  });
};

// eslint-disable-next-line
$$.Script.prototype.init = function(next) {
  init.bind(this)(this.place[0]);
  next();
};
