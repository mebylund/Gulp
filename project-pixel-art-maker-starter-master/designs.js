// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
//const table = document.getElementById(
	const height = parseInt(inputHeight.val());
	const width = parseInt(inputWidth.val());
  
	const bton = document.querySelector('submit');
	document.addEventListener('click', function (event) {

		for(let row = 0; row < height; row++) {
  
			const tr = $('<tr></tr>').appendTo(table);
    
			for(let col = 0; col < width; col++) {
				tr.append(`<td>${row}${col}</td>`);
			}
    
			table.append(tr);
		}
	});
}
