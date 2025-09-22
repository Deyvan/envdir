const fs = require("fs")

exports.parse = (path = "./env") => {
    const dir = fs.readdirSync(path, {
        recursive: false,
        encoding: "utf-8"
    })

    for(const file of dir){

        if(/[a-z]/.test(file)){
            throw Error(`env filename "${file}" must be uppercase`)
        }

        if(/^[0-9]/.test(file)){
            throw Error(`env filename "${file}" cant begin with numbers`)
        }

        if(!(/^[A-Z_][A-Z0-9_]*$/.test(file))){
            throw Error(`env filename "${file}" contains illegal characters`)
        }

        process.env[file] = fs.readFileSync(`${path}/${file}`)
    }
}