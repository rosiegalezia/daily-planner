// define the hour breakpoints to later compare to time
var hourOne = dayjs("09:00:01")
var hourTwo = dayjs("10:00:01")
var hourThree = dayjs("11:00:01")
var hourFour = dayjs("12:00:01")
var hourFive = dayjs("13:00:01")



// count the number of blocks
let blockCount = container.childElementCount;
console.log(blockCount)
// do i need an array of blocks????????


// var // Sets timer to check time every second
time = setInterval(function () {

    // make currentDay display the date
    var today = dayjs().format("dddd D MMM YYYY")
    // console.log(today)
    $("#currentDay").text(today)

    // make currentTime display the time
    var time = dayjs().format("HH:mm:ss");
    $("#currentTime").text(time)

}, 1000)


// WHY DOES THIS NOT WORK????????????????
// get the current time (hour block) via dayjs
var currentHour = dayjs().format("H")
console.log(currentHour)

// // manipulating currentHour for testing
// var currentHour = 9

//loop through all the blocks
for (var i = 0; i < blockCount; i++) {

    // set all the timeblocks to future by default
    $(".time-block").addClass("future")

    if (currentHour === 9) {
        $("#block1").removeClass("past future").addClass("present")
    } else
        if (currentHour === 10) {
            $("#block1").removeClass("present future").addClass("past")
            $("#block2").removeClass("past future").addClass("present")
        } else
            if (currentHour === 11) {
                $("#block1").removeClass("present future").addClass("past")
                $("#block2").removeClass("present future").addClass("past")
                $("#block3").removeClass("past future").addClass("present")
            } else
                if (currentHour === 12) {
                    $("#block1").removeClass("present future").addClass("past")
                    $("#block2").removeClass("present future").addClass("past")
                    $("#block3").removeClass("present future").addClass("past")
                    $("#block4").removeClass("past future").addClass("present")
                }

}

// -----------------------------------------------
//saving timeblock text in local storage

for (var i = 0; i < blockCount; i++) {

var timeblocks = $(".time-block")
var textAreas = $(".textArea")
var textAreasArray = Array.from(textAreas.val())

console.log(textAreasArray)
}


// var block1 = $("#block1.textArea")
// // var block1content = block1.val()
// var block2 = $("#block2.textArea")


// loop over all the timeblocks and get the current value of the textarea

// decide how you want to store the text for each hour in local storage
// can either store each individual hour as its own key 
// (e.g. in local storage, hour-9: "something")

// $(".saveBtn").on("click", setBlockContent())

// // set timeblock content
// function setBlockContent() {
//     // var block1 = $("#block1")
//     // var block1content = block1.textArea
//     // var block1contentpleasework = block1content.val()
//     // // localStorage.setItem("block1", block1content)
// }

// retrieve the save values from local storage and display them inside each timeblock when page reloads
// if stored as individual keys, get each hour value from local storage and display in the corresponding textarea

// get timeblock content
// function getBlockContent() {
//     var block1content = JSON.parse(localStorage.getItem("block1"))
// }

// clear the blocks at the end of the day
// if (19 < currentHour) {
//     textArea.text = ""
// }