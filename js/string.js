//STEP 1
//To find the length of a name
function getNameLength() {

var name = prompt("What is your name?");


if (name !== null && name.trim() !== "") {
    var length = name.length;
    alert("Your name has " + length + " characters.");
} else {
    alert("You didn't enter a valid name.");
}
}

getNameLength();

//STEP 2
// To Get the character at the specified index

function findLetterInName() {
    
    var name = prompt("What is your name?");
    
    
    if (name === null || name.trim() === "") {
        alert("You didn't enter a valid name.");
        return;
    }

    var index = prompt("Enter a number to find the letter at that position in your name (starting from 0):");
    var position = parseInt(index);

   
    if (isNaN(position)) {
        alert("That's not a valid number.");
        return;
    }

    if (index < 0 || index >= name.length) {
        alert("Index out of bounds. Please enter a number between 0 and " + (name.length - 1));
        return;
    }  
    
    var letter = name.charAt(index);
    alert("The letter at position " + index + " is: '" + letter + "'");
}

findLetterInName();


//STEP 3
// string concatenation to create the full name message

function getFullName() {

    var firstName = prompt("Please enter your first name:");

    var lastName = prompt("Please enter your last name:");

    
    var fullNameMessage = "Your name is: " + firstName.concat(" ", lastName);

    alert(fullNameMessage);
}

window.onload = getFullName;
 
//STEP 4

function findFoxIndex() {

    var sentence = "The quick brown fox jumps over the lazy dog";

    var index = sentence.indexOf("fox");

    alert("The index of the word 'fox' is: " + index);
}

findFoxIndex();

//STEP 5

function findLastFoxIndex() {
    var sentence = "The quick brown fox jumps over the lazy fox";

    var lastIndex = sentence.lastIndexOf("fox");

    alert("The last index of the word 'fox' is: " + lastIndex);
}
findLastFoxIndex();

//STEP 6

 function replaceWithName() {

    var sentence = "The quick brown fox jumped over the lazy dog";

    var fullName = prompt("Please enter your full name:");

    // Replace "the lazy dog" with the user's name
    var updatedSentence = sentence.replace("the lazy dog", fullName);

    alert(updatedSentence);
}
replaceWithName();

//STEP 7
function searchWordInSentence() {

    var sentence = "The quick brown fox jumps over the lazy dog";

    var searchWord = prompt("Enter a word to search for in the sentence:");

    var index = sentence.indexOf(searchWord);

    if (index !== -1) {
        alert("The word '" + searchWord + "' was found at index: " + index);
    } else {
        alert("The word '" + searchWord + "' was not found in the sentence.");
    }
    }
searchWordInSentence();

//STEP 8

function extractAndUppercase() {
   
    var old_string = "The quick brown fox jumps over the lazy dog";

    var actual_string = old_string.substring(0, 30);
    
    var new_string = old_string.slice(31);

    var uppercased = new_string.toUpperCase();

    my_string = actual_string.concat(" ", uppercased)
    
    alert(my_string);
}
extractAndUppercase();

//STEP 9

function trimAndLowercase() {

    var text = "   THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";

    var result = text.trim().toLowerCase();

    alert(result);
}

// Run the function when the page loads
trimAndLowercase();

//STEP 10
function capitalizeFirstLetter() {
  
    var sentence = "the quick brown fox jumps over the lazy dog";

    // Step 2: Capitalize the first letter and keep the rest the same
    var correctedSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

    alert(correctedSentence);
}
capitalizeFirstLetter();
