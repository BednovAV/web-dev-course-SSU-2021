function PageFormat(){
    let input = document.getElementById("format_input").value;
    document.getElementById("format_output").value = 'Output: ' + JSON.stringify(Format(input));
}

function Format(text) {
    return text.split("")
               .map((ch, i) => ch.toUpperCase() + ch.repeat(i))
               .join("-");
}

console.log('Task 4 - String formatting');
console.log(Format('abcd'));
console.log(Format('RqaEzty'));
console.log(Format('cwAt'));