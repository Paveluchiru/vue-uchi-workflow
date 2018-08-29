const initData = require("../helpers/script.json");

const isDev = process.env.NODE_ENV === "development";
export default function() {
  if (isDev) {
    const language = "ru";
    window.$$ = {
      tutor: {
        t: key => initData.const[key][language].text
      },
      Script() {},
      place: [document.querySelector(".wrapper")]
    };
    window.addEventListener("load", () => {
      window.$$.Script.prototype.init.bind(window.$$)(() => {
        // do smth on callback
      });
    });
  }
}
