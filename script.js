//display the current date on the page
var currentDay = $("#currentDay").text(moment().format("dddd, MMMM Do"));

// array holding empty strings so i have array positions available to save to that match id number of row
var savedEvents = ["", "", "", "", "", "", "", "", ""];

//put the functions to run on page load here
generateTable();




//display time blocks on page for standard biz hours 9am-5pm
// do this dynamically from js
// method to generate the tables


function generateTable() {
    //create new div to hold table and add to container div. tried to use table tags but had too many issues
    var tableEl = $("<div>");
    $(".container").append(tableEl);



    for (let i = 0; i < 9; i++) {

        //create table row and set style with class. add id of i so that the id will match the index position of the correct corresponding savedEvents array index to reference when events are saved to local storage.
        var tableRowEl = $("<div>").addClass("row time-block").attr("id", i);

        // get hours from moment and adjust time to meet work start time. if didnt include + 9 time would start at 12am
        var hourEl = moment().hours(i + 9);
        //create hour div with class to match css and the time from hourEl
        var hourCol = $("<div>").addClass("col-md-2 hour").text(hourEl.format("h A"));

        //create div to hold blank space to enter text and class to match value returned by function colorCode to change background color depending on time.  
        var textSpace = $("<textarea>").addClass("col-md-8 description" + colorCode(hourEl.hour()));

        //create button to save event to local storage. add class to match css styling and create onclick attr to call function to save event entry
        var saveEl = $("<button>").addClass("col-md-2 saveBtn fas fa-save").attr("onclick", "saveEvent()");

        //add all columns to row
        $(tableRowEl).append(hourCol, textSpace, saveEl);

        //add to table div in html so it will display on screen
        $(tableEl).append(tableRowEl);
    };

    $(".container").append(tableEl);
};

// function to save events to local storage. will also need function to retrieve from local storage.
function saveEvent() {

    console.log("save button pressed");
};


//color code to indicate whether it is in the past, present, or future
//for loop to check time for each individual time block using moment to check time and
// if statement to set attr(background color) for time block to match color based on time
//past is grey, current is red future is green
function colorCode(hourEl) {

    var currentTime = moment().hour();
    console.log(hourEl);


    switch (hourEl) {
        case hourEl < currentTime:
            "past"
            break;

        case hourEl === currentTime:
            "present"
            break;
        case hourEl < currentTime:
            "future"
            break;
    }


};

//test to make sure on page reload events stays


