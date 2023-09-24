//index.js
const express = require('express');
const app = express();
const port = 4000;
const mongoDB = require("./db");
var cors = require('cors')
const path = require('path');
const fs = require('fs');
app.use(cors())
mongoDB();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
app.post('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
console.log(__dirname)
app.use( "/Routes/uploads",express.static(path.join(__dirname, 'Routes','uploads')))
console.log(fs.existsSync(path.join(__dirname, 'Routes','uploads')))
console.log('Hello')
// app.use( express.static(path.join(__dirname, 'upload')))
app.use('/api', require("./Routes/CreatUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));
app.use('/api', require("./Routes/AddItem"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})