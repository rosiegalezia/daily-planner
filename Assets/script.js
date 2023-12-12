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

// get the current time (hour block) via dayjs
// parseInt to set the time to a number rather than string
var currentHour = parseInt(dayjs().format("H"))
console.log(currentHour)

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
                } else
                    if (currentHour === 13) {
                        $("#block1").removeClass("present future").addClass("past")
                        $("#block2").removeClass("present future").addClass("past")
                        $("#block3").removeClass("present future").addClass("past")
                        $("#block4").removeClass("present future").addClass("past")
                        $("#block5").removeClass("past future").addClass("present")
                    } else
                        if (currentHour === 14) {
                            $("#block1").removeClass("present future").addClass("past")
                            $("#block2").removeClass("present future").addClass("past")
                            $("#block3").removeClass("present future").addClass("past")
                            $("#block4").removeClass("present future").addClass("past")
                            $("#block5").removeClass("present future").addClass("past")
                            $("#block6").removeClass("past future").addClass("present")
                        } else
                            if (currentHour === 15) {
                                $("#block1").removeClass("present future").addClass("past")
                                $("#block2").removeClass("present future").addClass("past")
                                $("#block3").removeClass("present future").addClass("past")
                                $("#block4").removeClass("present future").addClass("past")
                                $("#block5").removeClass("present future").addClass("past")
                                $("#block6").removeClass("present future").addClass("past")
                                $("#block7").removeClass("past future").addClass("present")
                            } else
                                if (currentHour === 16) {
                                    $("#block1").removeClass("present future").addClass("past")
                                    $("#block2").removeClass("present future").addClass("past")
                                    $("#block3").removeClass("present future").addClass("past")
                                    $("#block4").removeClass("present future").addClass("past")
                                    $("#block5").removeClass("present future").addClass("past")
                                    $("#block6").removeClass("present future").addClass("past")
                                    $("#block7").removeClass("present future").addClass("past")
                                    $("#block8").removeClass("past future").addClass("present")
                                } else
                                    if (currentHour === 17) {
                                        $("#block1").removeClass("present future").addClass("past")
                                        $("#block2").removeClass("present future").addClass("past")
                                        $("#block3").removeClass("present future").addClass("past")
                                        $("#block4").removeClass("present future").addClass("past")
                                        $("#block5").removeClass("present future").addClass("past")
                                        $("#block6").removeClass("present future").addClass("past")
                                        $("#block7").removeClass("present future").addClass("past")
                                        $("#block8").removeClass("present future").addClass("past")
                                        $("#block9").removeClass("past future").addClass("present")
                                    }
                
}

// saving timeblock text in local storage

var saveBtn = $(".saveBtn")

// event listener to save when save button clicked
saveBtn.on("click", saveContent)

function saveContent() {
    console.log($(this).siblings(".textArea").val())

    // 'this' refers to the element that called the function (i.e. save button)
    // and is applied to all the save buttons
    // but the console.log will refer to the specific button I clicked

    // get the content for the block
    var text = $(this).siblings(".textArea").val()
    // ID of the parent block, access via jquery attribute method
    var key = $(this).parent().attr("id")

    // then save both to local storage using .setItem
    localStorage.setItem(key, text)
    console.log(localStorage)
}

// then access it from local storage

// makes an array of all of the textAreas
var textAreaEl = $(".textArea")

function getContent() {

    // loop over all the timeblocks and get the current value of the textarea
    for (i = 0; i < textAreaEl.length; i++) {
        console.log(textAreaEl[i])

        // the key we want is the ID of the parent (ie the block number)
        // make a variable for key for each
        var keyEl = $(textAreaEl[i]).parent().attr("id")
        console.log(keyEl)

        // call the content by its key
        localStorage.getItem(keyEl)

        // set the contents of textArea to the content from local storage
        textAreaEl[i].textContent = localStorage.getItem(keyEl)
    }
}
getContent()

function reset(){
    for (i = 0; i < textAreaEl.length; i++) {
        localStorage.clear()
        textAreaEl[i].textContent = ""
    }  
    location.reload(true)
}

// decide how you want to store the text for each hour in local storage
// can either store each individual hour as its own key 
// (e.g. in local storage, hour-9: "something")


// retrieve the save values from local storage and display them inside each timeblock when page reloads
// if stored as individual keys, get each hour value from local storage and display in the corresponding textarea
