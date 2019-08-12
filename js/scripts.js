
jQuery(document).ready(function() {
  var sentenceInput = prompt("Enter a sentence below:");
  console.log(sentenceInput);

  var firstLastLetter = function(sentence){
    return (sentence[0]+sentence[sentence.length-1]).toUpperCase();
  }
  console.log(firstLastLetter(sentenceInput));

  var newSentence = firstLastLetter(sentenceInput);

  var reverseOrder = function(sentence) {
    var newSentence = "";
    for(i = sentence.length-1; i >= 0; i--){
      newSentence += sentence[i];
    }
    return newSentence;
  }
  console.log(reverseOrder(sentenceInput));

  var middleLetter = function(sentence){
    return sentence[Math.floor(sentence.length/2)];
  }
  console.log(middleLetter(sentenceInput));

  var combineFunctions = function(sentence) {
    var modifiedSentence = middleLetter(sentence) + sentence + reverseOrder(firstLastLetter(sentence));
    return  reverseOrder(modifiedSentence);
  }

  console.log(combineFunctions(sentenceInput));

  $("#locked").click(function() {
    document.getElementById("sentence").innerHTML = combineFunctions(sentenceInput);
  });

  $("#unlocked").click(function () {
    document.getElementById("sentence").innerHTML = sentenceInput;
  });

});
