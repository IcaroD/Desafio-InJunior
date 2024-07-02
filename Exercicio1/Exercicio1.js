/* 
    No Console do Navegador
*/

function mult_matriz(mat1, mat2) {
    var mat = [[0, 0], [0, 0]]
    var num = 0
    for (var r = 0; r < 2; r++) {
        for (var i = 0; i < 2; i++) {
            num = 0
            for (var j = 0; j < 2; j++) {
                num += Number(mat1[r][j]) * Number(mat2[j][i])
            }
            mat[r][i] = num
        }
    }
    return mat

}

var mat1 = [[[2], [-1]], [[2],[0]]]
var mat2 = [[2, 3], [-2, 1]]

var mat_result = mult_matriz(mat1, mat2)

console.log(mat_result)

mat1 = [[4, 0], [-1, -1]]
mat2 = [[-1, 3], [2, 7]]

mat_result = mult_matriz(mat1, mat2)

console.log(mat_result)
