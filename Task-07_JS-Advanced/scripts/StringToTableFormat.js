function pageFormatStringToTable(){
    let input = document.getElementById("string-table_input").value.split(' ');
    let errorOutput = document.getElementById("string-table_error_output");
    errorOutput.value = "";

    let parsedInput;
    try {
        parsedInput = parseInput(input);
    } catch (error) {
        errorOutput.value = "Invalid input";
        return;
    }

    if(!validateSizes(parsedInput[0], parsedInput[1])){
        errorOutput.value = "Invalid input";
    }

    let array = getTableArray(parsedInput[0], parsedInput[1], parsedInput[2]);
    document.getElementById("string-table_output").innerHTML = getHTMLTable(array);
}

function parseInput(input){  
    let result = [];
    result.push(Number.parseInt(input[0]));
    result.push(Number.parseInt(input[1]));
    let text = '';
    for(let i = 2; i < input.length; i++){
        text+= input[i] + ' ';
    }
    result.push(text);

    return result;
}

function formatStringToTable(rows, columns, text){
    if(!validateSizes(rows, columns)){
        return "Invalid input";
    }

    let array = getTableArray(rows, columns, text);
    return getConsoleTable(array);
}

function validateSizes(rows, columns){
    return Number.isInteger(rows) && rows > -1
        && Number.isInteger(columns) && columns > -1;
}

function getHTMLTable(array){
    let result = '<table>';
    if(array.length == 0 || array[0].length == 0){
        result += "</table>";
        return result;
    }
    array.forEach(row => {
        result+= '<tr>';
        row.forEach(column =>{
            result+= '<td>';
            result+= column;
            result+= '</td>';
        });
        result+= '</tr>';
    });
    result+= '</table>';

    return result
}

function getConsoleTable(array){
    let result = '';
    if(array.length == 0 || array[0].length == 0){
        return result;
    }
    
    let horLine = '+'.repeat(array[0].length + 1).split("").join("---") + '\n';
    let verLine = '|';

    result+= horLine;
    array.forEach(row =>{
        result+= verLine + ' ';
        result+= row.join(' ' + verLine + ' ');
        result+= ' ' + verLine + '\n';
        result+= horLine;
    });
    
    return result;
}

function getTableArray(rows, columns, text){
    let result = [];
    for (let i = 0; i < rows; i++){
        let row = text.substring(i * columns, (i + 1) * columns).split("");
        if(row.length < columns) {
            " ".repeat(columns - row.length)
               .split('')
               .forEach(item => { 
                   row.push(item); 
                });
        }

        result.push(row);
    }

    return result;
}

console.log('Task 2 - String to table formatting');
console.log(formatStringToTable(4, 4, 'Hello World!'));
console.log(formatStringToTable(4, 3, "Nice pattern"));
console.log(formatStringToTable(3, 4, "Nice pattern"));
console.log(formatStringToTable(2, 2, "Nice pattern"));
console.log(formatStringToTable(-1, 4, "Nice pattern"));
console.log(formatStringToTable(0, 4, "Nice pattern"));
console.log(formatStringToTable(4, 0, "Nice pattern"));