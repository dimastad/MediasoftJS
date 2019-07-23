const isStart = confirm('Wanna begin new game?');
// const body = document.getElementsByTagName('body');


if (isStart === true) {
    console.log('Welcome to the game :)');

    const box = document.createElement('div');
    box.classList.add("playField");
    document.body.appendChild(box);

} else {
    console.log('You refused :(');

    const message = document.createElement('h1');
    message.classList.add("refused");
    message.innerHTML = "You refused :(";
    document.body.appendChild(message);
}