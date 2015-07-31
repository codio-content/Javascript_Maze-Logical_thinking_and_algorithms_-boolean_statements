
var fs = require('fs');

keyPressedEvent  = null;

try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/ch-2.js', 'utf8');
  eval(data);
    
  var _left = false;
  var _right = false;
  var _up = false;
  var _down = false;
  var _another = false;
  
  if(typeof keyPressedEvent  == 'function') {
    
    global.showMessage = function (val) {
      if(val.toLowerCase() == 'horizontal') _left = true;
    }

    keyPressedEvent('LEFT');


    global.showMessage = function (val) {
      if(val.toLowerCase() == 'horizontal') _right = true;
    }

    keyPressedEvent('RIGHT');
    

    global.showMessage = function (val) {
      if(val.toLowerCase() == 'vertical') _up = true;
    }

    keyPressedEvent('UP');

    
    global.showMessage = function (val) {
      if(val.toLowerCase() == 'vertical') _down = true;
    }

    keyPressedEvent('DOWN');


    global.showMessage = function (val) {
      if(val.toLowerCase() == 'another key was pressed') _another = true;
    }

    keyPressedEvent('C');

    
    if(!_left || !_right || !_up || !_down || !_another) {
      process.stdout.write('Not quite right, try again!');  
      process.exit(1);
    }
  }
  else {
    process.stdout.write('Not quite right, try again!');  
    process.exit(1);
  }
  
  process.stdout.write('Well done!');  
  process.exit(0);

}
catch(e) {
  
}

process.stdout.write('Not quite right, try again!');  
process.exit(1);
