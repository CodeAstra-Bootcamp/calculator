function handleInput(key) {
  $('#preview').append(key);
}

function previewContent() {
  return $('#preview').html();
}

$(document).ready(function() {
  $('.key').click(function() {
    var key = $(this).text();
    if(key == "0") {
      if(previewContent() != "0") {
        handleInput(key);
      }
    } else if (key == "DEL") {
      var preview = previewContent();
      var newPreview = preview.slice(0, -1);
      $('#preview').html(newPreview);
    } else {
      handleInput(key);
    }
  });
});
