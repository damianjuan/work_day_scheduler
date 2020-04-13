//display the current date on the page
var currentDay = $("#currentDay").text(moment().format("dddd, MMMM Do"));

// array holding empty strings so i have array positions available to save to that match id number of row
var savedEvents = ["", "", "", "", "", "", "", "", ""];

//put the functions to run on page load here
generateTable();
getEvents();
renderEvents();



//display time blocks on page for standard biz hours 9am-5pm
// do this dynamically from js
// method to generate the tables


function generateTable() {
    //create new div to hold table and add to container div. tried to use table tags but had too many issues
    var tableEl = $("<div>");
    $(".container").append(tableEl);



    for (let i = 0; i < 9; i++) {

        //create table row and set style with class. add id of i so that the id will match the index position of the correct corresponding savedEvents array index to reference when events are saved to local storage.
        var tableRowEl = $("<div>").addClass("row time-block").attr("name", i);


        // get hours from moment and adjust time to meet work start time. if didnt include + 9 time would start at 12am
        var hourEl = moment().hours(i + 9);
        //create hour div with class to match css and the time from hourEl
        var hourCol = $("<div>").addClass("col-md-2 hour").text(hourEl.format("h A")).attr("name", i);

        //create div to hold blank space to enter text and class to match value returned by function colorCode to change background color depending on time.  
        var textSpace = $("<textarea>").addClass("col-md-8 description ").attr("name", i);
        textSpace.addClass(colorCode(hourEl.hour()));


        //create button to save event to local storage. add class to match css styling and create onclick attr to call function to save event entry
        var saveEl = $("<button>").addClass("col-md-2 saveBtn fas fa-save").attr("name", i); //.attr("onclick", "saveEvent()"); onclick didnt work

        //add all columns to row
        $(tableRowEl).append(hourCol, textSpace, saveEl);

        //add to table div in html so it will display on screen
        $(tableEl).append(tableRowEl);
    };

    $(".container").append(tableEl);
};

// function to save events to local storage. will also need function to retrieve from local storage.


$("button").click(function () {
    //gets name of saveBtn and makes it a number so we can use it as the index position that the string from the text area should go to in the array
    var indexToSaveTo = parseInt(this.name);
    //grabs string that was entered into the text area with the same name as the saveBtn
    var eventToSave = ($("textarea[name*=" + indexToSaveTo + " ]").val());
    //console.log("index saving to: " + indexToSaveTo + " :" + eventToSave);

    //adds the event to the correct index position in the savedEvents array
    savedEvents.splice(indexToSaveTo, 1, eventToSave);
    //console.log(savedEvents);

    //send the whole savedEvents array to local storage whenever any saveBtn is pressed
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));


});


//color code to indicate whether it is in the past, present, or future
//for loop to check time for each individual time block using moment to check time and
// if statement to set attr(background color) for time block to match color based on time
//past is grey, current is red future is green

function colorCode(hour) {

    var currentTime = moment().hour();
    //console.log(hour);

    // if statement to show what time are. tried to use a switch statement and had trouble. come back and try again after everything works
    if (hour < currentTime) {
        "past"
        //console.log("past " + hour);
    } else if (hour === currentTime) {
        "present"
        //console.log("present " + hour);
    } else {
        "future"
        //console.log("future " + hour);

    };

};

function getEvents() {
    var storedEvents = JSON.parse(localStorage.getItem("savedEvents"));
    console.log(storedEvents);

    if (storedEvents !== null) {
        savedEvents = storedEvents;

    }
};

function renderEvents() {
    for (let i = 0; i < savedEvents.length; i++) {

        var eventToWrite = savedEvents[i];
        var textAreaInsertLocation = ($("textarea[name*=" + i + " ]"));
        textAreaInsertLocation.val(eventToWrite);
    };
}






