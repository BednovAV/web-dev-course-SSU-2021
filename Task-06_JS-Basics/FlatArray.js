function Flat(array){
    let res = [];
    for (let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            for(let j = 0; j < array[i].length; j++){
                res.push(array[i][j]);
            }
        }
        else{
            res.push(array[i]);
        }
    }

    res.sort((a, b) => a - b);

    return res;
}

console.log("Task 1 - Flat array");
console.log(Flat([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
console.log(Flat([]));
console.log(Flat([[], []]));
console.log(Flat([[], [1]]));
console.log(Flat([[1, 3, 5], [-100], [2, 4, 6]]));

