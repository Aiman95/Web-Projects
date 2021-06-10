const size = 16;

const container = document.querySelector('.container');
const changeButton = document.querySelector("button");
changeButton.addEventListener("click",changeSize);

function changeSize(){

    let newSize =  parseInt(prompt("Enter your new size. Must be <100"));
    while(newSize>100){
        newSize =  parseInt(prompt("Enter your new size. Must be <100"));
    }
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
    console.log(newSize)
    setGridSize(newSize);
    fillGrid(newSize);

}

function changeBackgroundColor(){
    this.style.cssText = "background-color: white"
    //console.log(this)
}


function setDefaultGrid(){
    setGridSize(size);
    fillGrid(size);

}

function setGridSize(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size){
    for(let i=1; i<=size*size; i++){
        const box = document.createElement("div");
        box.classList.add("content");
        //const hover = document.querySelector('.content')
        box.addEventListener("mouseenter",changeBackgroundColor)   

        container.appendChild(box);
    }
}

window.addEventListener('load', setDefaultGrid)
