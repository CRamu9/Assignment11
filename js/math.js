//STEP 1
//To display positive version of your number
function showAbsoluteValue() {

    var input = prompt("Enter a number (positive or negative):");

    var number = parseFloat(input);

    var absoluteValue = Math.abs(number);

    console.log("The positive version of your number is: " + absoluteValue);
}

showAbsoluteValue();

//STEP 2
//Round the number up to the nearest whole number
 function roundUpDecimal() {

    var input = prompt("Enter a decimal number:");

    var decimalValue = parseFloat(input);

    var roundedUp = Math.ceil(decimalValue);

    console.log("Rounded up value: " + roundedUp);
}

roundUpDecimal();
//STEP 3
// To round it down to the nearest whole number

 function roundDownDecimal() {
  
    var input = prompt("Enter a decimal number:");

    var decimalValue = parseFloat(input);

    var roundedDown = Math.floor(decimalValue);

    console.log("Rounded down value: " + roundedDown);
}
roundDownDecimal();
//STEP 4
// To Find the smallest and largest numbers
function findMinMax() {
 
    var input = prompt("Enter 5 numbers separated by commas (e.g., 1,2,3,4,5):");

    var numbers = input.split(",").map(function(num) {
        return parseFloat(num.trim());
    });

    var min = Math.min(...numbers);
    var max = Math.max(...numbers);

    console.log("Smallest number: " + min);
    console.log("Largest number: " + max);
}

findMinMax();

//STEP 5
//To find the square root of a number
 function calculateSquareRoot() {
    var input = prompt("Enter a number to find its square root:");

    var number = parseFloat(input);

    if (isNaN(number) || number < 0) {
        console.log("Please enter a valid non-negative number.");
    }
    else
    {
        var squareRoot = Math.sqrt(number);
    }
    console.log("The square root of " + number + " is: " + squareRoot);
    }
calculateSquareRoot();
