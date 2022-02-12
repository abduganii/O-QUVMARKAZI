const Fs = require("../lib/fsDeal")
const teacherFs = new Fs("../model/teacher.json")

module.exports = (req, res) => {
    try {
        const {phonenumber,username,birthday,erkakAyol,telegram,cursname} = req.body
        const allteacher = JSON.parse(teacherFs.read())
        
        allteacher.push({
            id: allteacher.length + 1,
            username: username,
            phonenumber: phonenumber,
            birthday: birthday,
            erkakAyol: erkakAyol,
            telegram: telegram,
            cursname:cursname,
            cotegoriId: 2,
            password:`${phonenumber[6]}${telegram[3]}${allteacher.length + 1}${Math.floor(Math.random()*10000)}`
        })
        teacherFs.write(allteacher)

        res.redirect("/teachers")

        res.status(200).send({
            stutus:200,
            message: "ok"  
        })
    } catch (error) {
        res.status(400).send({
            status: 400,
            error: error.message
        })
    }
}
