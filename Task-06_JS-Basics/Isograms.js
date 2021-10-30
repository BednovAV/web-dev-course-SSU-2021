function IsIsogram(text){
    let charsSet = new Set(text.toLowerCase());
    return text.length == charsSet.size;
}

console.log('Task 5 - Isograms');
console.log(IsIsogram('Dermatoglyphics'));
console.log(IsIsogram('aba'));
console.log(IsIsogram('moOse'));
console.log(IsIsogram(''));