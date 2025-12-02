const {Schema, model, mongoose} = require("mongoose");

const HoldingSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    qty: {type: Number, 
        required: true},
    avg: {type: Number, 
        required: true},
    price: {type: Number, 
        required: true},
    net: {type: String, 
        required: true},
    day: {type: String, 
        required: true},
});

const holding = mongoose.model("holding", HoldingSchema);

module.exports = holding;