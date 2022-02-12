module.exports = (req, res) => {
    try {
        res.render("login")
    } catch (error) {
        res.json({
            status:500,
            message: error.message
         })
    }
}