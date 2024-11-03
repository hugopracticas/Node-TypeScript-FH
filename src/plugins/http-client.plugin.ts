import axios from "axios";

export const httpClientPlugin = {
  get: async (url: string) => {
    // const resp = await fetch(url);
    // const data = await resp.json();
    // return data;
    const { data } = await axios.get(url);
    return data;
  },
};
