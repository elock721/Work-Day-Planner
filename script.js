$(document).ready(function () {

    var timeStamp = $("#currentDay")

// current date at top of screen
    dateDisplay();

    function dateDisplay() {
        timeStamp.text(moment().format('dddd, MMMM Do YYYY'));
    }

});
// function responsible for color coding the 
// approriate hours according to the current time
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

// selecting buttons, storing text content in local storage
// and keep text on page after refresh  
var logBtns = document.querySelectorAll(".saveBtn");
logBtns.forEach(function(btn) {
    btn.addEventListener("click", handleClick)
})
var workNotes = document.querySelectorAll(".description");
var refresh = document.querySelectorAll(".hour");

refresh.forEach(element => {
    var hour = element.textContent.trim();
    var notes = localStorage.getItem(hour);
    if(notes !== null){
    let textArea = element.parentNode.querySelector("textarea");
    textArea.value = notes
    }
});

function handleClick(event) {
    var parent = this.parentNode;
    var textArea = parent.querySelector("textarea");
    var time = parent.textContent.trim()
    var timeMessg = textArea.value
    localStorage.setItem(time, timeMessg)
    
}










