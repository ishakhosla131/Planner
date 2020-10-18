
$(document).ready(function () {

    //using moment.js to display the current date
    $("#currentDay").text(moment().format(" dddd MMMM Do"))

    //on click for save button
    $(".saveBtn").on("click", function (e) {
        var userInput = $(this).parent().parent().find(".description").val();
        console.log(userInput);
        //setting local storage
        var key = $(this).parent().parent().attr("id")
        e.preventDefault();
        localStorage.setItem(key, userInput)
    });

    //saving each text area to local storage
    console.log(moment().format('LT'))
    var time = moment().format('LT')
    var hour = 9
    for (var i = 9; i < 18; i++) {
        $("#hour-" + i).find("textarea").val(localStorage.getItem("hour-" + i))
    }
    // using the moment.js library to color code the hours
    var currentHour = moment().hours();
    $(".row").each(function () {
        var hour = parseInt($(this).attr("id").split("-")[1])
        if (hour < currentHour) {
            $(this).addClass("past")
        }
        else if (hour > currentHour) {
            $(this).removeClass("past");
            $(this).addClass("future")
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present")

        }

    })

});


