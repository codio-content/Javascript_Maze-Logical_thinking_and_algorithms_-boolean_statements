
var fs = require('fs');

keyPressedEvent  = null;
global.allowOtherKeys = true;
global.player = {};

try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/ch-3.js', 'utf8');
  eval(data);
      
  var _left = false;
  var _right = false;
  var _up = false;
  var _down = false;
  
  global.allowOtherKeys = true;
  
  if(typeof keyPressedEvent  == 'function') {

    Object.defineProperty(global, "allowOtherKeys", { 
      set: function (val) { },
      get: function () { return true } 
    });
    
    
    player.moveLeft = function () {
      _left = true;
    }

    keyPressedEvent('A');


    player.moveRight = function () {
      _right = true;
    }

    keyPressedEvent('D');


    player.moveUp = function () {
      _up = true;
    }

    keyPressedEvent('W');


    player.moveDown = function () {
      _down = true;
    }

    keyPressedEvent('S');
        
    
    if(!_left || !_right || !_up || !_down) {
      process.stdout.write('Not quite right, try again!');  
      process.exit(1);
    }
    
    _left = false;
    _right = false;
    _up = false;
    _down = false;
        
    Object.defineProperty(global, "allowOtherKeys", { 
      set: function (val) { },
      get: function () { return false } 
    });
    
    keyPressedEvent('A');
    keyPressedEvent('D');
    keyPressedEvent('W');
    keyPressedEvent('S');


    if(_left || _right || _up || _down) {
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
//  console.log(e); 
}

process.stdout.write('Not quite right, try again!');  
process.exit(1);
