const express = require("express")
const router = express.Router()

const { Login } = require("./loginController.js")
const loginpage = require("./loginpage")
const Home = require("./homeController")
const studentController = require("./studentController")
const studentspage = require("./studentspage")
const teacherpage = require("./teacherpage")
const teacherController = require("./teacherController")
const gruxPage = require("./grux")
const gruxController = require("./gtuxController")
const curspage = require('./curspage')
const curscontroller = require('./curscontroller')
const pageforstudent = require("./pageforstudent")
const pageforteacher = require("./pageforteacher")
const auth = require("../meddlewares/auth")
const authTeacher = require("../meddlewares/authTeachers")
const authShtudent = require("../meddlewares/authShtudent")

router
    .get("/login",loginpage)
    .post("/login", Login)
    .get("/", auth, Home)
    .get("/students",auth, studentspage)
    .post("/students", auth, studentController)
    .get("/teachers", auth, teacherpage)
    .post('/teachers', auth, teacherController)
    .get("/grux",auth,gruxPage)
    .post('/grux', auth, gruxController)
    .get('/curs', auth, curspage)
    .post('/curs', auth, curscontroller)
    .get("/studentpage", authShtudent, pageforstudent)
    .get("/teacherpage",authTeacher,pageforteacher)

module.exports= router     