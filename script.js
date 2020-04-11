var currentDay = $("#currentDay").text(moment().format("dddd, MMMM Do"));
var workHours = ["9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"];
var savedEvents = ["", "", "", "", "", "", "", "", ""];

//put the functions we want to run on page load here
generateTable();


//display the current date on the page

//display time blocks on page for standard biz hours 9am-5pm
// do this dynamically from js
// method to generate all the tables


function generateTable() {




    colorCode();
};


//color code to indicate whether it is in the past, present, or future
//for loop to check time for each individual time block using moment to check time and 
// if statement to set attr(background color) for time block to match color based on time
//past is grey, current is red future is green
function colorCode() {

};

//click a time block to enter an event
//on click event to allow input 

//click save button to save event in local storage
//create save button and add onclick event to save to local storage
var savedEvents = ["", "event"]


//test to make sure on page reload events stays
