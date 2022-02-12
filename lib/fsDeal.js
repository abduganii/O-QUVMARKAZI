const fs = require('fs')
const path = require("path")

class FS {
    constructor(dir) {
        this.dir = dir
    }
    read() {
        return fs.readFileSync(path.resolve(__dirname,this.dir), {encoding:"utf-8",flag:"r"})
    }
    write(data) {
        fs.writeFile(path.resolve(__dirname, this.dir), JSON.stringify(data),(error)=>{
            if(error) throw error
        })
    }
}

module.exports = FS