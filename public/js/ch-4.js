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

