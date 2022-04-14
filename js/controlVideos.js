

// Loop
var vid = document.getElementById("robot1");
    vid.playbackRate = 0.5;


// Scroll rad control
var video = $('#robot_scroll').get(0);
var increments = 0.1; //steps two seconds for each scroll event
var videoReady = true;
var continueUpdatingVideo = true;

$(document).ready(function(){
  $('#robot_scroll').bind('DOMMouseScroll mousewheel', function(e){
      e.preventDefault();

        if(e.originalEvent.wheelDelta > 0) {var delta = +0.5;}
        else if(e.originalEvent.wheelDelta < 0){var delta = -0.5}
        else{var delta = 0}
        updateVideo(delta * increments);
      
      return false;
  });
});

function updateVideo(delta) {
  var videoLength = video.duration;
  var videoPosition = video.currentTime + delta
if (videoPosition < 0){videoPosition = videoLength}
else if (videoPosition > 5){videoPosition = 0}
   //var videoPosition = (video.currentTime + delta > videoLength) ? videoLength : ((video.currentTime + delta < 0) ? 0 : video.currentTime + delta);
  video.currentTime = videoPosition;
  console.log(videoPosition)
}
