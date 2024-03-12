// alert('')
let allButtons = document.querySelectorAll('button[class*="drum"]')


let soundTracks = {
    'w': 'sounds/crash.mp3',
    'a': 'sounds/kick-bass.mp3',
    's': 'sounds/snare.mp3',
    'd': 'sounds/tom-1.mp3',
    'j': 'sounds/tom-2.mp3',
    'k': 'sounds/tom-3.mp3',
    'l': 'sounds/tom-4.mp3'
}
for (let i = 0; i < allButtons.length; i++) {
    let buttonInnerText = allButtons[i].innerText
    console.log(buttonInnerText)
    function a_addEventListener() {
        var audio = new Audio(soundTracks[buttonInnerText]);
        audio.play();
    }
    switch (buttonInnerText) {
        case 'w':
            allButtons[i].addEventListener('click', a_addEventListener)
            break;
        case 'a':
            allButtons[i].addEventListener('click', a_addEventListener)
            break
        case 's':
            allButtons[i].addEventListener('click', a_addEventListener)
        case 'd':
            allButtons[i].addEventListener('click', a_addEventListener)
        case 'j':
            allButtons[i].addEventListener('click', a_addEventListener)
        case 'k':
            allButtons[i].addEventListener('click', a_addEventListener)
        case 'l':
            allButtons[i].addEventListener('click', a_addEventListener)
        default:
            break;
    }
}


function b_addEventListener(arg) {
    var audio = new Audio(soundTracks[arg]);
    audio.play();
}

document.addEventListener('keydown', (e) => {
    console.log(e.key);
    switch (e.key) {
        case 'w':
            b_addEventListener('w');
            break;
        case 'a':
            b_addEventListener('a');
            break
        case 's':
            b_addEventListener('s');
        case 'd':
            b_addEventListener('d');
        case 'j':
            b_addEventListener('j');
        case 'k':
            b_addEventListener('k');
        case 'l':
            b_addEventListener('l');
        default:
            break;
    }
})


// for (let i = 0; i < allButtons.length; i++) {
//     let buttonInnerText = allButtons[i].innerText;

// }


// document.querySelector('[class="a drum"]').addEventListener('click', () => {
//     var audio = new Audio('sounds/kick-bass.mp3');
//     audio.play();
// })



// document.querySelector('[class="s drum"]').addEventListener('click', () => {
//     var audio = new Audio('sounds/snare.mp3');
//     audio.play();
// })


// document.querySelector('[class="d drum"]').addEventListener('click', () => {
//     var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
// })


// document.querySelector('[class="j drum"]').addEventListener('click', () => {
//     var audio = new Audio('sounds/tom-2.mp3');
//     audio.play();
// })

// document.querySelector('[class="k drum"]').addEventListener('click', () => {
//     var audio = new Audio('sounds/tom-3.mp3');
//     audio.play();
// })


// document.querySelector('[class="l drum"]').addEventListener('click', () => {
//     var audio = new Audio('sounds/tom-4.mp3');
//     audio.play();
// })
