var bufferInterval = 0
setInterval( function(e){
  if (player) {
    var playerBuffer = player.core.activeContainer.getPlugin('stats').rebufferingTime;
    if (playerBuffer - bufferInterval > 5000){
      player.play();
      bufferInterval = playerBuffer;
    }
  }
}, 1000)