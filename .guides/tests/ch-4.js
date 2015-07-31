
var fs = require('fs');

keyPressedEvent  = null;
global.allowDown = false;
global.player = {};

try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/ch-4.js', 'utf8');
  eval(data);
    
  var _down = false;
  
  if(typeof keyPressedEvent  == 'function') {

    player.moveDown = function () {
      _down = true;
    }

    keyPressedEvent('DOWN');
        
    if(_down) {
      process.stdout.write('Not quite right, try again!');  
      process.exit(1);
    }
    
    _down = false;
    allowDown = false;

    keyPressedEvent('A');
    keyPressedEvent('DOWN');

    if(!allowDown || !_down) {
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
