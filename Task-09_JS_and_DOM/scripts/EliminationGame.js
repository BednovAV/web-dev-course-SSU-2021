let playersInput = document.getElementById("players_input");
let stepInput = document.getElementById("step_input");
let gameWinner = document.getElementById("game_winner");
let gameOutput = document.getElementById("game_output");

document.getElementById("play_game").addEventListener("click", pageStartGame);
document.getElementById("reset_game").addEventListener("click", resetGame);

function pageStartGame(){
    let playersCount = playersInput.value;
    let step = stepInput.value;

    let gameResult = startGame(parseInt(playersCount), parseInt(step));

    gameWinner.value = `Winner: ${gameResult.win}`;
    gameOutput.innerHTML = getHtmlFromGameResult(gameResult);
}

function resetGame(){
    playersInput.value = '';
    stepInput.value = '';
    gameWinner.value = '';
    gameOutput.innerHTML = '';
}

function getHtmlFromGameResult(gameResult){
    let table = '<table>';

    gameResult.logs.forEach(element => {
        table+= '<tr>';

        table+= '<td>';
        table+= element.alive;
        table+= '</td>';

        table+= '<td>';
        table+= '<font color="red">';

        table+= element.delete;

        table+='</font>';
        table+= '</td>';

        table+= '</tr>';
    });


    table+= '</table>'

    return table;
}

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

console.log(startGame(7, 3));
