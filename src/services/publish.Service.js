const axios = require("axios");
const {CUSTOMER_EVENT} = require("../configs/server.config");

exports.publishCustomService = async(payload) => {

    const d = await axios.post(CUSTOMER_EVENT,{payload})
    // console.log(d.data.response);
    return d.data.response
    

}