
function morseCode(){
    var userInput = document.getElementsByName('userInput').value;

    userInput = userInput.split(' ');

    var newMessage =[];

    for(var i = 0;i < userInput.length;i++){
        if (userInput[i] == '.-') {
            newMessage.push('A');
        } else if (userInput[i] == '-...') {
            newMessage.push('B');
        } else if (userInput[i] == '-.-.') {
            newMessage.push('C');
        } else if (userInput[i] == '-..') {
            newMessage.push('D');
        } else if (userInput[i] == '.') {
            newMessage.push('E');
        } else if (userInput[i] == '..-.') {
            newMessage.push('F');
        } else if (userInput[i] == '--.') {
            newMessage.push('G');
        } else if (userInput[i] == '....') {
            newMessage.push('H');
        } else if (userInput[i] == '..') {
            newMessage.push('I');
        } else if (userInput[i] == '.---') {
            newMessage.push('J');
        } else if (userInput[i] == '-.-') {
            newMessage.push('K');
        } else if (userInput[i] == '.-..') {
            newMessage.push('L');
        } else if (userInput[i] == '--') {
            newMessage.push('M');
        } else if (userInput[i] == '-.') {
            newMessage.push('N');
        } else if (userInput[i] == '---') {
            newMessage.push('O');
        } else if (userInput[i] == '.--.') {
            newMessage.push('P');
        } else if (userInput[i] == '--.-') {
            newMessage.push('Q');
        } else if (userInput[i] == '.-.') {
            newMessage.push('R');
        } else if (userInput[i] == '...') {
            newMessage.push('S');
        } else if (userInput[i] == '-') {
            newMessage.push('T');
        } else if (userInput[i] == '..-') {
            newMessage.push('U');
        } else if (userInput[i] == '...-') {
            newMessage.push('V');
        } else if (userInput[i] == '.--') {
            newMessage.push('W');
        } else if (userInput[i] == '-..-') {
            newMessage.push('X');
        } else if (userInput[i] == '-.--') {
            newMessage.push('Y');
        } else if (userInput[i] == '--..') {
            newMessage.push('Z');
        } else (userInput[i] == ' ') {
            newMessage.push(' ');
        }
        newMessage += newMessage;

    }

    document.getElementById("output").innerHTML = newMessage;

}
