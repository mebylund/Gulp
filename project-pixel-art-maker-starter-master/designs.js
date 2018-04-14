// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
var table = $('sizePicker');
const height = parseInt(inputHeight.val());
  const width = parseInt(inputWidth.val());

  for(let row = 0; row < height; row++) {
  
    const tr = $('<tr></tr>').appendTo(table);
    
    for(let col = 0; col < width; col++) {
       tr.append(`<td>${row}${cell}</td>`);
    }
    
    table.append(tr);
  }

}
