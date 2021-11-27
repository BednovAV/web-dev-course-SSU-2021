function generate(){
    const nums = "0123456789".repeat(3);
    const lowLetters = "abcdefghiklmnopqrstuvwxyz";
    const upLetters = lowLetters.toUpperCase();

    const length = randInt(6, 20);

    let pool = (nums + lowLetters + upLetters).split('');

    let result =[
        nums.charAt(randInt(0, nums.length - 1)),
        lowLetters.charAt(randInt(0, lowLetters.length - 1)),
        upLetters.charAt(randInt(0, upLetters.length - 1))
    ];

    while(result.length < length){
        result[result.length] = getRandomItem(pool)
    }

    shuffleArray(result);
    return result.join('');
}

function randInt(min, max){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function getRandomItem(array){
    return array[randInt(0, array.length - 1)];
}

console.log("Task 1 - Password generator:");
console.log(generate());
console.log(generate());
