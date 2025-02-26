function getGeneration(cells, generations) {
  const result = [cells.map(row => [...row])];
  for (let i = 0; i < generations; i++) {
    result.push(content(result[result.length - 1]));
  }
  return prepareResolve(result[result.length - 1]);
}

function preparePayload(cells) {
  const newCells = cells.map(row => [0, ...row, 0]);
  const row = Array(newCells[0].length).fill(0);
  return [row, ...newCells, row];
}

function prepareResolve(array) {
  removeEmptyRows(array);
  removeEmptyColumns(array);
  return array;
}

function removeEmptyRows(array) {
  while (array.length > 0 && isEmptyRow(array[0])) array.shift();
  while (array.length > 0 && isEmptyRow(array[array.length - 1])) array.pop();
}

function removeEmptyColumns(array) {
  while (isEmptyColumn(array, 0)) array.forEach(row => row.shift());
  while (isEmptyColumn(array, array[0].length - 1)) array.forEach(row => row.pop());
}

function isEmptyColumn(array, colIndex) {
  return array.every(row => row[colIndex] === 0);
}

function isEmptyRow(row) {
  return row.every(cell => cell === 0);
}

function content(payload) {
  const cells = preparePayload(payload).map(row => [...row]);
  const newCells = Array.from({ length: cells.length }, () => []);

  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      let neighbours = getNeighboursCount(cells, i, j);
      newCells[i][j] = neighbours === 3 || (cells[i][j] === 1 && neighbours === 2) ? 1 : 0;
    }
  }
  return newCells;
}

function getNeighboursCount(cells, i, j) {
  return [
    cells[i - 1]?.[j - 1], 
    cells[i - 1]?.[j], 
    cells[i - 1]?.[j + 1],
    cells[i]?.[j - 1],
    cells[i]?.[j + 1],
    cells[i + 1]?.[j - 1], 
    cells[i + 1]?.[j], 
    cells[i + 1]?.[j + 1]
  ].filter(Boolean).length;
}
