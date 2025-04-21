let text = document.getElementById('text');
let out = document.getElementById('out');
let info = document.getElementById('info');
const natoAlphabet = {
    a: "Alpha",
    b: "Bravo",
    c: "Charlie",
    d: "Delta",
    e: "Echo",
    f: "Foxtrot",
    g: "Golf",
    h: "Hotel",
    i: "India",
    j: "Juliett",
    k: "Kilo",
    l: "Lima",
    m: "Mike",
    n: "November",
    o: "Oscar",
    p: "Papa",
    q: "Quebec",
    r: "Romeo",
    s: "Sierra",
    t: "Tango",
    u: "Uniform",
    v: "Victor",
    w: "Whiskey",
    x: "X-ray",
    y: "Yankee",
    z: "Zulu",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    0: "Zero"
};

function replace() {
    let tmp = text.value.trim().toLowerCase().split('');
    let phonetic = '';
    tmp.forEach(letter => {
        if(natoAlphabet[letter]){
            phonetic += natoAlphabet[letter] + ' ';
        }else {
         phonetic += letter + ' ';   
        }
    });
    out.value = phonetic;
}

text.addEventListener('input', replace);
info.addEventListener('click', function() {
    Swal.fire({
        icon: "info",
        html: `
            <p>This small and simple open-source project is designed to assist new amateur radio operators in learning and using the phonetic alphabet. </p>
            <br>
            <p>The tool helps you quickly convert text to phonetic alphabet equivalents, so you don't have to think about the conversion while making contacts. </p>
            <br>
            <strong>Author:</strong> Anže Šinigoj (S56PAS)
            <br>
            <strong><a href="https://github.com/AnzeSinigoj/Phonetic-Alphabet-Helper" target="_blank">GitHub link</a></strong>
        `,
        background: "#1D1E22", 
        color: "#eee",   
        confirmButtonColor: "#3fc3ee",
        confirmButtonText: "Ok",
      });
});