"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = exports.buildLogger = exports.getUuidv4 = exports.getAge = void 0;
var get_age_plugin_1 = require("./get-age.plugin");
Object.defineProperty(exports, "getAge", { enumerable: true, get: function () { return get_age_plugin_1.getAge; } });
var get_id_plugin_1 = require("./get-id.plugin");
Object.defineProperty(exports, "getUuidv4", { enumerable: true, get: function () { return get_id_plugin_1.getUuidv4; } });
var logger_plugin_1 = require("./logger.plugin");
Object.defineProperty(exports, "buildLogger", { enumerable: true, get: function () { return logger_plugin_1.buildLogger; } });
var http_client_plugin_1 = require("./http-client.plugin");
Object.defineProperty(exports, "http", { enumerable: true, get: function () { return http_client_plugin_1.httpClientPlugin; } });
// import { getAge } from "./get-age.plugin";
// import { getUuidv4 } from "./get-id.plugin";
// import { buildLogger } from "./logger.plugin";
// import { httpClientPlugin as http } from "./http-client.plugin";
//const { getAge } = require("../plugins/get-age.plugin");
//const { getUuidv4 } = require("../plugins/get-id.plugin");
//const { http } = require("../plugins/http-client.plugin");
//const buildLogger = require("../plugins/logger.plugin");
// module.exports = {
//   getAge,
//   getUuidv4,
//   http,
//   buildLogger,
// };
//# sourceMappingURL=index.js.map