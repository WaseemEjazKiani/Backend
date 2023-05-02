const connectDatabase = require("./Config/conn");
const app = require("./app")


connectDatabase()
app.listen(5000, ()=>{
    console.log("I am running on port 5000");
})