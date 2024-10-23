const { getAge } = require("../plugins/get-age.plugin");
const { getUuidv4 } = require("../plugins/get-id.plugin");

const { http } = require("../plugins/http-client.plugin");

module.exports = {
  getAge,
  getUuidv4,
  http,
};
