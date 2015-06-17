|||challenge
The code on the left stops the down arrow key from working unless the user first presses the A key. However, it does not yet work!

Write some code within the first `if` statement that changes the value of the `allowDown` boolean variable if the 'A' key is pressed so that the down arrow key then works.

You get extra marks if pressing it again stops `if` from working. Each time you press the A it 'toggles' between the arrow working and not working.

**Hint** you can change the value of a boolean to `false` when `true` or `true` when `false` using `boolVar = !boolVar`.

{check it!!|custom}(ch-4)

|||

|||guidance
# Solution 1
```javascript
function keyPressedEvent(keyCode) {

  if (keyCode == 'A') {
    if (allowDown) {
      allowDown = false
    }
    else {
      allowDown = true
    }
  }
  
  if( allowDown && keyCode == 'DOWN') {
    player.moveDown()
  }
   
}
```

# Best Solution
```javascript
function keyPressedEvent(keyCode) {

  if (keyCode == 'A') {
    allowDown = !allowDown
  }
  
  if( allowDown && keyCode == 'DOWN') {
    player.moveDown()
  }
   
}
```


|||
