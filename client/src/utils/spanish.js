import axios from "axios";

const URL = "https://www.dictionaryapi.com/api/v3/references/spanish/json/";
const key = "?key=6a1a1ddc-7b70-49d5-9647-9c445c5daf55";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  search: function (word) {
    return axios.get(URL + word + key);
  },
};
