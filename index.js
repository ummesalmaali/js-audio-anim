for(var i = 0; i < 3; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", function() {
    var text = this.innerHTML;
    console.log(text);

    audioPlay(text)
    playAnimation(text)
    }
    )}

    document.addEventListener("keypress", function(event){
        var press = event.key;
        audioPlay(press);
        playAnimation(press);
    })



   function audioPlay(text){
    switch(text){
        case "a":
            var audio = new Audio("sounds/last_estate.m4a");
            audio.play();
            break;
        case "b":
            var audio = new Audio("sounds/Mustang.m4a");
            audio.play();
            break;
        case "c":
            var audio = new Audio("sounds/Script S.m4a");
            audio.play();
            break;
    }
   }

   function playAnimation(text){
    var selectedButton = document.querySelector("."+text);
    selectedButton.classList.add("anim");


    setTimeout(function(){
        selectedButton.classList.remove("anim");
    },1000)
   }