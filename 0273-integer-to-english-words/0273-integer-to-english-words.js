/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
    if(num===0) return 'Zero'
    const ltTwentyMap = {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
        10: "Ten",
        11: "Eleven",
        12: "Twelve",
        13: "Thirteen",
        14: "Fourteen",
        15: "Fifteen",
        16: "Sixteen",
        17: "Seventeen",
        18: "Eighteen",
        19: "Nineteen",
    }

    const tensMap = {
        2: "Twenty",
        3: "Thirty",
        4: "Forty",
        5: "Fifty",
        6: "Sixty",
        7: "Seventy",
        8: "Eighty",
        9: "Ninety",
    }

    function getHundred(n) {
        let res = "";
        let first = Math.floor(n / 100);
        if (first) {
            res = ltTwentyMap[first] + ' Hundred'
        }
        let second = n % 100;
        if (second) {
            if(first){
            res+=' '
            }
            if (second < 10) {
                res += ltTwentyMap[second % 10]
            }
            else if (second < 20) {
                res +=ltTwentyMap[second]

            }
            else {
                res += tensMap[Math.floor(second / 10)]
                if(ltTwentyMap[second % 10]){
                    res+=' '+ltTwentyMap[second % 10];
                }
            }

        }
        return res
    }
    let postFix = ['', ' Thousand', ' Million', ' Billion'];
    let i = 0;
    let res="";



    while (num) {
        let hundred = getHundred(num % 1000);
        if (hundred) {
            if(res){
                res=' '+res
            }
            res = hundred + postFix[i] + res; // 1,000,000
        }
        i+=1
        num = Math.floor(num / 1000);
    }
    return res


};