$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const inputSent = $("input#sentence").val();
    const words = inputSent.split(" ");
    let newArray = [];

    words.forEach(function(element) {
      if (element.length >= 3) {
        newArray.push(element);
      }
    });
    newArray.reverse();


    $("#result").text(newArray);

  });
})