const fs = require("fs")

module.exports = function(path = "./env", settings = {dontInjectEnv: false}){
    const dir = fs.readdirSync(path, {
        recursive: false,
        encoding: "utf-8"
    })

    const env = {}

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

        const val = fs.readFileSync(`${path}/${file}`, {encoding: "utf-8"})

        if(!settings.dontInjectEnv){
            process.env[file] = val
        }

        env[file] = val
    }

    return env
}