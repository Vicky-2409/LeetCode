/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function (coordinate1, coordinate2) {
    
    let column = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8
    };

    if ((column[coordinate1[0]] + +coordinate1[1]) % 2 == 0 && (column[coordinate2[0]] + +coordinate2[1]) % 2 == 0) {
        return true;
    }

    if ((column[coordinate1[0]] + +coordinate1[1]) % 2 !== 0 && (column[coordinate2[0]] + +coordinate2[1]) % 2 !== 0) {
        return true;
    }

    return false;
};