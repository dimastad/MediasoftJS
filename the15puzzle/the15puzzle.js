const isStart = confirm('Wanna begin new game?');


if (isStart === true) {
    // console.log('Welcome to the game :)');

    const box = document.createElement('div');
    box.classList.add("playField");
    document.body.appendChild(box);
    emptyCell = document.createElement('div');
    emptyCell.classList.add('emptyCell');
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

        const newOrder = Array.from(box.getElementsByTagName('div'));
        newOrder.sort(()=>Math.random() - 0.5); 
        console.log(newOrder);
        
        cellBox.innerHTML = '';
        
        for (let i = 0; i < newOrder.length; i++) {
            let el = newOrder[i];
            el.style.order = i + 1;
            cellBox.appendChild(el);
        }
    }

    createCell();

    let newOrderValue = Number(window.getComputedStyle(emptyCell).order);
    let leftCellValue = Number(window.getComputedStyle(emptyCell.previousSibling).order);   
    let rightCellValue = Number(window.getComputedStyle(emptyCell.nextSibling).order);
    // let bottomCellValue = Number(window.getComputedStyle(emptyCell).order) + Number(4);
    // let topCellValue = Number(window.getComputedStyle(emptyCell).order) - Number(4);
    // console.log('topCellValue - ' + topCellValue);
    // console.log('leftCellValue - ' + leftCellValue);
    // console.log('rightCellValue - ' + rightCellValue);
    // console.log('bottomCellValue - ' + bottomCellValue);

    console.log('emptyCell - ' + newOrderValue);


    cell = document.querySelector('.cell');

    let currentCell = cell.addEventListener('click', e => {
        prevOrderVal = e.target.style.order;
        console.log(prevOrderVal);
        console.log(newOrderValue);
        emptyCell.style.order = prevOrderVal;
        cell.style.order = newOrderValue;
    });

    currentCell();

} else {
    console.log('You refused :(');

    const message = document.createElement('h1');
    message.classList.add("refused");
    message.innerHTML = "You refused :(";
    document.body.appendChild(message);
}