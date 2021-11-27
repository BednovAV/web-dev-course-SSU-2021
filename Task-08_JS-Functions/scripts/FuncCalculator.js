function zero(args) {
    return typeof args != "undefined" 
            ? calc(args[0], args[1], 0) 
            : 0;
}
function one(args) {
    return typeof args != "undefined" 
            ? calc(args[0], args[1], 1) 
            : 1;
}
function two(args) {
    return typeof args != "undefined" 
            ? calc(args[0], args[1], 2)
            : 2;
}
function three(args) {
    return typeof args != "undefined" 
            ? calc(args[0], args[1], 3) 
            : 3;
}
function four(args) {
    return typeof args != "undefined" 
            ? calc(args[0], args[1], 4) 
            : 4;
}
function five(args) {
    return typeof args != "undefined" 
            ? calc(args[0], args[1], 5) 
            : 5;
}
function six(args) {
    return typeof args != "undefined" 
            ? calc(args[0], args[1], 6) 
            : 6;
}
function seven(func) {
    return typeof func != "undefined" 
            ? calc(func[0], func[1], 7) 
            : 7;
}
function eight(args) {
    return typeof args != "undefined" 
            ? calc(args[0], args[1], 8) 
            : 8;
}
function nine(args) {
    return typeof args != "undefined" 
            ? calc(args[0], args[1], 9) 
            : 9;
}

function plus(arg) {
    return [arg, '+'];
}
function minus(arg) {
    return [arg, '-'];
}
function times(arg) {
    return [arg, '*'];
}
function dividedBy(arg) {
    return [arg, '/'];
}

function calc(b, operator, a) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return Math.floor(a / b);
    }
}





console.log("Task 3 - Calculator from functions: ")
console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
console.log(eight(dividedBy(three())));
console.log(three(times(three(times(three())))));
console.log(two(plus(two(times(two(minus(one())))))));
console.log(zero(plus(one(dividedBy(one())))));
console.log(one(dividedBy(zero())));
console.log(one());