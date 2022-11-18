window.onload = function () {
    var index=0;
    var lapMinutes = [];
    var lapSeconds = [];
    var lapTens = [];
    let minutes = 00;
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var appendMinutes = document.getElementById("minutes")
    var appendLaps = document.getElementById('lap-container')
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var buttonLap = document.getElementById('button-lap')
    var Interval ;
    appendLaps.style.display = "none"
  
    
    buttonStart.onclick = function() {
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
      hasStarted = document.getElementById('hasStarted');
      console.log(hasStarted.checked)
      hasStarted.checked = false;
      console.log(hasStarted.checked)
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
    
    buttonLap.onclick = function() {
      appendLaps.style.display = "flex";
      let lapContainer = document.createElement('p');
      lapContainer.classList.add("lap");
      document.getElementById('lap-container').append(lapContainer);
      
      if (hasStarted.checked == false) {
        var lapRemove = document.getElementsByClassName('lapRemove');
      for (let item of lapRemove) {
        item.style.cssText = "display:none";
      }
        lapTens.push(tens);
        lapSeconds.push(seconds);
        lapMinutes.push(minutes)
        lapContainer.innerHTML = `Lap ${index+1}: ${lapMinutes[index]}:${lapSeconds[index]}:${lapTens[index]}`
        index++;
      }
      else {
        lapContainer.classList.add('lapRemove');
        lapContainer.innerHTML = "Start the timer first. Press Start";
      }
    }
  
    
    buttonReset.onclick = function() {
      clearInterval(Interval);
      tens = "00";
      seconds = "00";
      minutes ="00"
      appendTens.innerHTML = tens;
      appendSeconds.innerHTML = seconds;
      appendMinutes.innerHTML = minutes;
      var lapItem = document.getElementsByClassName('lap')
      for (let item of lapItem) {
        item.style.cssText = "display:none";
      }
      appendLaps.style.display = "none";
      index=0;
      hasStarted.checked = true;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9 && seconds < 60){
        appendSeconds.innerHTML = seconds;
      }
      
      if (seconds >= 60) {
        minutes++;
        appendMinutes.innerHTML = "0"+ minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0"+seconds;
      }
    
    }
    
  
  }