const fs = require("fs")

// fs.writeFileSync("user.txt","Sun rises in east")

const data = fs.readFileSync("user.txt","utf-8")
console.log(data);
console.log("print somthing after data");

fs.readFile("user.txt","utf8",(err,data)=>{
    console.log(data);
    
})
console.log("print somthing after data");
