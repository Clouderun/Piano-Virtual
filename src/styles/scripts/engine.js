const pianoKeys = document.querySelectorAll('.piano-keys .key');

const volumeSlider = document.querySelector('.volume-slider input')

const keysCheck = document.querySelector('.keys-check input')

let mapedKeys = [];

let audio = new Audio('/src/styles/tunes/a.wav');

// add as teclas com seu proprio som dinamicamente
const playTune = (key) => {
    audio.src = `src/styles/tunes/${key}.wav`
    audio.play();

    // pega dinamicamente o data-key equivalente da letra selecionado e add o sombreamento ao apertar no teclado
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    //cria uma classe
    clickedKey.classList.add('active')
    // e acada 150ms remove ela
    setTimeout(() => {
        clickedKey.classList.remove('active')
    }, 150)
};

//conecta as keys com o data definido no html
// tambem verifica se a tecla apertada seja uma permitida(que esta na tela), armazenando no vetor mapedKeys
pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener('click', () => playTune(key.dataset.key))
    mapedKeys.push(key.dataset.key)
});

// para apertar a tecla do teclado e realiza um evento e captura inf das teclas
// e então ao apertar elas toca o som de cada uma
document.addEventListener('keydown', (e)=> {
    if(mapedKeys.includes(e.key)) {
        playTune(e.key)
    }
    playTune(e.key);
});

// para o volume
const handleVolume = (e) =>{
    audio.volume = e.target.value;
}

//add evento quando mexerem no input
volumeSlider.addEventListener('input', handleVolume)

// esconder as letras. toggle e um efeito de liga e desliga de classe, se n tem a classe ele add, se tiver remove.
const showHideKeys = () => {
    pianoKeys.forEach((key => key.classList.toggle('hide')))
}

keysCheck.addEventListener('click', showHideKeys)

//const changeColor = () => {
//}
//keysCheck.addEventListener('click', changeColor)