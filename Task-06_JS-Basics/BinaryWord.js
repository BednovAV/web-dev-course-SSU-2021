function ToBinary(text){
    let res = [];
    text.split('').forEach(ch =>{
        let bin = ch.charCodeAt(0).toString(2);
        res.push('0'.repeat(8 - bin.length) + bin);
    })

    return res;
}

console.log('Task 2 - Binary word');
console.log(ToBinary('man'));
console.log(ToBinary('AB'));
console.log(ToBinary('wecking'));
console.log(ToBinary('Ruby'));
console.log(ToBinary('Yosemite'));
