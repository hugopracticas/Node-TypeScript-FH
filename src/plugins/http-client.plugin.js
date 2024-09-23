const axios = require('axios');
/*const httpClientPlugin = {
    get: async(url) => {
        const resp = await fetch(url);
        return await resp.json()
    },

    post: async(url, body) => {},
    put: async(url, body) => {},
    delete: async(url, body) => {},
};*/

const httpClientPlugin = {
    
    get: async(url) => {
        const {data} = await axios.get(url);
        //console.log('DATAA:', data)
        return data.name
    },

    post: async(url, body) => {},
    put: async(url, body) => {},
    delete: async(url, body) => {},
}


module.exports = {
    http: httpClientPlugin
    //getResp
}