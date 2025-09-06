
function appendNumber (num){
    const display = document.getElementById('display');
    display.value +=num;
}
function clearDisplay(){
    document.getElementById('display').value='';
}
function deleteLast() {
    const display = document.getElementById('display');
    display.value =display.value.slice(0, -1);
}
function appendToDisplay(value){
    document.getElementById('display').value+=value;
}
function calculate(){
    try{const display = document.getElementById('display');
        display.value = eval(display.value);
       }catch(error){
        alert("invalid expression");
       }
}