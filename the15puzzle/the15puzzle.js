const isStart = confirm('Wanna begin new game?');


if (isStart === true) {
    // console.log('Welcome to the game :)');

    const box = document.createElement('div');
    box.classList.add("playField");
    document.body.appendChild(box);
    emptyCell = document.createElement('div');
    emptyCell.classList.add('emptyCell');
    // emptyCell.style.order = 16;
    box.appendChild(emptyCell);

    let createCell = () => {
        cellBox = document.querySelector('.playField');

        for ( i = 0; i < 15; i++ ) {
            cell = document.createElement('div');
            cell.classList.add('cell');
            cell.innerHTML = i + 1;
            cell.id = cell.innerHTML;
            cell.style.order = cell.id;
            cellBox.appendChild(cell);
        }

        const newOrder = Array.prototype.slice.call(box.getElementsByTagName('div'));
        newOrder.sort(()=>Math.random() - 0.5); 
        // console.log(newOrder);
        
    }

    createCell();

} else {
    console.log('You refused :(');

    const message = document.createElement('h1');
    message.classList.add("refused");
    message.innerHTML = "You refused :(";
    document.body.appendChild(message);
}