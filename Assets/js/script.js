$(document).ready(function () {
  //write all of our jquery inside this function
  //variable declarations

  //Display the date to the user
  //first, gra  reference to the element that we wnat the time to be displayed
  var currentDay = $("#currentDay");
  //dispaly the current date in the p element
  currentDay.text(moment().format("dddd MMM Do"));

  //style 2 elements- one past one future

  //currently, im able to write text in the textarea, but not capturing the day and also not storing in local storage

  //jdynamically style the time blocks based on current time

  //functions
  //function will be responsible for checking time and determing what class to add - past, present or future.
  function checkTime() {
    //grab the current hour using moment js
    var currentHour = moment().hours();
    //need to grab the hours for the time-block
    //loop thru the time black hours
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      //check the currentHour against the blockHour
      //if else
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }
  checkTime();

  //event handlers
  $(".saveBtn").on("click", function () {
    //need to capture the information that the user inputted and we need to store that info into local storage
    var value = $(this).siblings(".desription").val();
    var time = $(this).parent().attr("id");

    //save info to local storage
    localStorage.setItem(time, value);
  });

  //dispaly the items that are in local storage into the time bloacks
  $("#hour-09 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
