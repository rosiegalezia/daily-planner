{/* <h1 class="display-3">Work Day Scheduler</h1>
<p class="lead">A simple calendar app for scheduling your work day</p>
<p id="currentDay" class="lead"></p> */}

var title = $(".display-3")

var textArea = $(".textArea")

// var block910 = $("#block1")

// count the number of blocks
let blockCount = container.childElementCount;
console.log(blockCount)

// define the hour breakpoints to later compare to time
var hourOne = dayjs("09:00:01")
var hourTwo = dayjs("10:00:01")
var hourThree = dayjs("11:00:01")
var hourFour = dayjs("12:00:01")
var hourFive = dayjs("13:00:01")


var // Sets timer to check time every second
time = setInterval(function() {

// make currentDay display the date
var today = dayjs().format("dddd D MMM YYYY")
// console.log(today)
$("#currentDay").text(today)

// make currentTime display the time
var time = dayjs().format("HH:mm:ss");
$("#currentTime").text(time)

}, 1000)

// // loop through all the blocks
// for (var i=0; i < blockCount; i++){
// }


// have timeblock colors correspond to past, present, future

    // loop over all the timeblocks, conditionally assign past present or future class (see css) by comparing that timeblock's hour to the current hour
// loop through all the blocks

// get the current time (hour block) via dayjs
var currentHour = dayjs().format("HH")
console.log(currentHour)

if (9 < currentHour < 10){
    $("#block1").addClass("present")
} else

if (10 < currentHour < 11){
    $("#block1").addClass("past")
    $("#block2").addClass("present")
} else

if (11 < currentHour < 12){
    $("#block1 block2").addClass("past")
    $("#block3").addClass("present")
} else


for (var i=0; i < blockCount; i++){

}

 
 //saving timeblock text in local storage
    // loop over all the timeblocks and get the current value of the textarea
    // decide how you want to store the text for each hour in local storage
        // can either store each individual hour as its own key 
        // (e.g. in local storage, hour-9: "something") 



// retrieve the save values from local storage and display them inside each timeblock whenever the page reloads 
// if you stored as individual keys, get each hour value from local storage and display in the corresponding textarea

// clear the blocks at the end of the day
// if time>23.59,
// textArea.text=""