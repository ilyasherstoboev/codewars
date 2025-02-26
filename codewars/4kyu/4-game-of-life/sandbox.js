function prepareResolve(array) {
  removeEmptyRows(array);
  removeEmptyColumns(array);
}

function removeEmptyRows(array) {
  while (isEmptyRow(array[0])) {
    array.shift();
  }

  while (isEmptyRow(array[array.length - 1])) {
    array.pop();
  }
}

function removeEmptyColumns(array) {
  while (isEmptyColumn(array, 0)) {
    for (let i = 0; i < array.length; i++) {
      array[i].shift();
    }
  }

  while (isEmptyColumn(array, array[0].length - 1)) {
    for (let i = 0; i < array.length; i++) {
      array[i].pop();
    }
  }
}

function isEmptyColumn(array, direct = 0) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][direct] === 1) return false;
    if (i === array.length - 1 && array[i][direct] !== 1) {
      return true;
    }
  }
}

function isEmptyRow(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) return false;
    if (i === array.length - 1 && array[i] !== 1) {
      return true;
    }
  }
}

prepareResolve();
