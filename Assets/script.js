// define the hour breakpoints to later compare to time
var hourOne = dayjs("09:00:01")
var hourTwo = dayjs("10:00:01")
var hourThree = dayjs("11:00:01")
var hourFour = dayjs("12:00:01")
var hourFive = dayjs("13:00:01")


// var block1 = $("#block1.textArea")
// var block1content = block1.val()
// var block2 = $("#block2.textArea")


// count the number of blocks
let blockCount = container.childElementCount;
console.log(blockCount)
// do i need an array of blocks????????


var // Sets timer to check time every second
    time = setInterval(function () {

        // make currentDay display the date
        var today = dayjs().format("dddd D MMM YYYY")
        // console.log(today)
        $("#currentDay").text(today)

        // make currentTime display the time
        var time = dayjs().format("HH:mm:ss");
        $("#currentTime").text(time)

    }, 1000)



// get the current time (hour block) via dayjs
var currentHour = dayjs().format("HH")
console.log(currentHour)

// // manipulating currentHour for testing
// var currentHour = 10

//loop through all the blocks

// while (8 < currentHour < 19){}

for (var i = 0; i < blockCount; i++) {

    // set all the timeblocks to future by default
    $(".time-block").addClass("future")

    if (9 <= currentHour < 10) {
        $("#block1").removeClass("future").addClass("present")
    } else

        if (10 <= currentHour < 11) {
            $("#block1").addClass("past")
            $("#block2").removeClass("future").addClass("present")
        } else

            if (11 <= currentHour < 12) {
                $("#block1 block2").addClass("past")
                $("#block3").removeClass("future").addClass("present")
            } else

                if (12 <= currentHour < 13) {
                    $("#block1 block2 block3").addClass("past")
                    $("#block4").removeClass("future").addClass("present")
                } else

                    if (13 <= currentHour < 14) {
                        $("#block1 block2 block3 block4").addClass("past")
                        $("#block5").removeClass("future").addClass("present")
                    }
}

//saving timeblock text in local storage
// loop over all the timeblocks and get the current value of the textarea
// decide how you want to store the text for each hour in local storage
// can either store each individual hour as its own key 
// (e.g. in local storage, hour-9: "something")

// // testing the button event listener
// $(".saveBtn").on("click", function(){
//     console.log(textArea)
//     // $("#block1").removeClass("future").addClass("present")
//     // $("#block2").removeClass("future").addClass("present")
// })

// $(".saveBtn").on("click", setBlockContent())

// // set timeblock content
// function setBlockContent() {
//     var block1 = $("#block1.textArea")
//     var block1content = block1.val()
//     localStorage.setItem("block1", JSON.stringify(block1content))
//     console.log(localStorage)
// }

// // retrieve the save values from local storage and display them inside each timeblock whenever the page reloads
// // if you stored as individual keys, get each hour value from local storage and display in the corresponding textarea

// // get timeblock content
// function getBlockContent() {
//     var block1content = JSON.parse(localStorage.getItem("block1"))
// }

// clear the blocks at the end of the day
// if (19 < currentHour) {
//     textArea.text = ""
// }