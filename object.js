var n = require("readline-sync")

var person={name:"vyshnav",age:22,place:"kannur"}
var i=0

a=n.question("Enter the range")

for(i=0;i<a;i++){
    for(x in person){
        console.log(person[x])
    }
}