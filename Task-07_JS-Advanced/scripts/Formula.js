function pageBinom(){
    let input = document.getElementById("binom_input").value;
    document.getElementById("binom_output").value = 'Output: ' + binom(BigInt(input));
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

console.log('Task 3 - Binomial theorem');
console.log(binom(0n));
console.log(binom(1n));
console.log(binom(2n));
console.log(binom(-2n));
console.log(binom(3n));
console.log(binom(5n));
console.log(binom(201n));
console.log(binom(3.14));


