const frame = document.getElementById('frame'); //get the frame
const grid = document.getElementsByTagName('div'); //get all the cells with div tag
const button = document.getElementById('reset'); // get a reset ID button
var cellLength;

button.addEventListener('click', () => {clearGrid(), requestSize(), makeGrid(cellLength);}); //listen for the button, clear the grid, build a new grid

frame.addEventListener('mouseover', event => { // listen on the frame for any hover
    let target = event.target; //find the target of the hover
    draw(target); // call the draw function on that element
});


function requestSize(){
    var entry = prompt('Enter a whole number greater than 1 and less than 101.')
    if (entry > 1 && entry <= 100 && entry % 1 ==0) {
        console.log('you did it!');
        cellLength = entry;

    } else {
        alert ('Invalid Entry. Try again.');
        requestSize();
    }
}


function draw(input){
    input.classList.add("lit");
}

function clearGrid(){ // new function to remove all div items
    
    while (frame.firstChild){ // found a better way to loop through the children here from the parents while you have a first child
        frame.removeChild(frame.firstChild);//delete the first child
    }
    
    //Had a hard time clearing the grid at first with below code
    //var gridArray = Array.from(grid); // make an array called gridArray from the grid nodelist.
    //gridArray.length = "0";
    //console.log(gridArray);
    //console.log('cleared!'); // once you're done tell me
};

function makeGrid(cellLength){ //let's make a grid
    

    for(var y=0; y<cellLength; y++){ // Loop this many row containers

        var row = document.createElement('div');
        frame.appendChild(row).className = "row"; // append it to our frame

        for(var x=0; x<cellLength ; x++){ // now loop through all the column cells called cell
            
            var cell = document.createElement('div'); // similar as above
            row.appendChild(cell).className = "cell";
        };
    };
};

makeGrid(16);