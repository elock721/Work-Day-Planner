$(document).ready(function () {

    var timeStamp = $("#currentDay")


    dateDisplay();

    function dateDisplay() {
        timeStamp.text(moment().format('dddd, MMMM Do YYYY'));
    }

});

function timeUpdate(){
    var currentHour = moment().hours();
    $(".time-block").each(function(){
        var hourAsString = $(this).attr("id");// hour-9
        var hour = parseInt(hourAsString.split("-")[1]);
        if(hour < currentHour){
            //set the background to past
            $(this).addClass("past");
        } else if(hour === currentHour){
            //set the background to present 
            $(this).removeClass("past");
            $(this).addClass("present");
        } else{
            //set background to future
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}

timeUpdate();

// const m = moment();

// console.log(m.toString()); 