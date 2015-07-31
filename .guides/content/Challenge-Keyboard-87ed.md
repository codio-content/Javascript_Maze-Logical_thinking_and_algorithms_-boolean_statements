
{Check It!|assessment}(test-2526065879)

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
    if ( keyCode == 'S' ) {
      player.moveDown()
    } 
  }
   
}
```
|||