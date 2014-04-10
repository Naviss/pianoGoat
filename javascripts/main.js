(function($){
  
  var goat1 = new Audio('sound/goat1.wav');
  
  
  $(document).keydown(function(e){
    switch(e.keyCode){
      case 49:
          goat1.play();      
        break;
      case 50:
//          goat2.play();
        break;
      case 51:
//          goat3.play();  
        break;
      case 52:
//          goat4.play();  
        break;
      case 53:
//          goat5.play();  
        break;
      case 54:
//          goat6.play();
        break;
      case 55:
//          goat7.play();
        break;
      case 56:
//          goat8.play();
        break;
      case 57:
//          goat9.play();
        break;
      case 48:
//          goat10.play();
        break;
      default:
//          goat1.play();
        break;
    }
  });
  
})(jQuery);


// 48 = 0
// 49 = 1
// 57 = 9