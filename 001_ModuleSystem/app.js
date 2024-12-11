const os = require("os")

// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.machine())
// console.log(os.freemem()/1024/1024/1024);
// console.log(os.totalmem()/1024/1024/1024);

const path = require("path")
// console.log(__dirname);
// console.log(__filename);
// const filePath =  path.join(__dirname,"test.js")
// console.log(filePath);


const fs = require("fs")

// fs.writeFileSync("home.txt","This is my first node module practical")
// const data =  fs.readFileSync("home.txt","utf8")
// console.log(data);
// fs.appendFileSync("home.txt","Test")
// fs.unlinkSync("abc.txt")

// ************ OWN MODULES *****************
// const test =require("./test")
const {msg,add}=require("./test")

// test.msg()
// test.add(10,20)

// msg()
// add(20,20)


//**********third party module ********* */
const validator = require("validator")


const user = {
    name : "test",
    email:"test@gmail.com"
}

console.log(validator.isAlpha("abc"));
console.log(validator.isAlphanumeric("123AA"));
console.log(validator.isEmail("abc@gmail.com"));
console.log(validator.isJSON(JSON.stringify(user)));






