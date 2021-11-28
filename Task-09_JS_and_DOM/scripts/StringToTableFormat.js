let rowsInput = document.getElementById("rows_input");
let columnsInput = document.getElementById("columns_input");
let textInput = document.getElementById("table_text_input");
let errorOutput = document.getElementById("table_error_output");
let tableOutput = document.getElementById("string-table_output");

document.getElementById("generate_table").addEventListener("click", generateTable);
document.getElementById("reset_table").addEventListener("click", resetTable);

function generateTable(){
    let rows = rowsInput.value;
    let columns = columnsInput.value;
    let text = textInput.value;

    if(rows == ''){
        errorOutput.value = 'Error! Enter rows count';
        return;
    }
    else if(columns == ''){
        errorOutput.value = 'Error! Enter columns count';
        return;
    }

    let array = getTableArray(rows, columns, text);
    tableOutput.innerHTML = getHTMLTable(array);
}

function resetTable(){
    rowsInput.value = '';
    columnsInput.value = '';
    textInput.value = '';
    tableOutput.innerHTML = '';
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