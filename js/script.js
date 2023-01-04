const choise =["sang","kaghaz","gheichi"];
const userChoise =prompt("rock or paper or scissor",);
if(userChoise){
                 console.log(`your choise is ${userChoise}`)
}else{
                 console.log("you don`t have choise")
}
const randomChoise =Math.floor(Math.random()*3);
const computeChoise=choise[randomChoise]
console.log(`computeChoise is ${computeChoise}`);
if(computeChoise ==userChoise){
                 console.log("شما مساوی شدید")
}else if(userChoise ==="paper" || computeChoise==="scissor"){
                 console.log("تو باختی")
}else if(userChoise ==="rock" || computeChoise==="scissor"){
                 console.log("تو بردی")
}else if(userChoise ==="scissor" || computeChoise==="scissor"){
                 console.log("شما مساوی شدید")
}else if(userChoise ==="scissor" || computeChoise==="paper"){
                 console.log("تو بردی")
}else if(userChoise ==="rock" || computeChoise==="paper"){
                 console.log("تو باختی")
}else if(userChoise ==="paper" || computeChoise==="paper"){
                 console.log("شما مساوی شدید")
}else if(userChoise ==="scissor" || computeChoise==="rock"){
                 console.log("تو باختی")
}else if(userChoise ==="paper" || computeChoise==="rock"){
                 console.log("تو باختی")
}else if(userChoise ==="rock" || computeChoise==="rock"){
                 console.log("شما مساوی شدید")
}