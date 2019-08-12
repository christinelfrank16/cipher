// This script alters the user's input and
// displays the  original or ciphered value
// when the user clicks on the respective img


// initialize after page is ready
jQuery(document).ready(function() {

  // prompt user for sentence to cipher
  var userPrompt = function() {
    var response = prompt("Enter a sentence below:");
    if (!response) {
      response = "Supercalifragilisticexpialidocious";
    }
    return response;
  }
  var sentenceInput1 = userPrompt();

  // Returns uppercase first and last letter of input string
  var firstLastLetter = function(sentence){
    return (sentence[0]+sentence[sentence.length-1]).toUpperCase();
  }

  // Returns the input string in reverse order
  var reverseOrder = function(sentence) {
    var newSentence = "";
    for(i = sentence.length-1; i >= 0; i--){
      newSentence += sentence[i];
    }
    return newSentence;
  }

  // Finds and returns the middle letter of the input string
  var middleLetter = function(sentence){
    return sentence[Math.floor(sentence.length/2)];
  }

  // Ciphers the input string
  var combineFunctions = function(sentence) {
    var modifiedSentence = middleLetter(sentence) + sentence + reverseOrder(firstLastLetter(sentence));
    return  reverseOrder(modifiedSentence);
  }

  // Event listener to display the ciphered string
  $("#locked").click(function() {
    document.getElementById("sentence").innerHTML = combineFunctions(sentenceInput1);
  });

  // Event listener to display the original string
  $("#unlocked").click(function () {
    document.getElementById("sentence").innerHTML = sentenceInput1;
  });

});
