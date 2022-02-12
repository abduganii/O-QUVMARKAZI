module.exports = (req, res) => {
    try {
            res.render("index")
        } catch (error) {
            res.status(400).send({
                status: 400,
                error:"Bad request"
            })
        }
    }
