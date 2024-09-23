const {getAge} = require('../plugins/get-age.plugin.js');
const { getUuidv4 } = require('../plugins/get-id.plugin.js');
const { http } = require('../plugins/http-client.plugin.js')
//const { getResp } = require('../plugins/http-client.plugin.js');

module.exports = {
    getAge,
    getUuidv4,
    //getResp
    http
}