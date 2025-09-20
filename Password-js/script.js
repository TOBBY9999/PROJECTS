passwordBox = document.getElementById("Password");
const myButton=document.getElementById("button")


const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*";

const allchars=uppercase+lowercase+symbol+number


function createPW(){ 
    let password=""
    password +=uppercase[Math.floor(Math.random()*uppercase.length)]
    password +=lowercase[Math.floor(Math.random()*lowercase.length)]
    password +=number[Math.floor(Math.random()*number.length)]
    password +=symbol[Math.floor(Math.random()*symbol.length)]


}

   while (length>password.length){
    password +=allchars[Math.floor(Math.random()*allchars.length)]


   }
   myButton.addEventListener("click",function(){
    
   })