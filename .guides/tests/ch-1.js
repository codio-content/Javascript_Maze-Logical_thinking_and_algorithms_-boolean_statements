
var fs = require('fs');

turnTaken = null;

try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/ch-1.js', 'utf8');
  eval(data);
      
  var _well = false;
  var _ok = false;
  
  if(typeof turnTaken == 'function') {
    energy = 9;
    steps = 10;
    
    global.showMessage = function (val) {
      if(val.toLowerCase() == 'not going well') _well = true;
    }

    turnTaken();

    energy = 10;
    steps = 10;

    global.showMessage = function (val) {
      if(val.toLowerCase() == 'going ok') _ok = true;
    }
    
    turnTaken();
    
    if(!_well || !_ok) {
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
