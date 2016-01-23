var Calculator = {
  handleInput: function(key) {
    $('#preview').append(key);
  },
  previewContent: function() {
    return $('#preview').html();
  },
  deleteLastChar: function() {
    var preview = Calculator.previewContent();
    var newPreview = preview.slice(0, -1);
    $('#preview').html(newPreview);
  },
  keyIsOperator: function(key) {
    return (["+", "-", "X", "/"].indexOf(key) != -1);
  },
  handleZero: function() {
    if(Calculator.previewContent() != "0") {
      Calculator.handleInput("0");
    }
  },
  handleOperator: function(key) {
    // Successive operators
    var lastChar = Calculator.previewContent().slice(-1);
    if(Calculator.keyIsOperator(lastChar)) {
      Calculator.deleteLastChar();
    }
    if((Calculator.previewContent() != "") || (key == "-")) {
      Calculator.handleInput(key);
    }
  },
  handleGenericInput: function(key) {
    if(key == "0") {
      Calculator.handleZero();
    } else if (key == "DEL") {
      Calculator.deleteLastChar();
    } else if (Calculator.keyIsOperator(key)) {
      Calculator.handleOperator(key);
    } else {
      Calculator.handleInput(key);
    }
  },
  init: function() {
    $('.key').click(function() {
      var key = $(this).html();
      Calculator.handleGenericInput(key);
    });
  }
};

$(document).ready(function() {
  Calculator.init();
});
