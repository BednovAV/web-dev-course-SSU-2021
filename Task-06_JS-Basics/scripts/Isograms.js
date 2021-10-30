function PageIsogram(){
    let input = document.getElementById("isogram_input").value;
    document.getElementById("isogram_output").value = 'Output: ' + JSON.stringify(IsIsogram(input));
}

function IsIsogram(text){
    let charsSet = new Set(text.toLowerCase());
    return text.length == charsSet.size;
}

console.log('Task 5 - Isograms');
console.log(IsIsogram('Dermatoglyphics'));
console.log(IsIsogram('aba'));
console.log(IsIsogram('moOse'));
console.log(IsIsogram(''));