function pageToPhoneFormat(){
    let input = document.getElementById("phone_input").value;
    let array = input.split(' ').map(item => { return Number.parseInt(item); });
    document.getElementById("phone_output").value = 'Output: ' + toPhoneFormat(array);
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

console.log("Task 1 - Phone number formatting");
console.log(toPhoneFormat([9, 0, 0, 1, 1, 1, 2, 2, 3, 3]));
console.log(toPhoneFormat([9, 2, 7, 5, 5, 5, 6, 6, 9, 0]));
console.log(toPhoneFormat([1, 2, 3, 4, 5, 6, 7, 8, 9, -11] ));
console.log(toPhoneFormat([]));
console.log(toPhoneFormat(`aw93fha=`));
