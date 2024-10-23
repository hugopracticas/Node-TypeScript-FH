const { default: axios } = require("axios");

const httpClientPlugin = {
  get: async (url) => {
    // const resp = await fetch(url);
    // const data = await resp.json();
    // return data;
    const { data } = await axios.get(url);
    return data;
  },
};

module.exports = {
  http: httpClientPlugin,
};
