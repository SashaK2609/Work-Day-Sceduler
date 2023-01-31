
let currentDay = $("#currentDay");

//display the current date
currentDay = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDay);

//highlight the input with colors depending on what time it is
const currentHour = Date.now().getHours();

$(".row").each(function() {
	let val = +$(this).attr("id").replace("hour", "");

	if (val < currentHour) {
		$(this).find(".input").addClass(".past");
	} else if (val > currentHour) {
		$(this).find(".input").addClass(".future");
	} else if(val === currentHour) {
		$(this).find(".input").addClass(".present");
	} 
	});

