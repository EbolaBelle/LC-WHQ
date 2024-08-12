const container = document.querySelector('.container');

const SIZE = 960;

createGrid(100);

const etchNodeList = document.querySelectorAll('.gridbox');

etchNodeList.forEach(element => {
    element.addEventListener('mouseover', handleMouseOver);
})

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let boxSize = (SIZE / gridSize);
        const row = document.createElement('div');
        //row.classList.add("row");
        row.style.cssText = `display: flex; height: ${boxSize + 'px'}; flex-direction: row;;`        
        container.appendChild(row);
        for (let j = 0; j < gridSize; j++) {
            const gridBox = document.createElement('div');            
            gridBox.style.cssText = `flex: 0 0 ${boxSize + 'px'}; height: auto;`;
            gridBox.classList.add("gridbox");
            row.appendChild(gridBox);       
        }        
    }
}

function handleMouseOver(event) {
    event.target.classList.toggle('gridbox');
    event.target.classList.toggle('etch');
}