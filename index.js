let characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
    "X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
    "u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
    "$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let lenghtPassword = 15
let passwordOneEl = document.getElementById("password-one")
let passwordTwoEl = document.getElementById("password-two")
let generateButton = document.getElementById("generate-password")
let generatedPasswordOne = []
let generatedPasswordTwo = []
let passwordOne
let passwordTwo
let simplifyPassword 

generateButton.addEventListener("click", function() {
    for ( i = 0; i < lenghtPassword; i++ ) {
        passwordOne = Math.floor(Math.random() * characters.length)
        generatedPasswordOne.push(characters[passwordOne])       
    }

    for ( i = 0; i < lenghtPassword; i++ ) {
        passwordTwo = Math.floor(Math.random() * characters.length)
        generatedPasswordTwo.push(characters[passwordTwo])       
    }

    for ( i = 0; i < generatedPasswordOne.length; i++ ){
        simplifyPassword = generatedPasswordOne[i]
        console.log(simplifyPassword)
        passwordOneEl.textContent += simplifyPassword
    }

    for ( i = 0; i < generatedPasswordTwo.length; i++ ){
        simplifyPassword = generatedPasswordTwo[i]
        console.log(simplifyPassword)
        passwordTwoEl.textContent += simplifyPassword
    }

})