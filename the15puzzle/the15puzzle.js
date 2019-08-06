const isStart = confirm('Wanna begin new game?');


if (isStart === true) {
    console.log('Welcome to the game :)');

    const box = document.createElement('div');
    box.classList.add("playField");
    document.body.appendChild(box);

    let createCell = () => {
        for ( i = 0; i < 15; i++ ) {
            cell = document.createElement('div');
            cell.classList.add('cell');
            cell.innerHTML = i + 1; 
            cellBox = document.querySelector('.playField');
            cellBox.appendChild(cell);
        }
    }

    createCell();

} else {
    console.log('You refused :(');

    const message = document.createElement('h1');
    message.classList.add("refused");
    message.innerHTML = "You refused :(";
    document.body.appendChild(message);
}