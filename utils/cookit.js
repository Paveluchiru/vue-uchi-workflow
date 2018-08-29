const config = require("../helpers/script.json");
const card = require("../helpers/card.json");
const num = card.chunks[0].script;
const fs = require("fs");
const { join } = require("path");
const root = join(__dirname, "..");
const dest = "result";

fs.mkdirSync(join(root, dest));

const jsFiles = fs
  .readdirSync(join(root, "dist/js"))
  .filter(p => !p.includes(".js.map"));
const cssFiles = fs.readdirSync(join(root, "dist/css"));

const files = [...jsFiles, ...cssFiles].map(p => "dist/" + p);

fs.mkdirSync(join(root, dest, "dist"));
jsFiles.forEach(p => {
  fs.copyFileSync(join(root, "dist/js", p), join(root, dest, "dist", p));
});
cssFiles.forEach(p => {
  fs.copyFileSync(join(root, "dist/css", p), join(root, dest, "dist", p));
});

config.require.push(...files);

fs.writeFileSync(join(root, dest, num + "_card.json"), JSON.stringify(card));
fs.writeFileSync(join(root, dest, num + ".json"), JSON.stringify(config));
