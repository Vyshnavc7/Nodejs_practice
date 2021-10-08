var s=require("readline-sync")
var n=s.question("Enter the name")

try{
    if(n===0)
        throw "Not found"
}catch(err){
    console.log(err)
}finally{
    console.log("Thank you")
}

function err(){
    console.log("Name not correct")
}