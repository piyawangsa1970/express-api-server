const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors)
app.use(express.json())

app.get("/", (req, res)=>{
  res.send("Express on vercel")
})

app.get("/json", (req, res)=>{
  res.json({"message":"Express on vercel"})
})

app.listen(5000,()=>{
  console.log("running on port 3000")
})

module.exports = app