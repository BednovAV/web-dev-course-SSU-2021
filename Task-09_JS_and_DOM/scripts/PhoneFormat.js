let phoneInput = document.getElementById("phone_input");
let phoneOutput = document.getElementById("phone_output");

document.getElementById("format_phone").addEventListener("click", pageToPhoneFormat);
document.getElementById("reset_phone").addEventListener("click", resetPhone);

function pageToPhoneFormat(){
    let input = phoneInput.value;
    let array = input.split(' ').map(item => { return Number.parseInt(item); });
    phoneOutput.value = 'Output: ' + toPhoneFormat(array);
}

function resetPhone(){
    phoneInput.value = '';
    phoneOutput.value = '';
}

function toPhoneFormat(array){
    if(!Array.isArray(array)
        || array.length != 10 
        || !validateElementsForPhone(array)){
            return 'Invalid input';
    }

    return `+7 (${array[0]}${array[1]}${array[2]}) ${array[3]}${array[4]}${array[5]}-${array[6]}${array[7]}-${array[8]}${array[9]}`
}

function validateElementsForPhone(array) {
    let filteredArray = array.filter(el => {
        return !Number.isInteger(el) || el < 0 || el > 9
     })

     return filteredArray.length == 0;
}
