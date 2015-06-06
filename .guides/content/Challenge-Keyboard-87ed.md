|||challenge
We want you to implement a special keyboard handler but only if a boolean variable called `allowOtherKeys` is set to be `true`.

We've provided you some code already. You need to 

- Create the boolean variable 
- Insert an `if` statement that checks whether it is true
- If it is true, then the keyboard handler should run so the 'A' moves the player left, 'D' moves right, 'W' up and 'X' down. You should insert the correct keyboard characters as upper case letters.

You will end up with an `if` within another `if` (a nested `if` statement).

Indent your code neatly so the nested if is indented. You can do this quickly by highlighting multiple lines of code and then pressing the TAB key to indent or Shift+TAB to outdent.

|||


|||guidance
## Solution
```javascript
function keyPressedEvent(keyCode) {

  allowOtherKeys = true
  
  if ( allowOtherKeys ) {
    if ( keyCode == 'A' ) {
      player.moveLeft()
    } 
    if ( keyCode == 'D' ) {
      player.moveRight()
    } 
    if ( keyCode == 'W' ) {
      player.moveUp()
    } 
    if ( keyCode == 'X' ) {
      player.moveDown()
    } 
  }
   
}
```
|||