const yargs = require("yargs")
const file = require("./file")
yargs.command({
    command:"add",
    builder:{
        name:{
            type:String
        },
        email:{
            type :String
        },
    },
    handler:function(argv){
        
        const data = {
            name : argv.name,
            email:argv.email
        }
        file.createFile(data)
        
    }
})

yargs.command({
    command:"view",
    handler:function(argv)
    {
        file.viewData()
    }
})

yargs.parse()