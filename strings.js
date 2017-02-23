var input = document.getElementById("userData");
var button = document.getElementById("returnInput");

button.addEventListener("click", validate);
button.addEventListener("keypress", validate);

document.onkeydown = function() {
 if (window.event.keyCode === 13) {
   validate(input.value);
 }
};


function validate(e) {
    if (input == ""); {
        alert("Please enter character");
    }

//     if (/^[a-zA-Z]+$/.test(input)); {
//         alert("Only accepts letters")
//     }
// };


function reversal(e) {
    var reverseString = e.split("").reverse().join("");
    console.log(reverseString);
    document.getElementById("reverse").innerHTML += reverseString;
};


function alphabits(e) {
    var alphabits = e.split("").sort().join("");
    console.log(alphabits);
    document.getElementById("alpha").innerHTML += alphabits;
};


function palindrome(e) {
    var reverseString = e.split("").reverse().join("");
    var palindrome = reverseString.toLowerCase();
    if (palindrome === e.toLowerCase()) {
        document.getElementById("pal").innerHTML = "Yay! This string is a Palindrome.";
    } else {
        document.getElementById("pal").innerHTML = "Sorry, this string is not a Palindrome.";
    }
};


function manipulateString(e) {
    reversal(e);
    alphabits(e);
    palindrome(e);
};