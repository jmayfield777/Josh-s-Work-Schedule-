// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

// grab p element where date and time will be stored
let displayDate = document.getElementById('currentDay');

// set date and time to variable
let currentTime = dayjs().format('dddd, MMMM D, YYYY, h:mm:ss a');

// set p element to display current time
displayDate.textContent = currentTime;



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  $('.saveBtn').on('click', function () {
    let text = $(this).siblings('.description').val();
    let time = $(this).parent().attr('id');

    localStorage.setItem(time, text);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
function hourTracker() {

  // get the current time
  let currentHour = dayjs().hour();

  // loop over each hour block
  $('.time-block').each(function () {

    let hourBlock = parseInt($(this).attr('id').split('-')[1]);

  // apply and remove classes for past, present, future depending on the time
  if (hourBlock < currentHour) {
    $(this).addClass('past');
  } else if (hourBlock === currentHour) {
    $(this).removeClass('past');
    $(this).addClass('present');
  } else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
  }
  });
}

hourTracker();
  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  

});