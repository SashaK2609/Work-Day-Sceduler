(function () {
	$(document).ready(function() {
		//display the current date
		currentDay = moment().format("dddd, MMMM Do, YYYY");
		$("#currentDay").text(currentDay);

		//define hour to know what color should be in the input field
		const currentHour = new Date().getHours();

		function save(event) {
			const parent = $(event.target).parent();
			const input = parent.find('.input');
			const task = input.val();

			localStorage.setItem(parent.attr("id"), task);
		}

		//checks each id in class row and replaces it with a string...
		$(".row").each(function() {
			let val = +$(this).attr("id").replace("hour", "");
			const container = $(this);
			const input = container.find(".input");
			const saveButton = container.find('.save-button');

			//get user's input from local storage according to the hour or display an empty string if there's no input
			const savedTask = localStorage.getItem(container.attr("id")) || "";

			//...runs these conditions for each button and input
			//highlight the input with colors depending on what time it is
			if (val < currentHour) {			
				input.addClass("past");

				//unables to make some notes on passed hour
				input.prop("disabled", true); 
				saveButton.prop("disabled", true);
			} else if (val > currentHour) {
				input.addClass("future");
				saveButton.on("click", save);
			} else if(val === currentHour) {
				input.addClass("present");
				saveButton.on("click", save);
			}

			input.val(savedTask);
		});
	});
})();

