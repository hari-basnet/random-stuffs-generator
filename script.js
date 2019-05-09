// JAVASCRIPT TEST 1
// 7 
// Write a function which can generate a random Finnish social security number.

// console.log(genSocialSecurityNum())
// 		220590-255H
// console.log(genSocialSecurityNum())
// 		190395-225J

function socialSecurityNumberFinland() {
    let day, month, year, dateOfBirth;
    let lastThreeNumbers, lastCharacter;
    let bigString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    day = Math.ceil(Math.random() * 31)
    if (day < 10 && day > 0) {
        day = '0' + day;
    }

    month = Math.ceil(Math.random() * 12)
    if (month < 10 && month > 0) {
        month = '0' + month;
    }

    year = Math.ceil(Math.random() * 99)
    if (year < 10 && year > 0) {
        year = '0' + year;
    }

    dateOfBirth = `${day}${month}${year}-`;

    lastThreeNumbers = Math.ceil(Math.random() * 999)
    if (lastThreeNumbers < 10) {
        lastThreeNumbers = '00' + lastThreeNumbers
    } else if (lastThreeNumbers < 100) {
        lastThreeNumbers = '0' + lastThreeNumbers
    }

    lastCharacter = bigString.charAt(Math.floor(Math.random() * bigString.length));



    return `${dateOfBirth}${lastThreeNumbers}${lastCharacter}`

}

console.log(socialSecurityNumberFinland());


// regb color generator 

const rgbColorGenerator = () => {

    let red = Math.floor(Math.random() * 256),
        green = Math.floor(Math.random() * 256),
        blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
}

console.log(rgbColorGenerator());


const arr1 = [1, 2, 3, 4, 4]


const checkUniqueness = (arr) => {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false
            }
        }
    }
    return true

}

console.log(checkUniqueness(arr1))

