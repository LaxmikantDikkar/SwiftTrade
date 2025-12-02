const {Schema, model, mongoose} = require("mongoose");

const WathchlistSchema = new Schema({
    name: String,
    price: mongoose.Schema.Types.Decimal128,
    percent: String,
    isDown: Boolean,
});

const Watchlist = mongoose.model("Watchlist", WathchlistSchema);

module.exports = Watchlist;