const transpose = function(matrix) {

    // Calculate the width and height of the Array
    let width = matrix.length || 0;
    let height = matrix[0] instanceof Array ? matrix[0].length : 0;
  
    // In case it is a zero matrix, no transpose routine needed.
    if (height === 0 || width === 0) {
      return [];
    }
  
    let transpose = [];
  
    // Loop through every item in the outer array (height)
    for (let i = 0; i < height; i++) {
  
      // Insert a new row (array)
      transpose[i] = [];
  
      // Loop through every item per item in outer array (width)
      for (let j = 0; j < width; j++) {
        // Save transposed data.
        transpose[i][j] = matrix[j][i];
      }
    }
  
    return transpose;
  };

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const transposed = transpose(letters);
    const verticalJoin = transposed.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    return false;
}

module.exports = wordSearch