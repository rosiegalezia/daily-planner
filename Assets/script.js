{/* <h1 class="display-3">Work Day Scheduler</h1>
<p class="lead">A simple calendar app for scheduling your work day</p>
<p id="currentDay" class="lead"></p> */}

var title = document.getElementsByClassName(".display-3")
// var currentDay = document.querySelector("#currentDay")
// var currentTime = document.getElementById("#currentTime")

var container = document.getElementById("#container")
// var blockElements = container.children
var textArea = document.getElementsByClassName(".textArea")

// make currentDay display the date and time
// referesh every ??? so it's up to date

var today = dayjs().format("dddd D MMM YYYY")
console.log(today)
$("#currentDay").text(today)

var time = dayjs().format("H:mm:ss");
$("#currentTime").text(time)



// // loop through all the blocks
// for (var i=0; i<blockElements.length; i++){

// }



// have timeblock colors correspond to past, present, future
    // get current time hour via dayjs
    // loop over all the timeblocks, conditionally assign past present or future class (see css) by comparing that timeblock's hour to the current hour


 
 //saving timeblock text in local storage
    // loop over all the timeblocks and get the current value of the textarea
    // decide how you want to store the text for each hour in local storage
        // can either store each individual hour as its own key 
        // (e.g. in local storage, hour-9: "something") 



// retrieve the save values from local storage and display them inside each timeblock whenever the page reloads 
// if you stored as individual keys, get each hour value from local storage and display in the corresponding textarea
