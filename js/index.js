$( document ).ready(function(){
  var toggle = true;
  var a = document.getElementById("breakvalue");
  a.innerHTML = 7;
  var b = document.getElementById("sessionvalue");
  b.innerHTML = 25;
  

  $("#crcl").html("<h3 id = len>Session</h3>" + "</break>" + "<h1 id = numb>" + b.innerHTML + "</h1>");

 $("#breakplus").on("click", function(){
    
    $("#breakvalue").html(eval(a.innerHTML)+1);
  });
  $("#breakminus").on("click", function(){
    
    if (a.innerHTML>=2){
      $("#breakvalue").html(eval(a.innerHTML)-1);
    }
  });
  $("#sessionplus").on("click", function(){
  
    $("#sessionvalue").html(eval(b.innerHTML)+1);
    $("#crcl").html("<h3 id = len>Session</h3>" + "</break>" + "<h1 id = numb>" + b.innerHTML + "</h1>");
    clearInterval(inter);
  });
  
  $("#sessionminus").on("click", function(){
    
    if(b.innerHTML>=2){
      $("#sessionvalue").html(eval(b.innerHTML)-1);
      $("#crcl").html("<h3 id = len>Session</h3>" + "</break>" + "<h1 id = numb>" + b.innerHTML + "</h1>");
      clearInterval(inter);
    }
  });


  var clck = $("#crcl").on("click", function (){
    
    var getId = document.getElementById("len");
    var idValue = getId.innerHTML;
    console.log(idValue);
    var capture = document.getElementById("crcl");

    var inner = capture.innerHTML;

    var head = document.getElementById("numb");

    var inn =  head.innerHTML;
    var minutes = parseInt(inn);

    var afterMins = inn.substr(inn.indexOf(":") + 1);
    var seconds = Number(afterMins);

    if(toggle&&isNaN(inn)&&idValue==="Session"){
    
      inter = setInterval(function(){
      

        if(seconds>=0){
          $("#crcl").html("<h3 id = len>Session</h3>" + "</break>" + "<h1 id = numb>" + minutes + ":" + seconds-- + "</h1>");}
        if (seconds<0){
          seconds=59;
          minutes = minutes-1;
          $("#crcl").html("<h3 id = len>Session</h3>" + "</break>" + "<h1 id = numb>" + minutes + ":" + seconds-- + "</h1>");}
        if(minutes<0){
          clearInterval(inter);
          $("#crcl").html("<h3 id = len>Break!</h3>" + "</break>" + "<h1 id = numb>" + a.innerHTML + "</h1>");
          clockBreak();

        }
        toggle=false;

      }, 1000); 

    }
    if(toggle&&!isNaN(inn)&&idValue==="Session"){

      minutes = eval(b.innerHTML-1);
      seconds=59;

      inter = setInterval(function(){

        if(seconds>=0){
          $("#crcl").html("<h3 id = len>Session</h3>" + "</break>" + "<h1 id = numb>" + minutes + ":" + seconds-- + "</h1>");
        }
        if (seconds<0){
          seconds=59;
          minutes = eval(minutes-1);
          $("#crcl").html("<h3 id = len>Session</h3>" + "</break>" + "<h1 id = numb>" + minutes + ":" + seconds-- + "</h1>");}
        if(eval(minutes)<0){
          clearInterval(inter);
          $("#crcl").html("<h3 id = len>Break!</h3>" + "</break>" + "<h1 id = numb>" + a.innerHTML + "</h1>");
          clockBreak();

        }
        toggle=false;

      }, 1000);

    }

    if (!toggle&&idValue==="Session") {
      toggle=true;
      clearInterval(inter);


    }
    if(toggle&&isNaN(inn)&&idValue==="Break!"){
      inter = setInterval(function(){


        if(seconds>=0){
          $("#crcl").html("<h3 id = len>Break!</h3>" + "</break>" + "<h1 id = numb>" + minutes + ":" + seconds-- + "</h1>");}
        if (seconds<0){
          seconds=59;
          minutes = minutes-1;
          $("#crcl").html("<h3 id = len>Break!</h3>" + "</break>" + "<h1 id = numb>" + minutes + ":" + seconds-- + "</h1>");
        }
        if(minutes<0){
          clearInterval(inter);
          $("#crcl").html("<h3 id = len>Session</h3>" + "</break>" + "<h1 id = numb>" + 25 + "</h1>");
          $("#sessionvalue").html(25);
          $("#breakvalue").html(7);

        }
        toggle=false;

      }, 1000); 

    }


    if (!toggle&&idValue==="Break!") {

      toggle = true;
      clearInterval(inter);


    }
  });


  var clockBreak = function (){
    var capture = document.getElementById("crcl");

    var inner = capture.innerHTML;

    var head = document.getElementById("numb");

    var inn =  head.innerHTML;


    minutes = eval(a.innerHTML-1);
    seconds=59;
    inter = setInterval(function(){
      if(seconds>=0){
        $("#crcl").html("<h3 id = len>Break!</h3>" + "</break>" + "<h1 id = numb>" + minutes + ":" + seconds-- + "</h1>");
      }
      if (seconds<0){
        seconds=59;
        minutes = minutes-1;
        $("#crcl").html("<h3 id = len>Break!</h3>" + "</break>" + "<h1 id = numb>" + minutes + ":" + seconds-- + "</h1>");}
      if(eval(minutes)<0){
        clearInterval(inter);
        $("#crcl").html("<h3 id = len>Session</h3>" + "</break>" + "<h1 id = numb>" + 25 + "</h1>");
        $("#sessionvalue").html(25);
        $("#breakvalue").html(7);
      }
      toggle=false;

    }, 1000);
  }

  $("#reset").on("click", function(){
    
    $("#sessionvalue").html(25);
    $("#breakvalue").html(7);
    $("#crcl").html("<h3 id = len>Session</h3>" + "</break>" + "<h1 id = numb>" + 25 + "</h1>");
    toggle = true;
    clearInterval(inter);


    


  });
});