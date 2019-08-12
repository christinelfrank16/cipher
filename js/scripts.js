// This script alters the user's input and
// displays the  original or ciphered value
// when the user clicks on the respective img


// initialize after page is ready
jQuery(document).ready(function() {

  // prompt user for sentence to cipher
  var sentenceInput = prompt("Enter a sentence below:");
  // FOR DEBUGGING: console.log(sentenceInput);


  // Returns uppercase first and last letter of input string
  var firstLastLetter = function(sentence){
    return (sentence[0]+sentence[sentence.length-1]).toUpperCase();
  }
  // FOR DEBUGGING: console.log(firstLastLetter(sentenceInput));


  // Returns the input string in reverse order
  var reverseOrder = function(sentence) {
    var newSentence = "";
    for(i = sentence.length-1; i >= 0; i--){
      newSentence += sentence[i];
    }
    return newSentence;
  }
  // FOR DEBUGGING: console.log(reverseOrder(sentenceInput));


  // Finds and returns the middle letter of the input string
  var middleLetter = function(sentence){
    return sentence[Math.floor(sentence.length/2)];
  }
  // FOR DEBUGGING: console.log(middleLetter(sentenceInput));


  // Ciphers the input string
  var combineFunctions = function(sentence) {
    var modifiedSentence = middleLetter(sentence) + sentence + reverseOrder(firstLastLetter(sentence));
    return  reverseOrder(modifiedSentence);
  }
  // FOR DEBUGGING: console.log(combineFunctions(sentenceInput));


  // Event listener to display the ciphered string
  $("#locked").click(function() {
    document.getElementById("sentence").innerHTML = combineFunctions(sentenceInput);
  });

  // Event listener to display the original string
  $("#unlocked").click(function () {
    document.getElementById("sentence").innerHTML = sentenceInput;
  });

});
