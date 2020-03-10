// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    // use your own url
    baseURL: " http://rferreira3.restful.training/api/blog",

    // use your own key
    params: {
        key: "67048e1a472eb55552727576cdbfe7b55a1ed4c0",
    },

    // make sure we get JSON back
    headers: {
        Accept: "application/json",
    },
});