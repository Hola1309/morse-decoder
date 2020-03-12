const table = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var morze = [];
    var a = '';
    var letr = '';
    var lettrs = [];
    var words = expr.split('*****');
    for (i=0; i<words.length; i++){
        for (j = 0; j < words[i].length; j+=2) {
            lettrs.push(words[i].slice(j, j + 2));
}
    }

    for (i=0; i<lettrs.length; i++){
        if (lettrs[i] == '00'){
            letr = letr;
        }
        if (lettrs[i] == '10'){
            letr = letr + '.';
        }
        if (lettrs[i] == '11'){
            letr = letr + '-';
        }
        if ((i+1) % 5 == 0) {
            morze.push(letr);
            letr = ''
        }
    }
    
    for (l=0; l<morze.length; l++) {
        letr = morze[l];
        a = a + table[letr];
        
    }
    return a;
}

module.exports = {
    decode
}