const { request, response } = require("express")
const express = require("express") //declaration
const app = express() //instatiation

app.use(express.json())

//Makes everything in the public folder visible to others joining the webpage, like frontpage.css or .js
app.use(express.static("public"))

//endpoint (url), callback function (lambda)
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage.html")
})

const PORT = 5000
app.listen(process.env.PORT || "5000", (error) => {
    console.log("Successfully connected to port", PORT)
})

