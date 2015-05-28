|||challenge
Go ahead and code up the following statement for the `stepTaken()` event handler.

- If energy is less than 10 **OR** score is less than 20, show message "Looking weak".
- Otherwise, show the message "Nothing to report".

Test this out so that you can see both messages, then press the button below.

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
