var rpm;
var context = new AudioContext, oscillator;

var setTone = function (val) {

  var multiplier = 13;  
  
	if (oscillator) {
    oscillator.stop();
  }
  
  oscillator = context.createOscillator();
  oscillator.frequency.value = val * multiplier
	oscillator.connect(context.destination);
  oscillator.start(0);

};




function stop_blow(){
    window.location.replace("index.html")
}
function min(){
  setTone(10);
}function medium(){
  setTone(30)
}function max(){
  setTone(50);
}