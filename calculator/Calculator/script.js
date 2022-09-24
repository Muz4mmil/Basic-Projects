function backspace(){
    var str = document.calc.txt.value;
    str = str.substr(0, str.length-1);
    document.calc.txt.value = str;
}

function dark(){
    document.body.classList.toggle("darkmode");
}
