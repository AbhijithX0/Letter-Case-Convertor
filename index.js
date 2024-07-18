const upperCase = document.getElementById("name-upper");
const lowerCase = document.getElementById("name-lower");


let upperVal;
let lowerVal;
function toUpper(){

    upperVal = upperCase.value
    upperVal = upperVal.toUpperCase();
   upperCase.value = upperVal;
    


}

function toLower(){

    lowerVal = lowerCase.value
    lowerVal = lowerVal.toLowerCase();
   lowerCase.value= lowerVal;

}