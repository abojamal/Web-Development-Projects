// Select color input
const chosenColor = document.querySelector('#colorPicker');
chosenColor.addEventListener('change', function (event) {
  chosenColor.style.color = event.target.value;
});

//form submit event runs makeGrid listener fuction
const form = document.querySelector('#sizePicker');
form.addEventListener('submit', makeGrid);

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  const pixel = document.querySelector('#pixelCanvas');
  const width = document.querySelector('#inputWidth').value;
  const height = document.querySelector('#inputHeight').value;

  let tableData = '';
  for (let i = 0; i < height; i++) {
    tableData += '<tr>';
    for (let x = 0; x < width; x++) {
      tableData += '<td></td>';
    }
    tableData += '</tr>';
  }
  pixel.innerHTML = tableData;
  event.preventDefault();

  // color the cell when clicking
  colorOnClick();
  function colorOnClick() {
    const cell = document.querySelectorAll('td');
    for (let c = 0; c < cell.length; c++) {
      cell[c].addEventListener('click', function (event) {
        event.target.style.backgroundColor = chosenColor.value;
      });
    }
  }
}
