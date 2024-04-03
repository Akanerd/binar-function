let result
let check
console.log("----------------------------------")
function countLetter(str){
    result = str.length
    return result
}
console.log("Hasilnya Jumlah Alphabet pada kata: " + countLetter('Hafizh'))
console.log("----------------------------------")

function countWord(str){
    result = str.trim().split(" ")
    return result.length
}
console.log("Hasilnya Jumlah kalimat: " + countWord('Halo saya Hafizh'))
console.log("----------------------------------")

function calculate(num1,num2,operation){
   let operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => (b !== 0 ? a / b : "Error: tidak bisa dibagi dengan 0"),
    }

   result = operations[operation]
   return result(num1, num2);
}
console.log("Hasil Operasi +: " + calculate(5,3,'+'))
console.log("Hasil Operasi -: " + calculate(5,3,'-'))
console.log("Hasil Operasi *: " + calculate(5,3,'*'))
console.log("Hasil Operasi /: " + calculate(5,0,'/'))
console.log("----------------------------------")


function checkPalindrom(str) {
    result = str == str.split('').reverse().join('')
    check = result ? "true" : "false";
    return check
}

console.log("Hasil check paliandrom jika true: " + checkPalindrom('katak'))
console.log("Hasil check paliandrom jika false: " + checkPalindrom('hafizh'))
console.log("----------------------------------")

function countTotal(disc, shop) {
   result = shop - (disc/100 * shop )
   return result  
}

console.log("Hasil Total belanja setelah discount: " + countTotal(10, 10000))