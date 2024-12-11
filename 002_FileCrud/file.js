const fs = require("fs")


const createFile = (data) => {


    const allData = loaddata()

    allData.push(data)
    const jsondata = JSON.stringify(allData)
    fs.writeFile("user.json", jsondata, (err, data) => {
        console.log("File written...");

    })

}

const viewData = () => {
    const data = loaddata()
    console.log(data);

}

const loaddata = () => {

    try {
        const data = fs.readFileSync("user.json", "utf-8")
        return JSON.parse(data)
    } catch (error) {
        return [];
    }

}



module.exports = { createFile, viewData }