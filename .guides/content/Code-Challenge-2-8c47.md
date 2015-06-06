|||challenge
Write some code for the given `keyPressedEvent()` handler that 

- shows the message 'Horizontal' if either the left or right key is pressed.
- shows the message 'Vertical' if either the up or down key is pressed.
- show the message "Another key was pressed" if any other key is pressed.

Test this out so that you can see all 3 messages, then press the button below.

{check it!!}(test-and)

|||

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
