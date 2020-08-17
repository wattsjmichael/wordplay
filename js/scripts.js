$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const inputSent = $("input#sentence").val();
    const words = inputSent.split(" ");
    let newArray = [];

    words.forEach(function(word) {
      if (word.length >= 3) {
        newArray.push(word);
      }
    });
    newArray.reverse();
    let joinArray = newArray.join(" ");

    $("#result").text(joinArray);

  });
})