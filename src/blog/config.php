// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    // use your own url
    baseURL: " http://rossfirstlaravel.test/api/blog",

    // use your own key
    params: {
        key: "cc0e54caf3b51c2eaa005c3966398846eb7c7a1b",
    },

    // make sure we get JSON back
    headers: {
        Accept: "application/json",
    },
});