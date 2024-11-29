const inputValue = document.querySelector('.input-sector');
function displayUserInput(input) {
    inputValue.value =inputValue.value + input;

}

function clearSreen(){
    inputValue.value = '';

}

function calculate(){
    try{
        inputValue.value = eval(inputValue.value)
    }
    catch(error){
        inputValue.value = "syntax Error"
    }
}