|||challenge
Go ahead and code up the following statement for the `turnTaken()` event handler using `if/ else if /else` statements.

- If energy is less than 10 **AND** steps taken is greater than or equal to 10, show message "Not going well".
- Otherwise, show the message "Going OK".


Test this out so you get both messages. You will need to bump into energy and monsters. When you're done, press the button below.

{check it!!}(test-and)

|||

|||guidance
## Solution

```javascript
function turnTaken() {

  if ( energy < 10 && steps >= 10 ) {
    showMessage('Not going well')
  } 
  else {
    showMessage('Going OK')
  }
 
}
```
|||