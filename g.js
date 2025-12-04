//Задача1
const concatenateStrings = (str1, str2) => {
    let concatenated = str1 + str2;
    let result = concatenated.replace(/\s + /g, '');
    return result;
}
console.log(concatenateStrings('Хекслет', 'колледж'))

//задача2
const getStringLength = (str) =>{
    return str.length
}
console.log(getStringLength('Hexly'))

//задача3
const getStringFromTemplate = (firstName, LastName) =>{
    let first = firstName
    let last = LastName
    let m = (`Hello, ${first} ${last} !`) 
    return m 
}
console.log(getStringFromTemplate('Иван', 'Иванович'))

//задача4
const getChar = (str, number) =>{
    return str[number - 1]
}
console.log(getChar('Hello', 2))

//задача5
const removeFirstOccurrences = (str, uStr) => {
    let i = str.indexOf(uStr)
    let result = str.slice(0, i) + str.slice(i + uStr.length)
    return result
}
console.log(removeFirstOccurrences('Hello, my name is Ivan', 'name'))

//задача6
const getRectangleString = (width, height) =>{
    let str = "";
    
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (row == 0 || row == height - 1) {
                str += "*";
            } else if (col == 0 || col == width - 1) {
                str += "*";
            } else {
                str += " ";
            }
        }
        str += "\n";
    }
    
    return str;
}
console.log(getRectangleString(3, 3))