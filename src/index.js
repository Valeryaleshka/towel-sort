
// You should implement your task here.

module.exports = function towelSort (matrix) {

    if (!matrix){return []}; 

    for(let i = 1; i < matrix.length+1; i++){
        if(i%2 === 0){
            matrix[i-1] = matrix[i-1].reverse();
        }
    }

    return matrix.flat();
}
