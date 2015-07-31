
{Check It!|assessment}(test-1118605564)

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
