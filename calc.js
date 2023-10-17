var number1 = ""
var number2 = ""

var isNumber1Ready = false


function formNumber(n){
    if(!isNumber1Ready){
        number1 += n
        document.getElementById("displayNum").textContent = number1
    }
}