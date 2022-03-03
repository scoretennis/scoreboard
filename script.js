function p1_nametx() {
    var x = document.getElementById("p1").value;
    document.getElementById("p1_textname").innerHTML = x;
  }

function p2_nametx() {
    var x = document.getElementById("p2").value;
    document.getElementById("p2_textname").innerHTML = x;
  }

function show_s1() {
    var x = document.getElementById("set1_p1");
    var y = document.getElementById("set1_p2")
    if (x.classList.contains("hide")) {
      x.classList.remove("hide");
    } 
    if (y.classList.contains("hide")) {
      y.classList.remove("hide");
    }
    else {
      x.classList.add("hide");
      y.classList.add("hide")
    }
  }

function show_s2() {
    var x = document.getElementById("set2_p1");
    var y = document.getElementById("set2_p2")
    if (x.classList.contains("hide")) {
      x.classList.remove("hide");
    } 
    if (y.classList.contains("hide")) {
      y.classList.remove("hide");
    }
    else {
      x.classList.add("hide");
      y.classList.add("hide")
    }
  }

function show_s3() {
    var x = document.getElementById("set3_p1");
    var y = document.getElementById("set3_p2")
    if (x.classList.contains("hide")) {
      x.classList.remove("hide");
    } 
    if (y.classList.contains("hide")) {
      y.classList.remove("hide");
    }
    else {
      x.classList.add("hide");
      y.classList.add("hide")
    }
  }

function show_s4() {
    var x = document.getElementById("set4_p1");
    var y = document.getElementById("set4_p2")
    if (x.classList.contains("hide")) {
      x.classList.remove("hide");
    } 
    if (y.classList.contains("hide")) {
      y.classList.remove("hide");
    }
    else {
      x.classList.add("hide");
      y.classList.add("hide")
    }
  }

function show_s5() {
    var x = document.getElementById("set5_p1");
    var y = document.getElementById("set5_p2")
    if (x.classList.contains("hide")) {
      x.classList.remove("hide");
    } 
    if (y.classList.contains("hide")) {
      y.classList.remove("hide");
    }
    else {
      x.classList.add("hide");
      y.classList.add("hide")
    }
  }
  
window.addEventListener('load', function() {
  var plusBtn = document.getElementById("p1_plus");
  var minusBtn = document.getElementById("p1_minus");
  var numberPlace = document.getElementById("set1_p1_text");
  var number = 0; /// number value
  var min = 0; /// min number
  var max = 7; /// max number
  plusBtn.onclick = function(e){
    e.preventDefault;
    if(number<max){
       number = number+1;
       numberPlace.innerText = number ; /// Display the value in place of the number
       numberPlace.classList.remove("animate-plus");
       void numberPlace.offsetWidth;
       numberPlace.classList.add("animate-plus");
    } false;
    if(number == max){
      numberPlace.style.color= "red";
      setTimeout(function(){numberPlace.style.color= "white"},500)
    }
    else {
      numberPlace.style.color= "white";
    }
  minusBtn.onclick = function(){
    if (number>min){
      number = number-1; /// Minus 1 of the number
      numberPlace.innerText = number ; /// Display the value in place of the number
     }
    if(number == min) {        
      numberPlace.style.color= "red";
      setTimeout(function(){numberPlace.style.color= "white"},500)
      }
    else {
    numberPlace.style.color="white";            
    }
  }
}});

window.addEventListener('load', function() {
  var plusBtn2 = document.getElementById("p2_plus");
  var minusBtn2 = document.getElementById("p2_minus");
  var numberPlace2 = document.getElementById("set1_p2_text");
  var number2 = 0; /// number value
  var min2 = 0; /// min number
  var max2 = 7; /// max number
  plusBtn2.onclick = function(e){
    e.preventDefault;
    if(number2<max2){
       number2 = number2+1;
       numberPlace2.innerText = number2 ; /// Display the value in place of the number
       numberPlace2.classList.remove("plus");
       void numberPlace2.offsetWidth;
       numberPlace2.classList.add("plus");
    } false;
    if(number2 == max2){
      numberPlace2.style.color= "red";
      setTimeout(function(){numberPlace2.style.color= "white"},500)
    }
    else {
      numberPlace2.style.color= "white";
    }
  minusBtn2.onclick = function(){
    if (number2>min2){
      number2 = number2-1; /// Minus 1 of the number
      numberPlace2.innerText = number2 ; /// Display the value in place of the number
     }
    if(number2 == min2) {        
      numberPlace2.style.color= "red";
      setTimeout(function(){numberPlace2.style.color= "white"},500)
      }
    else {
    numberPlace2.style.color="white";            
    }
  }
}});

window.addEventListener('load', function() {
  var plusBtn = document.getElementById("s2_p1_plus");
  var minusBtn = document.getElementById("s2_p1_minus");
  var numberPlace = document.getElementById("set2_p1_text");
  var number = 0; /// number value
  var min = 0; /// min number
  var max = 7; /// max number
  plusBtn.onclick = function(e){
    e.preventDefault;
    if(number<max){
       number = number+1;
       numberPlace.innerText = number ; /// Display the value in place of the number
       numberPlace.classList.remove("animate-plus");
       void numberPlace.offsetWidth;
       numberPlace.classList.add("animate-plus");
    } false;
    if(number == max){
      numberPlace.style.color= "red";
      setTimeout(function(){numberPlace.style.color= "white"},500)
    }
    else {
      numberPlace.style.color= "white";
    }
  minusBtn.onclick = function(){
    if (number>min){
      number = number-1; /// Minus 1 of the number
      numberPlace.innerText = number ; /// Display the value in place of the number
     }
    if(number == min) {        
      numberPlace.style.color= "red";
      setTimeout(function(){numberPlace.style.color= "white"},500)
      }
    else {
    numberPlace.style.color="white";            
    }
  }
}});

window.addEventListener('load', function() {
  var plusBtn2 = document.getElementById("s2_p2_plus");
  var minusBtn2 = document.getElementById("s2_p2_minus");
  var numberPlace2 = document.getElementById("set2_p2_text");
  var number2 = 0; /// number value
  var min2 = 0; /// min number
  var max2 = 7; /// max number
  plusBtn2.onclick = function(e){
    e.preventDefault;
    if(number2<max2){
       number2 = number2+1;
       numberPlace2.innerText = number2 ; /// Display the value in place of the number
       numberPlace2.classList.remove("plus");
       void numberPlace2.offsetWidth;
       numberPlace2.classList.add("plus");
    } false;
    if(number2 == max2){
      numberPlace2.style.color= "red";
      setTimeout(function(){numberPlace2.style.color= "white"},500)
    }
    else {
      numberPlace2.style.color= "white";
    }
  minusBtn2.onclick = function(){
    if (number2>min2){
      number2 = number2-1; /// Minus 1 of the number
      numberPlace2.innerText = number2 ; /// Display the value in place of the number
     }
    if(number2 == min2) {        
      numberPlace2.style.color= "red";
      setTimeout(function(){numberPlace2.style.color= "white"},500)
      }
    else {
    numberPlace2.style.color="white";            
    }
  }
}});

window.addEventListener('load', function() {
  var plusBtn = document.getElementById("s3_p1_plus");
  var minusBtn = document.getElementById("s3_p1_minus");
  var numberPlace = document.getElementById("set3_p1_text");
  var number = 0; /// number value
  var min = 0; /// min number
  var max = 7; /// max number
  plusBtn.onclick = function(e){
    e.preventDefault;
    if(number<max){
       number = number+1;
       numberPlace.innerText = number ; /// Display the value in place of the number
       numberPlace.classList.remove("animate-plus");
       void numberPlace.offsetWidth;
       numberPlace.classList.add("animate-plus");
    } false;
    if(number == max){
      numberPlace.style.color= "red";
      setTimeout(function(){numberPlace.style.color= "white"},500)
    }
    else {
      numberPlace.style.color= "white";
    }
  minusBtn.onclick = function(){
    if (number>min){
      number = number-1; /// Minus 1 of the number
      numberPlace.innerText = number ; /// Display the value in place of the number
     }
    if(number == min) {        
      numberPlace.style.color= "red";
      setTimeout(function(){numberPlace.style.color= "white"},500)
      }
    else {
    numberPlace.style.color="white";            
    }
  }
}});

window.addEventListener('load', function() {
  var plusBtn2 = document.getElementById("s3_p2_plus");
  var minusBtn2 = document.getElementById("s3_p2_minus");
  var numberPlace2 = document.getElementById("set3_p2_text");
  var number2 = 0; /// number value
  var min2 = 0; /// min number
  var max2 = 7; /// max number
  plusBtn2.onclick = function(e){
    e.preventDefault;
    if(number2<max2){
       number2 = number2+1;
       numberPlace2.innerText = number2 ; /// Display the value in place of the number
       numberPlace2.classList.remove("plus");
       void numberPlace2.offsetWidth;
       numberPlace2.classList.add("plus");
    } false;
    if(number2 == max2){
      numberPlace2.style.color= "red";
      setTimeout(function(){numberPlace2.style.color= "white"},500)
    }
    else {
      numberPlace2.style.color= "white";
    }
  minusBtn2.onclick = function(){
    if (number2>min2){
      number2 = number2-1; /// Minus 1 of the number
      numberPlace2.innerText = number2 ; /// Display the value in place of the number
     }
    if(number2 == min2) {        
      numberPlace2.style.color= "red";
      setTimeout(function(){numberPlace2.style.color= "white"},500)
      }
    else {
    numberPlace2.style.color="white";            
    }
  }
}});

window.addEventListener('load', function() {
  var plusBtn = document.getElementById("s4_p1_plus");
  var minusBtn = document.getElementById("s4_p1_minus");
  var numberPlace = document.getElementById("set4_p1_text");
  var number = 0; /// number value
  var min = 0; /// min number
  var max = 7; /// max number
  plusBtn.onclick = function(e){
    e.preventDefault;
    if(number<max){
       number = number+1;
       numberPlace.innerText = number ; /// Display the value in place of the number
       numberPlace.classList.remove("animate-plus");
       void numberPlace.offsetWidth;
       numberPlace.classList.add("animate-plus");
    } false;
    if(number == max){
      numberPlace.style.color= "red";
      setTimeout(function(){numberPlace.style.color= "white"},500)
    }
    else {
      numberPlace.style.color= "white";
    }
  minusBtn.onclick = function(){
    if (number>min){
      number = number-1; /// Minus 1 of the number
      numberPlace.innerText = number ; /// Display the value in place of the number
     }
    if(number == min) {        
      numberPlace.style.color= "red";
      setTimeout(function(){numberPlace.style.color= "white"},500)
      }
    else {
    numberPlace.style.color="white";            
    }
  }
}});

window.addEventListener('load', function() {
  var plusBtn2 = document.getElementById("s4_p2_plus");
  var minusBtn2 = document.getElementById("s4_p2_minus");
  var numberPlace2 = document.getElementById("set4_p2_text");
  var number2 = 0; /// number value
  var min2 = 0; /// min number
  var max2 = 7; /// max number
  plusBtn2.onclick = function(e){
    e.preventDefault;
    if(number2<max2){
       number2 = number2+1;
       numberPlace2.innerText = number2 ; /// Display the value in place of the number
       numberPlace2.classList.remove("plus");
       void numberPlace2.offsetWidth;
       numberPlace2.classList.add("plus");
    } false;
    if(number2 == max2){
      numberPlace2.style.color= "red";
      setTimeout(function(){numberPlace2.style.color= "white"},500)
    }
    else {
      numberPlace2.style.color= "white";
    }
  minusBtn2.onclick = function(){
    if (number2>min2){
      number2 = number2-1; /// Minus 1 of the number
      numberPlace2.innerText = number2 ; /// Display the value in place of the number
     }
    if(number2 == min2) {        
      numberPlace2.style.color= "red";
      setTimeout(function(){numberPlace2.style.color= "white"},500)
      }
    else {
    numberPlace2.style.color="white";            
    }
  }
}});

window.addEventListener('load', function() {
  var plusBtn = document.getElementById("s4_p1_plus");
  var minusBtn = document.getElementById("s4_p1_minus");
  var numberPlace = document.getElementById("set4_p1_text");
  var number = 0; /// number value
  var min = 0; /// min number
  var max = 7; /// max number
  plusBtn.onclick = function(e){
    e.preventDefault;
    if(number<max){
       number = number+1;
       numberPlace.innerText = number ; /// Display the value in place of the number
       numberPlace.classList.remove("animate-plus");
       void numberPlace.offsetWidth;
       numberPlace.classList.add("animate-plus");
    } false;
    if(number == max){
      numberPlace.style.color= "red";
      setTimeout(function(){numberPlace.style.color= "white"},500)
    }
    else {
      numberPlace.style.color= "white";
    }
  minusBtn.onclick = function(){
    if (number>min){
      number = number-1; /// Minus 1 of the number
      numberPlace.innerText = number ; /// Display the value in place of the number
     }
    if(number == min) {        
      numberPlace.style.color= "red";
      setTimeout(function(){numberPlace.style.color= "white"},500)
      }
    else {
    numberPlace.style.color="white";            
    }
  }
}});

window.addEventListener('load', function() {
  var plusBtn2 = document.getElementById("s4_p2_plus");
  var minusBtn2 = document.getElementById("s4_p2_minus");
  var numberPlace2 = document.getElementById("set4_p2_text");
  var number2 = 0; /// number value
  var min2 = 0; /// min number
  var max2 = 7; /// max number
  plusBtn2.onclick = function(e){
    e.preventDefault;
    if(number2<max2){
       number2 = number2+1;
       numberPlace2.innerText = number2 ; /// Display the value in place of the number
       numberPlace2.classList.remove("plus");
       void numberPlace2.offsetWidth;
       numberPlace2.classList.add("plus");
    } false;
    if(number2 == max2){
      numberPlace2.style.color= "red";
      setTimeout(function(){numberPlace2.style.color= "white"},500)
    }
    else {
      numberPlace2.style.color= "white";
    }
  minusBtn2.onclick = function(){
    if (number2>min2){
      number2 = number2-1; /// Minus 1 of the number
      numberPlace2.innerText = number2 ; /// Display the value in place of the number
     }
    if(number2 == min2) {        
      numberPlace2.style.color= "red";
      setTimeout(function(){numberPlace2.style.color= "white"},500)
      }
    else {
    numberPlace2.style.color="white";            
    }
  }
}});

window.addEventListener('load', function() {
  var plusBtn = document.getElementById("s5_p1_plus");
  var minusBtn = document.getElementById("s5_p1_minus");
  var numberPlace = document.getElementById("set5_p1_text");
  var number = 0; /// number value
  var min = 0; /// min number
  var max = 7; /// max number
  plusBtn.onclick = function(e){
    e.preventDefault;
    if(number<max){
       number = number+1;
       numberPlace.innerText = number ; /// Display the value in place of the number
       numberPlace.classList.remove("animate-plus");
       void numberPlace.offsetWidth;
       numberPlace.classList.add("animate-plus");
    } false;
    if(number == max){
      numberPlace.style.color= "red";
      setTimeout(function(){numberPlace.style.color= "white"},500)
    }
    else {
      numberPlace.style.color= "white";
    }
  minusBtn.onclick = function(){
    if (number>min){
      number = number-1; /// Minus 1 of the number
      numberPlace.innerText = number ; /// Display the value in place of the number
     }
    if(number == min) {        
      numberPlace.style.color= "red";
      setTimeout(function(){numberPlace.style.color= "white"},500)
      }
    else {
    numberPlace.style.color="white";            
    }
  }
}});

window.addEventListener('load', function() {
  var plusBtn2 = document.getElementById("s5_p2_plus");
  var minusBtn2 = document.getElementById("s5_p2_minus");
  var numberPlace2 = document.getElementById("set5_p2_text");
  var number2 = 0; /// number value
  var min2 = 0; /// min number
  var max2 = 7; /// max number
  plusBtn2.onclick = function(e){
    e.preventDefault;
    if(number2<max2){
       number2 = number2+1;
       numberPlace2.innerText = number2 ; /// Display the value in place of the number
       numberPlace2.classList.remove("plus");
       void numberPlace2.offsetWidth;
       numberPlace2.classList.add("plus");
    } false;
    if(number2 == max2){
      numberPlace2.style.color= "red";
      setTimeout(function(){numberPlace2.style.color= "white"},500)
    }
    else {
      numberPlace2.style.color= "white";
    }
  minusBtn2.onclick = function(){
    if (number2>min2){
      number2 = number2-1; /// Minus 1 of the number
      numberPlace2.innerText = number2 ; /// Display the value in place of the number
     }
    if(number2 == min2) {        
      numberPlace2.style.color= "red";
      setTimeout(function(){numberPlace2.style.color= "white"},500)
      }
    else {
    numberPlace2.style.color="white";            
    }
  }
}});

window.addEventListener('load', function() {
  var plusBtn = document.getElementById("s5_p1_plus");
  var minusBtn = document.getElementById("s5_p1_minus");
  var numberPlace = document.getElementById("set5_p1_text");
  var number = 0; /// number value
  var min = 0; /// min number
  var max = 7; /// max number
  plusBtn.onclick = function(e){
    e.preventDefault;
    if(number<max){
       number = number+1;
       numberPlace.innerText = number ; /// Display the value in place of the number
       numberPlace.classList.remove("animate-plus");
       void numberPlace.offsetWidth;
       numberPlace.classList.add("animate-plus");
    } false;
    if(number == max){
      numberPlace.style.color= "red";
      setTimeout(function(){numberPlace.style.color= "white"},500)
    }
    else {
      numberPlace.style.color= "white";
    }
  minusBtn.onclick = function(){
    if (number>min){
      number = number-1; /// Minus 1 of the number
      numberPlace.innerText = number ; /// Display the value in place of the number
     }
    if(number == min) {        
      numberPlace.style.color= "red";
      setTimeout(function(){numberPlace.style.color= "white"},500)
      }
    else {
    numberPlace.style.color="white";            
    }
  }
}});

window.addEventListener('load', function() {
  var plusBtn2 = document.getElementById("s5_p2_plus");
  var minusBtn2 = document.getElementById("s5_p2_minus");
  var numberPlace2 = document.getElementById("set5_p2_text");
  var number2 = 0; /// number value
  var min2 = 0; /// min number
  var max2 = 7; /// max number
  plusBtn2.onclick = function(e){
    e.preventDefault;
    if(number2<max2){
       number2 = number2+1;
       numberPlace2.innerText = number2 ; /// Display the value in place of the number
       numberPlace2.classList.remove("plus");
       void numberPlace2.offsetWidth;
       numberPlace2.classList.add("plus");
    } false;
    if(number2 == max2){
      numberPlace2.style.color= "red";
      setTimeout(function(){numberPlace2.style.color= "white"},500)
    }
    else {
      numberPlace2.style.color= "white";
    }
  minusBtn2.onclick = function(){
    if (number2>min2){
      number2 = number2-1; /// Minus 1 of the number
      numberPlace2.innerText = number2 ; /// Display the value in place of the number
     }
    if(number2 == min2) {        
      numberPlace2.style.color= "red";
      setTimeout(function(){numberPlace2.style.color= "white"},500)
      }
    else {
    numberPlace2.style.color="white";            
    }
  }
}});

function serve_p1() {
  var x = document.getElementById("serve_p1");
  x.style.top = "75px";
}

function serve_p2() {
  var x = document.getElementById("serve_p1");
  x.style.top = "125px";

}

window.addEventListener('load', function() {
  var plusBtn = document.getElementById("p1_null");
  var numberPlace = document.getElementById("p1_ms_text");
  var number = 0; /// number value
  plusBtn.onclick = function(e){
    e.preventDefault;
       number = number;
       numberPlace.innerText = number ; /// Display the value in place of the number
       numberPlace.classList.remove("animate-plus");
       void numberPlace.offsetWidth;
       numberPlace.classList.add("animate-plus");
    };
});

window.addEventListener('load', function() {
  var plusBtn = document.getElementById("p1_fiveteen");
  var numberPlace = document.getElementById("p1_ms_text");
  var number = 15; /// number value
  plusBtn.onclick = function(e){
    e.preventDefault;
       number = number;
       numberPlace.innerText = number ; /// Display the value in place of the number
       numberPlace.classList.remove("animate-plus");
       void numberPlace.offsetWidth;
       numberPlace.classList.add("animate-plus");
    };
});

window.addEventListener('load', function() {
  var plusBtn = document.getElementById("p1_thirty");
  var numberPlace = document.getElementById("p1_ms_text");
  var number = 30; /// number value
  plusBtn.onclick = function(e){
    e.preventDefault;
       number = number;
       numberPlace.innerText = number ; /// Display the value in place of the number
       numberPlace.classList.remove("animate-plus");
       void numberPlace.offsetWidth;
       numberPlace.classList.add("animate-plus");
    };
});

window.addEventListener('load', function() {
  var plusBtn = document.getElementById("p1_forty");
  var numberPlace = document.getElementById("p1_ms_text");
  var number = 40; /// number value
  plusBtn.onclick = function(e){
    e.preventDefault;
       number = number;
       numberPlace.innerText = number ; /// Display the value in place of the number
       numberPlace.classList.remove("animate-plus");
       void numberPlace.offsetWidth;
       numberPlace.classList.add("animate-plus");
    };
});

window.addEventListener('load', function() {
  var plusBtn = document.getElementById("p1_adv");
  var numberPlace = document.getElementById("p1_ms_text");
  var number = "Ad"; /// number value
  plusBtn.onclick = function(e){
    e.preventDefault;
       number = number;
       numberPlace.innerText = number ; /// Display the value in place of the number
       numberPlace.classList.remove("animate-plus");
       void numberPlace.offsetWidth;
       numberPlace.classList.add("animate-plus");
    };
});

window.addEventListener('load', function() {
  var plusBtn = document.getElementById("p2_null");
  var numberPlace = document.getElementById("p2_ms_text");
  var number = 0; /// number value
  plusBtn.onclick = function(e){
    e.preventDefault;
       number = number;
       numberPlace.innerText = number ; /// Display the value in place of the number
       numberPlace.classList.remove("animate-plus");
       void numberPlace.offsetWidth;
       numberPlace.classList.add("animate-plus");
    };
});

window.addEventListener('load', function() {
  var plusBtn = document.getElementById("p2_fiveteen");
  var numberPlace = document.getElementById("p2_ms_text");
  var number = 15; /// number value
  plusBtn.onclick = function(e){
    e.preventDefault;
       number = number;
       numberPlace.innerText = number ; /// Display the value in place of the number
       numberPlace.classList.remove("animate-plus");
       void numberPlace.offsetWidth;
       numberPlace.classList.add("animate-plus");
    };
});

window.addEventListener('load', function() {
  var plusBtn = document.getElementById("p2_thirty");
  var numberPlace = document.getElementById("p2_ms_text");
  var number = 30; /// number value
  plusBtn.onclick = function(e){
    e.preventDefault;
       number = number;
       numberPlace.innerText = number ; /// Display the value in place of the number
       numberPlace.classList.remove("animate-plus");
       void numberPlace.offsetWidth;
       numberPlace.classList.add("animate-plus");
    };
});

window.addEventListener('load', function() {
  var plusBtn = document.getElementById("p2_forty");
  var numberPlace = document.getElementById("p2_ms_text");
  var number = 40; /// number value
  plusBtn.onclick = function(e){
    e.preventDefault;
       number = number;
       numberPlace.innerText = number ; /// Display the value in place of the number
       numberPlace.classList.remove("animate-plus");
       void numberPlace.offsetWidth;
       numberPlace.classList.add("animate-plus");
    };
});

window.addEventListener('load', function() {
  var plusBtn = document.getElementById("p2_adv");
  var numberPlace = document.getElementById("p2_ms_text");
  var number = "Ad"; /// number value
  plusBtn.onclick = function(e){
    e.preventDefault;
       number = number;
       numberPlace.innerText = number ; /// Display the value in place of the number
       numberPlace.classList.remove("animate-plus");
       void numberPlace.offsetWidth;
       numberPlace.classList.add("animate-plus");
    };
});

window.addEventListener('load', function() {
  var plusBtn = document.getElementById("reset");
  var numberPlace = document.getElementById("p1_ms_text");
  var numberPlace2 = document.getElementById("p2_ms_text");
  var number = 0; /// number value
  plusBtn.onclick = function(e){
    e.preventDefault;
       number = number;
       numberPlace.innerText = number ; /// Display the value in place of the number
       numberPlace2.innerText = number ; /// Display the value in place of the number
       numberPlace.classList.remove("animate-plus");
       void numberPlace.offsetWidth;
       numberPlace.classList.add("animate-plus");
       numberPlace2.classList.remove("animate-plus");
       void numberPlace2.offsetWidth;
       numberPlace2.classList.add("animate-plus");
    };
});

