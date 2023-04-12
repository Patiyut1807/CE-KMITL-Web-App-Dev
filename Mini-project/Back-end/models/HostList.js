const mongoose = require('mongoose');
const HostListSchema = new mongoose.Schema({
    host_name:String,
    host_id:String,
    host_location:String,
    host_create_time:{type:Date, default:Date.now},
})
module.exports = mongoose.model("Host",HostListSchema)