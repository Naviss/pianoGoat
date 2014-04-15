  var goat = new Array();
  goat[1] = new Audio('sound/goat1.wav');
  goat[2] = new Audio('sound/goat2_A.wav');
  goat[3] = new Audio('sound/goat2_B.wav');
  goat[4] = new Audio('sound/goat2_C.wav');
  goat[5] = new Audio('sound/goat2_D.wav');
  goat[6] = new Audio('sound/goat2_E.wav');
  goat[7] = new Audio('sound/goat2_F.wav');
  goat[8] = new Audio('sound/goat2_G.wav');
  goat[9] = new Audio('sound/goat2.wav');
  goat[10] = new Audio('sound/goat10.wav');
  
  var key = new Array();
  key[49]=1;
  key[50]=2;
  key[51]=3;
  key[52]=4;
  key[53]=5;
  key[54]=6;
  key[55]=7;
  key[56]=8;
  key[57]=9;
  key[48]=10;

(function($){
  $(document).keydown(function(e){
    if(e.keyCode >= 48 && e.keyCode <= 57)
      playGoatNumber(key[ e.keyCode]);
    else
      playAllGoat();
  });
  
  $(document).keyup(function(e){
   if(e.keyCode >= 48 && e.keyCode <= 57)
      stopGoatNumber(key[ e.keyCode]);
    else
      stopAllGoat()
  });
})(jQuery);

function playGoatNumber(i){
   goat[i].play();
    if(i != 10){
   document.getElementById("goat"+i).src = "images/comicGoatclose.png";
   document.getElementById("key"+i).src = "images/key"+i+"Pressed.png";
    } else {
      document.getElementById("goat10").src = "images/comicGoatclose.png";
      document.getElementById("key0").src = "images/key0Pressed.png";
    }
}

function playAllGoat(){
  for(var i=1; i <= 10; i++){
    playGoatNumber(i);
  }
}

function stopGoatNumber(i){
  goat[i].pause();
  goat[i].currentTime = 0;
  if(i != 10){
    document.getElementById("goat"+i).src = "images/comicGoat.png";
    document.getElementById("key"+i).src = "images/key"+i+".png";
  } else {
    document.getElementById("goat10").src = "images/comicGoat.png";
    document.getElementById("key0").src = "images/key0.png";
  }
}

function stopAllGoat(){
  for(var i=1; i <= 10; i++){
    stopGoatNumber(i);
  }
}
