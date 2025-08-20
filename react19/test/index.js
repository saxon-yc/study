import { ESM_OBJECT } from "./esm_test.js";
// const cjstest = require("./cjs_test.cjs");
const inner_esm = ESM_OBJECT
inner_esm.value = "test";
console.log("used1", ESM_OBJECT, inner_esm, inner_esm === ESM_OBJECT);
// console.log("used2", cjstest);
// ESM_OBJECT.value = "test";
// console.log("used2", ESM_OBJECT);
