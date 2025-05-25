//STEP 1
// To sort in alphabetical order.

function alphabetOrder(str) {

    return str.split('').sort().join('');
}

var example = 'webmaster';
console.log("Original string: " + example);
console.log("Alphabetical order: " + alphabetOrder(example));

//STEP 2
// To Capitalize first letter of each word

function capitalizeWords(str) {
    return str
        .split(' ')                        
        .map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);  
        })
        .join(' ');                       
}

var example = 'the quick brown fox';
console.log("Original string: " + example);
console.log("Capitalized: " + capitalizeWords(example));

//STEP 3
//To count the vowels in a sentence

function countVowels(str) {

    const matches = str.match(/[aeiou]/gi);

    return matches ? matches.length : 0;
}

var example = 'The quick brown fox';
console.log("Example string: " + example);
console.log("Number of vowels: " + countVowels(example));

//STEP 4
//To generate a random stringID

function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
 
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

console.log(generateRandomId(8)); 

//STEP 5
//To find the longest country name]

function Longest_Country_Name(countryList) {

    return countryList.reduce(function(longest, current) {
        return current.length > longest.length ? current : longest;
    }, "");
}

const countries = ["Australia", "Germany", "United States of America"];
console.log("Longest country name:", Longest_Country_Name(countries));
