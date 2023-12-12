// define the hour breakpoints to later compare to time
var hourOne = dayjs("09:00:01")
var hourTwo = dayjs("10:00:01")
var hourThree = dayjs("11:00:01")
var hourFour = dayjs("12:00:01")
var hourFive = dayjs("13:00:01")

// count the number of blocks
let blockCount = container.childElementCount;
console.log(blockCount)


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

// manipulating currentHour for testing
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
// saving timeblock text in local storage

var saveBtn = $(".saveBtn")

saveBtn.on("click", saveContent)

function saveContent() {
    console.log($(this).siblings(".textArea").val())


    // 'this' refers to the element that called the function (i.e. save button)
    // being applied to all the save buttons
    // but the console.log will refer to the specific button I clicked

    // get the content for the block
    var text = $(this).siblings(".textArea").val()
    // ID of the parent block, access via jquery attribute method
    var key = $(this).parent().attr("id")

    localStorage.setItem(key, text)
    console.log(localStorage)
// then save both to local storage using .setItem
}

// then access it from local storage



// loop over all the timeblocks and get the current value of the textarea

// decide how you want to store the text for each hour in local storage
// can either store each individual hour as its own key 
// (e.g. in local storage, hour-9: "something")


// retrieve the save values from local storage and display them inside each timeblock when page reloads
// if stored as individual keys, get each hour value from local storage and display in the corresponding textarea
