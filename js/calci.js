function handleInput(key) {
  $('#preview').append(key);
}

function previewContent() {
  return $('#preview').html();
}

function deleteLastChar() {
  var preview = previewContent();
  var newPreview = preview.slice(0, -1);
  $('#preview').html(newPreview);
}

function keyIsOperator(key) {
  return (["+", "-", "X", "/"].indexOf(key) != -1);
}

$(document).ready(function() {
  $('.key').click(function() {
    var key = $(this).html();
    if(key == "0") {
      if(previewContent() != "0") {
        handleInput(key);
      }
    } else if (key == "DEL") {
      deleteLastChar();
    } else if (keyIsOperator(key)) {
      // Successive operators
      var lastChar = previewContent().slice(-1);
      if(keyIsOperator(lastChar)) {
        deleteLastChar();
      }
      if((previewContent() != "") || (key == "-")) {
        handleInput(key);
      }
    } else {
      handleInput(key);
    }
  });
});
