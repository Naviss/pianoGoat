(function($){
  
  var goat1 = new Audio('sound/goat1.wav');
  var goat2 = new Audio('sound/goat2.wav');
  var goat3 = new Audio('sound/goat3.wav');
  var goat4 = new Audio('sound/goat4.wav');
  var goat5 = new Audio('sound/goat5.wav');
  var goat6 = new Audio('sound/goat6.wav');
  var goat7 = new Audio('sound/goat7.wav');
  var goat8 = new Audio('sound/goat8.wav');
  var goat9 = new Audio('sound/goat9.wav');
  var goat10 = new Audio('sound/goat10.wav');
  
  $(document).keydown(function(e){
    goat1.pause();
     goat1.currentTime = 0;
    goat2.pause();
    goat2.currentTime = 0;
    goat3.pause();
    goat3.currentTime = 0;
    goat4.pause();
    goat4.currentTime = 0;
    goat5.pause();
    goat5.currentTime = 0;
    goat6.pause();
    goat6.currentTime = 0;
    goat7.pause();
    goat7.currentTime = 0;
    goat8.pause();
    goat8.currentTime = 0;
    goat9.pause();
    goat9.currentTime = 0;
    goat10.pause();
    goat10.currentTime = 0;
    switch(e.keyCode){
      case 49:
        goat1.play();   
        document.getElementById("goat1").src = "images/comicGoatclose.png";
        document.getElementById("key1").src = "images/key1Pressed.png";
        break;
      case 50:
        goat2.play();
        document.getElementById("goat2").src = "images/comicGoatclose.png";
        document.getElementById("key2").src = "images/key2Pressed.png";
        break;
      case 51:
        goat3.play();  
        document.getElementById("goat3").src = "images/comicGoatclose.png";
        document.getElementById("key3").src = "images/key3Pressed.png";
        break;
      case 52:
        goat4.play();  
        document.getElementById("goat4").src = "images/comicGoatclose.png";
        document.getElementById("key4").src = "images/key4Pressed.png";
        break;
      case 53:
        goat5.play();
        document.getElementById("goat5").src = "images/comicGoatclose.png";
        document.getElementById("key5").src = "images/key5Pressed.png";
        break;
      case 54:
        goat6.play();
        document.getElementById("goat6").src = "images/comicGoatclose.png";
        document.getElementById("key6").src = "images/key6Pressed.png";
        break;
      case 55:
        goat7.play();
        document.getElementById("goat7").src = "images/comicGoatclose.png";
        document.getElementById("key7").src = "images/key7Pressed.png";
        break;
      case 56:
        goat8.play();
        document.getElementById("goat8").src = "images/comicGoatclose.png";
        document.getElementById("key8").src = "images/key8Pressed.png";
        break;
      case 57:
        goat9.play();
        document.getElementById("goat9").src = "images/comicGoatclose.png";
        document.getElementById("key9").src = "images/key9Pressed.png";
        break;
      case 48:
        goat10.play();
        document.getElementById("goat10").src = "images/comicGoatclose.png";
        document.getElementById("key0").src = "images/key0Pressed.png";
        break;
      default:
        goat1.play();
        goat2.play();
        goat3.play();
        goat4.play();
        goat5.play();
        goat6.play();
        goat7.play();
        goat8.play();
        goat9.play();
        goat10.play();
        document.getElementById("goat1").src = "images/comicGoatclose.png";
        document.getElementById("goat2").src = "images/comicGoatclose.png";
        document.getElementById("goat3").src = "images/comicGoatclose.png";
        document.getElementById("goat4").src = "images/comicGoatclose.png";
        document.getElementById("goat5").src = "images/comicGoatclose.png";
        document.getElementById("goat6").src = "images/comicGoatclose.png";
        document.getElementById("goat7").src = "images/comicGoatclose.png";
        document.getElementById("goat8").src = "images/comicGoatclose.png";
        document.getElementById("goat9").src = "images/comicGoatclose.png";
        document.getElementById("goat10").src = "images/comicGoatclose.png";
        document.getElementById("key1").src = "images/key1Pressed.png";
        document.getElementById("key2").src = "images/key2Pressed.png";
        document.getElementById("key3").src = "images/key3Pressed.png";
        document.getElementById("key4").src = "images/key4Pressed.png";
        document.getElementById("key5").src = "images/key5Pressed.png";
        document.getElementById("key6").src = "images/key6Pressed.png";
        document.getElementById("key7").src = "images/key7Pressed.png";
        document.getElementById("key8").src = "images/key8Pressed.png";
        document.getElementById("key9").src = "images/key9Pressed.png";
        document.getElementById("key0").src = "images/key0Pressed.png";
        break;
    }
  });
  
  $(document).keyup(function(e){
    switch(e.keyCode){
      case 49:
        document.getElementById("goat1").src = "images/comicGoat.png";
        document.getElementById("key1").src = "images/key1.png";
        break;
      case 50:
        document.getElementById("goat2").src = "images/comicGoat.png";
        document.getElementById("key2").src = "images/key2.png";
        break;
      case 51:
        document.getElementById("goat3").src = "images/comicGoat.png";
        document.getElementById("key3").src = "images/key3.png";
        break;
      case 52:
        document.getElementById("goat4").src = "images/comicGoat.png";
        document.getElementById("key4").src = "images/key4.png";
        break;
      case 53: 
        document.getElementById("goat5").src = "images/comicGoat.png";
        document.getElementById("key5").src = "images/key5.png";
        break;
      case 54:
        document.getElementById("goat6").src = "images/comicGoat.png";
        document.getElementById("key6").src = "images/key6.png";
        break;
      case 55:
        document.getElementById("goat7").src = "images/comicGoat.png";
        document.getElementById("key7").src = "images/key7.png";
        break;
      case 56:
        document.getElementById("goat8").src = "images/comicGoat.png";
        document.getElementById("key8").src = "images/key8.png";
        break;
      case 57:
        document.getElementById("goat9").src = "images/comicGoat.png";
        document.getElementById("key9").src = "images/key9.png";
        break;
      case 48:
        document.getElementById("goat10").src = "images/comicGoat.png";
        document.getElementById("key0").src = "images/key0.png";
        break;
      default:
        document.getElementById("goat1").src = "images/comicGoat.png";
        document.getElementById("goat2").src = "images/comicGoat.png";
        document.getElementById("goat3").src = "images/comicGoat.png";
        document.getElementById("goat4").src = "images/comicGoat.png";
        document.getElementById("goat5").src = "images/comicGoat.png";
        document.getElementById("goat6").src = "images/comicGoat.png";
        document.getElementById("goat7").src = "images/comicGoat.png";
        document.getElementById("goat8").src = "images/comicGoat.png";
        document.getElementById("goat9").src = "images/comicGoat.png";
        document.getElementById("goat10").src = "images/comicGoat.png";
        document.getElementById("key1").src = "images/key1.png";
        document.getElementById("key2").src = "images/key2.png";
        document.getElementById("key3").src = "images/key3.png";
        document.getElementById("key4").src = "images/key4.png";
        document.getElementById("key5").src = "images/key5.png";
        document.getElementById("key6").src = "images/key6.png";
        document.getElementById("key7").src = "images/key7.png";
        document.getElementById("key8").src = "images/key8.png";
        document.getElementById("key9").src = "images/key9.png";
        document.getElementById("key0").src = "images/key0.png";
        
        break;
    }
  });
  
  
  
})(jQuery);