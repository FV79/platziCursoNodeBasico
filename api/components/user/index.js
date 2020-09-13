// const store = require('../../../store/mysql');
//const store = require('../../../store/remote-mysql');
const ctrl = require("./controller");
const config = require("../../../config");
let store, cache;
if (config.remoteDB) {
  store = require("../../../store/remote-mysql");
  cache = require("../../../store/remote-cache");
} else {
  store = require("../../../store/mysql");
  cache = require("../../../store/redis");
}
module.exports = ctrl(store, cache);
