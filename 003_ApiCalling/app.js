const geocode = require("./geocode")
const weather = require("./weather")

const city = process.argv[2]

if(!city)
{
    console.log("city name required...");
    return
    
}

geocode.geocodedata(city,(data,err)=>{

    if(err){

        console.log("something went wrong...");
        return
    }

    weather.weatherdata(data.lat,data.lng,(result,err)=>{
        if(err){
            console.log("something went wrong");
            return
            
        }

        console.log(result);
        
    })


})