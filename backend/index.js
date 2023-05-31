// index.js (Node.js backend)
const express = require('express');
const app = express();
const bodyParser =  require("body-parser")
const cors = require("cors")
const TestController = require("./controllers/test.controller");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());
app.use(cors({
    origin: "*"
  }))

app.post("/createUser", TestController.createUser)
app.post("/createWallet", TestController.createWallet)

app.get("/getUserInfo", TestController.getUserInfo)
app.get("/getWalletContents", TestController.getWalletContents)

require("./dbConnection")

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});