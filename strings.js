var validChar = /[a-zA-z]/;

var input = document.getElementById("userData");

var button = document.getElementById("returnInput");
button.addEventListener("click", validate);
button.addEventListener("keypress", validate);

window.addEventListener("keyup",
	function(e) {
	if (e.keyCode == 13) {
    document.getElementById("returnInput").click(testString);
  }
});

	manipulateString.userData = document.getElementById("userData").value;

function validate() {
    if (/""/.test(input)); {
        alert("Please enter character");
    }

    if (/^[a-zA-Z]+$/.test(input)); {
    	alert("Only accepts letters")
    }
};


// function alphabits() {

// }

// function palindrome() {

// }

// function palindrome() {
	
// }

