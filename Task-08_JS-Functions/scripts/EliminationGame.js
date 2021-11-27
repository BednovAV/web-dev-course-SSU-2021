function startGame(n, k){
    let players = getEnumerable(1, n);
    let logs = [ {alive: players.slice(), delete: ''} ];

    let cur = (k - 1) % players.length;
    while(players.length > 1){
        let deletedPlayer = players[cur];

        players.splice(cur, 1);

        logs.push({
            alive: players.slice(),
            delete: deletedPlayer
        });

        cur = (cur - 1 + k) % players.length;
    }

    return {
        players: getEnumerable(1, n),
        step: k,
        win: players[0],
        logs: logs
    };
}

function getEnumerable(start, end){
    let res = [];
    for(let i = start; i <= end; i++){
        res[res.length] = i;
    }

    return res;
}

console.log('Task 2 - Elimination Game:')
console.log(startGame(7, 3));
console.log(startGame(11, 19));
console.log(startGame(1, 300));
console.log(startGame(14, 2));
console.log(startGame(100, 1));

