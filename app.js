const { request, response } = require("express")
const express = require("express") //declaration
const app = express() //instatiation

app.use(express.json())

//Makes everything in the public folder visible to others joining the webpage, like frontpage.css or .js
app.use(express.static("public"))

const fs = require("fs")


const nav = fs.readFileSync("./public/components/topbar.html").toString()
const frontPageBody = fs.readFileSync("./public/frontpage.html").toString()
const introPageBody = fs.readFileSync("./public/introduction.html").toString()
const firstServerPageBody = fs.readFileSync("./public/firstServer.html").toString()
const servingPageBody = fs.readFileSync("./public/servingHTML.html").toString()
const ssrPageBody = fs.readFileSync("./public/SSR.html").toString()
const expressPageBody = fs.readFileSync("./public/express.html").toString()


const frontpagePage = nav.replace("%%PLACEHOLDER_TITLE%%", "Coding practices") + frontPageBody
//frontpage

const intropageBody = nav.replace("%%PLACEHOLDER_TITLE%%", "Intro & datatypes") + introPageBody

const firstServerpageBody = nav.replace("%%PLACEHOLDER_TITLE%%", "First server") + firstServerPageBody

const servingpageBody = nav.replace("%%PLACEHOLDER_TITLE%%", "Serving HTML") + servingPageBody

const ssrpageBody = nav.replace("%%PLACEHOLDER_TITLE%%", "SSR") + ssrPageBody

const expresspageBody = nav.replace("%%PLACEHOLDER_TITLE%%", "Express") + expressPageBody

app.get("/", (req, res) => {
    res.send(frontpagePage)
})

app.get("/introduction", (req, res) => {
    res.send(intropageBody)
})

app.get("/firstServer", (req, res) => {
    res.send(firstServerpageBody)
})

app.get("/servingHTML", (req, res) => {
    res.send(servingpageBody)
})

app.get("/SSR", (req, res) => {
    res.send(ssrpageBody)
})

app.get("/express", (req, res) => {
    res.send(expresspageBody)
})

const PORT = 5000
app.listen(process.env.PORT || "5000", (error) => {
    console.log("Successfully connected to port", PORT)
})