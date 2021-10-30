function VowelsCount(text){
    let matches = text.match(/[aeiou]/gi) || [];
    return matches.length;
}

console.log('Task 3 - Counting vowels');
console.log(VowelsCount('abracadabra'));
console.log(VowelsCount('ABRACADABRA'));
console.log(VowelsCount('o a kak ushakov lil vo kashu kakao'));
console.log(VowelsCount('my pyx'));