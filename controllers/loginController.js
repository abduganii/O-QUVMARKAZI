const Fs = require("../lib/fsDeal")
const adminFs = new Fs("../model/admin.json")
const studentFs = new Fs("../model/students.json")
const teacherFs = new Fs("../model/teacher.json")
const {signuser} =require("../lib/jwt")

module.exports = {
    Login: ((req, res) => {
        try {
            const { username, password } = req.body

            console.log(username, password)
            const allAdmin = JSON.parse(adminFs.read())
            const AllStudunts = JSON.parse(studentFs.read())
            const allteacher = JSON.parse(teacherFs.read())

            const fonduser = allAdmin.find(e => e.username == username && e.password == password) ||
                AllStudunts.find(e => e.username == username && e.password ==password) ||
                allteacher.find(e => e.username == username && e.password ==password)            
                
            if (!fonduser) {
                res.redirect("/login")
                return
            }
            const token = signuser({ cotegoriId: fonduser.cotegoriId, number: fonduser.phonenumber })
            res.cookie("token", token)
            if (fonduser.cotegoriId == 1) {
                res.redirect("/")
            } else if(fonduser.cotegoriId == 2){
                res.redirect("/teacherpage")
            } else if (fonduser.cotegoriId == 3) {
                res.redirect("/studentpage")
            } else {
                res.send("name or password is not true")
            }
            res.status(200).send({
                stutus:200,
                token:token
            })
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            })
        }
    })
}