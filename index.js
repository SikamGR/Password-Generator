let characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
    "X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
    "u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
    "$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let lenghtPassword = 15
let passwordOneEl = document.getElementById("password-one")
let passwordTwoEl = document.getElementById("password-two")
let generateButton = document.getElementById("generate-password")
let passwordOne
let passwordTwo


generateButton.addEventListener("click", function() {
    let generatedPasswordOne = ""
    let generatedPasswordTwo = ""

    for ( i = 0; i < lenghtPassword; i++ ) {
        passwordOne = Math.floor(Math.random() * characters.length)
        generatedPasswordOne += characters[passwordOne]      
    }
    passwordOneEl.textContent = generatedPasswordOne

/* ----------------- Generates 2nd password ------------------------- */

    for ( i = 0; i < lenghtPassword; i++ ) {
        passwordTwo = Math.floor(Math.random() * characters.length)
        generatedPasswordTwo += characters[passwordTwo]      
    }
    passwordTwoEl.textContent = generatedPasswordTwo

})