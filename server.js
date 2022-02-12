const express = require("express")
const app = express()
const path = require("path")
const ejs = require("ejs")
const {PORT} = require("./config")
const router = require('./controllers')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
app.use(express.json())
app.use('/assets', express.static(path.resolve(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use(cookieParser())

app.use(router)


app.listen(4444,console.log( `http://localhost:4444`))