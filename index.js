for(var i=0 ;i < document.querySelectorAll(".drum").length;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var letter = this.innerHTML;

    keyswitch(letter);

    buttonAnimated(letter);

});
}

document.addEventListener("keypress",function(event){

    keyswitch(event.key);

    buttonAnimated(event.key);

});


 function keyswitch(ke){

   switch (ke) {
     case "w":
         var audio = new Audio("sound/tom-1.mp3");
         audio.play();
       break;

    case "a":
      var audio = new Audio("sound/tom-2.mp3");
      audio.play();
    break;
    case "s":
          var audio = new Audio("sound/tom-3.mp3");
          audio.play();
       break;
    case "d":
          var audio = new Audio("sound/tom-4.mp3");
          audio.play()
        break;
    case "j":
              var audio = new Audio("sound/snare.mp3");
              audio.play();
          break;
    case "k":
              var audio = new Audio("sound/crash.mp3");
              audio.play();
          break;
    case "l":
                var audio = new Audio("sound/kick-bass.mp3");
                audio.play();
          break;
     default:
       console.log(ke);
   }
 }
function buttonAnimated(currentKey){
  var activeButton = document.querySelector("."+currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
