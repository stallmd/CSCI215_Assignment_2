var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var morsecode =[
    '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
    '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
    '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
    '-.--', '--..'
];
var morseArray = new Array();
var length = abc.length;
for(var i = 0;i < length;i++){
    morseArray[morsecode[i]] = abc[i];
}