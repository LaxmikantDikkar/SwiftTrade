require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();
const SignupRouter = require("./Routes/Signup");
const LoginRouter = require("./Routes/Login");
// const router = require("express").Router();
const Holding = require("./Models/Holding");
const Positions = require("./Models/Positions");
const AuthMiddleware = require("./Middleware/AuthMiddleware");
const Order = require("./Models/Order");
const cookieParser = require("cookie-parser");
const Watchlist = require("./Models/Watchlist");


const url = process.env.Mongo_url;
mongoose.connect(url);

app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: ['https://swifttrading.netlify.app/', 'https://swifttradingd.netlify.app/', 'https://swifttrade-wpeq.onrender.com'],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.json());

app.use("/signup", SignupRouter);
app.use("/login", LoginRouter);
app.use("/", AuthMiddleware);

app.get("/positions", AuthMiddleware, async(req, res)=>{
    
    const data = await Positions.find({});
    
    return res.json(data);
});
app.get("/holdings", async(req, res)=>{
    
    const data = await Holding.find({});
    console.log("I am backend");
    return res.json(data);
});

app.post("/newOrder", async(req, res)=>{
    
    const data = req.body;
    console.log(data.id);
    let newData = new Order({
        id: data.id,
        name: data.name,
        price: data.price,
        qty: data.qty,
        Mode: data.mode
    });
    newData.save();
    return res.send("data");
});

app.post("/orders", async(req, res)=>{
    const user = new mongoose.Types.ObjectId(req.body.user);

    const data = await Order.find({id: user});
    console.log(data);
    return res.json(data);
});

app.get("/watchlist", async(req, res)=>{
    const data = await Watchlist.find({});
    return res.json(data);
});

app.get("/newSellOrder/:uid", async(req, res)=>{
    
    const data = await Holding.find({name: req.params.uid});
   
    if(data && data[0].qty>=req.query.qty){
        let sellData = new Order({
            name: data[0].name,
            price: req.query.price,
            qty: req.query.qty,
            Mode: "Sell"
        });
        await sellData.save();
    }
    
    return res.json(data);
});

app.get("/newModifyOrder/:uid", async(req, res)=>{
    
    const data = await Order.findOne({name: req.params.uid});
    return res.json(data);
});

app.patch("/newModify/:uid", async(req, res)=>{
    console.log(req.body.qty);
    const data = await Order.findOneAndUpdate({name: req.params.uid}, {$set:{qty: req.body.qty, price: req.body.price}}, {new: true});
    
    return
});

app.delete("/orderDelete/:name", async(req, res)=>{
   await Order.findOneAndDelete({name: req.params.name}, {new: true});
    
});

app.get("/data", async(req, res)=>{
    await Order.deleteMany({});
    console.log("data deleted successfully");
    res.send("data deleted successfully");
});

app.listen(3000, ()=>{
    console.log("app started");
    
});
