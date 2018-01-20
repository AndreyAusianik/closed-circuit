module.exports = function isCircuitClosed(matrix) {
  matrix = matrix.map(line => line.slice());

  const paint = (matrix, i, j, color) => {
    if(i < 0 || i >= matrix.length || 
      j < 0 || j >= matrix[0].length || 
      matrix[i][j]) return;
    matrix[i][j] = color;
    paint(matrix, i - 1, j, color);
    paint(matrix, i + 1, j, color);
    paint(matrix, i, j - 1, color);
    paint(matrix, i, j + 1, color);
  }

  let zone = 1;
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(!matrix[i][j]) {
        paint(matrix, i, j, ++zone);
      }
    }
  }
  return zone > 2;
}
