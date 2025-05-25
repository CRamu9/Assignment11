//STEP 1
function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function main() {
    const monthInput = prompt("Enter month (1-12):");
    const yearInput = prompt("Enter year (e.g., 2025):");

    const month = parseInt(monthInput);
    const year = parseInt(yearInput);

    if (!isNaN(month) && !isNaN(year) && month >= 1 && month <= 12) {
        const days = getDaysInMonth(month, year);
        console.log(`${new Date(year, month - 1).toLocaleString('default', { month: 'long' })} ${year} has ${days} days.`);
    } else {
        console.log("Invalid input. Please enter a valid month (1-12) and a numeric year.");
    }
}

main();
//STEP 2
// To get the month name
function getMonthNameFromDate() {
    
    var dateInput = prompt("Enter a date (e.g., 2025-05-22):");

    var date = new Date(dateInput);

    if (isNaN(date.getTime())) {
        console.log("Invalid date format. Please enter a date like YYYY-MM-DD.");
        return;
    }

    var monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var monthName = monthNames[date.getMonth()];

    console.log("The month name for the given date is: " + monthName);
}

getMonthNameFromDate();
//STEP 3
//To check if the day is a weekend

function checkIfWeekend() {
  
    var dateInput = prompt("Enter a date (e.g., 2025-05-24):");

    var date = new Date(dateInput);

    if (isNaN(date.getTime())) {
        console.log("Invalid date format. Please enter a valid date in YYYY-MM-DD format.");
        return;
    }
    var day = date.getDay();

    if (day === 0 || day === 6) {
        console.log("The date " + dateInput + " falls on a weekend.");
    } else {
        console.log("The date " + dateInput + " is a weekday.");
    }
}
checkIfWeekend();

//STEP 4
//To get the day of the week for yesterday
function getYesterdaysDay() {

    var today = new Date();

    var yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var yesterdayDayName = dayNames[yesterday.getDay()];

    console.log("Yesterday was: " + yesterdayDayName);
    }

getYesterdaysDay();
//STEP 5

//Get the first letter of the day
function showFirstLetterOfDay() {
 
    var today = new Date();

    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var dayName = dayNames[today.getDay()];

    var firstLetter = dayName.charAt(0);

    console.log("Today's first letter is: " + firstLetter);
}

showFirstLetterOfDay();
