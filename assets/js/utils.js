//2D array
function Create2DArray(rows) {
  var arr = [];
  for (var i = 0; i < rows; i++) {
    arr[i] = [];
  }
  return arr;
}

//get index of 2D array
function getIndexOfMine(arr, k) {
  for (var i = 0; i < arr.length; i++) {
    var index = arr[i].indexOf(k);
    if (index > -1) {
      return [i, index];
    }
  }
}

function toggleDisplay($itemToHide, $itemToShow) {
  $itemToHide.style.display = "none";
  $itemToShow.style.display = "block";
}
