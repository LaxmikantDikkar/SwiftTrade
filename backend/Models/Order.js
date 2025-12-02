const {Schema, model, mongoose} = require("mongoose");

const OrderSchema = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : "User"
    },
    name: {
        type: String,
        required: true,
    },
    
    price: {type: Number, 
        required: true},
    qty: {type: Number, 
        required: true},
    Mode: {type: String, 
        required: true},
});

const order = mongoose.model("order", OrderSchema);

module.exports = order;