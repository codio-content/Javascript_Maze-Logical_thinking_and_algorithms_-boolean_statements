
{Check It!|assessment}(test-2006406433)

|||guidance
## Solution

```javascript
function keyPressedEvent(keyCode) {

  if ( keyCode == 'LEFT' || keyCode == 'RIGHT') {
    showMessage('Horizontal')
  } 
  else if ( keyCode == 'UP' || keyCode == 'DOWN') {
    showMessage('Vertical')
  } 
  else {
    showMessage('Another key was pressed')
  }
  
}
```
|||
