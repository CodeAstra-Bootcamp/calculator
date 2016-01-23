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
  evaluateResult: function() {
    var result = eval(Calculator.previewContent().replace('X', '*'));
    $('#preview').html(result);
    $('#result').html(result);
  },
  clear: function() {
    $('#preview').html("");
    $('#result').html("");
  },
  handleDot: function() {
    var patternForLatestNum =  /[^\+\-X\/]*$/;
    var latestNumber = Calculator.previewContent().match(patternForLatestNum)[0];
    if (latestNumber.indexOf(".") == -1) {
      Calculator.handleInput(".");
    }
  },
  handleGenericInput: function(key) {
    if(key == "0") {
      Calculator.handleZero();
    } else if (key == "DEL") {
      Calculator.deleteLastChar();
    } else if (Calculator.keyIsOperator(key)) {
      Calculator.handleOperator(key);
    } else if (key == "=") {
      Calculator.evaluateResult();
    }
    else if (key ==".") {
      Calculator.handleDot();
    }
    else {
      Calculator.handleInput(key);
    }
  },
  bindKeys: function() {
    $(document).bind('keyup', '0', function() {Calculator.handleZero()});
    $(document).bind('keyup', '1', function() {Calculator.handleInput("1")});
    $(document).bind('keyup', '2', function() {Calculator.handleInput("2")});
    $(document).bind('keyup', '3', function() {Calculator.handleInput("3")});
    $(document).bind('keyup', '4', function() {Calculator.handleInput("4")});
    $(document).bind('keyup', '5', function() {Calculator.handleInput("5")});
    $(document).bind('keyup', '6', function() {Calculator.handleInput("6")});
    $(document).bind('keyup', '7', function() {Calculator.handleInput("7")});
    $(document).bind('keyup', '8', function() {Calculator.handleInput("8")});
    $(document).bind('keyup', '9', function() {Calculator.handleInput("9")});
    $(document).bind('keyup', '.', function() {Calculator.handleDot()});
    $(document).bind('keyup', 'return', function() {Calculator.evaluateResult()});
    $(document).bind('keyup', 'backspace', function() {Calculator.deleteLastChar()});
    $(document).bind('keyup', 'del', function() {Calculator.deleteLastChar()});
    $(document).bind('keyup', 'esc', function() {Calculator.clear()});
    $(document).bind('keyup', '+', function() {Calculator.handleOperator("+")});
    $(document).bind('keyup', '-', function() {Calculator.handleOperator("-")});
    $(document).bind('keyup', '*', function() {Calculator.handleOperator("*")});
    $(document).bind('keyup', 'x', function() {Calculator.handleOperator("*")});
    $(document).bind('keyup', '/', function() {Calculator.handleOperator("/")});
  },
  init: function() {
    $('.key').click(function() {
      var key = $(this).html();
      Calculator.handleGenericInput(key);
    });
    $('.delete').dblclick(function() {
      Calculator.clear();
    });
    Calculator.bindKeys();
  }
};

$(document).ready(function() {
  Calculator.init();
});
