function pageBinom(){
    let input = document.getElementById("binom_input").value;
    document.getElementById("binom_output").innerHTML = getHTMLFormula(BigInt(input));
}

function getHTMLFormula(n){

    let binomStr = binom(n);
    if(binomStr.includes('/')) return binomStr;// \_(0_0)_/

    let form = binomStr.split('+');

    let result = [];

    form.forEach(item => {
        let sub = '<msub>';

        for(let i = 0; i < item.length; i++){
            if(item[i] == '^') continue;
            if(item[i] == 'a' || item[i] == 'b') {
                sub+= `<mi>${item[i]}</mi>`;
                continue;
            }
            if(isDigit(item[i])){
                if(i != 0 && item[i - 1] == '^') {
                    sub+= `<sup>${item[i]}</sup>`;
                }
                else {
                    sub+= `<mi>${item[i]}</mi>`;
                }
            }
        }

        sub+= '</msub>';
        result.push(sub);
    });

    return '<section id="math">' + result.join('<mo>+</mo>') + '</section>';
}

function binom(n){
    if(typeof n != 'bigint'|| n > 200n || n < -200n) return 'Invalid input';
    if(n == 0n) return '1';

    let isPowNeg = n < 0n;
    if(isPowNeg){
        n*= -1n;
    }

    let binoms = [];
    for(let j = 0n; j < n + 1n; j++){
        binoms.push(`${C(n, j)}${getA(n - j)}${getB(j)}`);
    }

    let result = binoms.join('+');
    if(isPowNeg){
        result = `1/(${result})`;
    }

    return result;
}

function getA(n){
    return getPow('a', n);
}

function getB(n){
    return getPow('b', n);
}

function getPow(symb, n){
    if(n == 0n){
        return '';
    } 
    else if(n == 1n){
        return symb;
    }
    else{
        return symb + '^' + n;
    }
}

function C(n, j){
    let c = factorial(n)/(factorial(j)*factorial(n - j));
    return c == 1n ? '' : c;
}

function factorial(n) {
    return (n > 1n) ? n * factorial(n - 1n) : 1n;
}

function isDigit(c){
    return c >= '0' && c <= '9';
}

console.log('Task 3 - Binomial theorem');
console.log(binom(0n));
console.log(binom(1n));
console.log(binom(2n));
console.log(binom(-2n));
console.log(binom(3n));
console.log(binom(5n));
console.log(binom(201n));
console.log(binom(3.14));


