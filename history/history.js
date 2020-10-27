var content = document.getElementsByClassName("contentOfTimeline");
var containers = document.getElementsByClassName("container");

document.addEventListener("DOMContentLoaded", function () {
    for (var i = 0; i <= content.length; i++) {
      if (window.pageYOffset + (window.innerHeight/1.2) > containers[i].offsetTop){
        content[i].style.visibility = "visible";
        containers[i].style.animationPlayState = "running";

    }
  }
});

window.onscroll = function () {
    for (var i = 0; i <= content.length; i++) {
      if (window.pageYOffset + (window.innerHeight/1.2) > containers[i].offsetTop){
        content[i].style.visibility = "visible";
        containers[i].style.animationPlayState = "running";

    }
  }
};
