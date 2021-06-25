$(document).ready(function(){
    $('#btn-none, #btn-elevate, #btn-cast, #btn-score').click(function(){
        $('#btn-none, #btn-elevate, #btn-cast, #btn-score').removeClass('active');
        $(this).addClass('active');
    });
});
//Icon click color change
$(document).ready(function(){
    $('#icon-1, #icon-3, #icon-4').click(function(){
        $('#icon-1, #icon-3, #icon-4').removeClass('active');
        $(this).addClass('active');
    });
});
//End
//Main button group color change
$(document).ready(function(){
    $('#btn-take, #btn-ask, #btn-trade').click(function(){
        $('#btn-take, #btn-ask, #btn-trade').removeClass('active');
        $(this).addClass('active');
    });
});
//Trim button group color change
$(document).ready(function(){
  $('#btn-trim, #btn-dtrim').click(function(){
      $('#btn-trim, #btn-dtrim').removeClass('active');
      $(this).addClass('active');
  });
});
//Crop button group color change
$(document).ready(function(){
  $('#btn-crop, #btn-center').click(function(){
      $('#btn-crop, #btn-center').removeClass('active');
      $(this).addClass('active');
  });
});

//Icon display.
//var icon = document.getElementById("icon-1").outerHTML();

  
/*var targetDiv = document.getElementById("icon-2");
document.getElementById("icon-1").addEventListener("click", function() {
    
    
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
        document.getElementById("icon-1").style.color = "black";
      } else {
        targetDiv.style.display = "block";
        document.getElementById("icon-1").style.color = "blue";
      }
  });*/ 
//Not working code//
 /* let box = document.getElementsByClassName("box");
  let icon1 = document.getElementById("icon-1");
  console.log(icon1);
  document.getElementsById("icon-1").addEventListener("click",function(){
         box.appendChild(icon-1);     
  });*/

  //content display start//

  $(function() {

    $(".btn1").on("click", function() {
      //hide all sections
      $(".button1-content").hide();
      //show the section depending on which button was clicked
      $("#" + $(this).attr("data-section")).show();
    });
  
  });

  //Display icon to right side//

  function myFunction(i) {
    var icon_2 = document.querySelector("#icon-2");
    icon_2.className = i.className
}

//Trim js code test//
function myTrim() {
  var element = document.getElementById("box");
  element.classList.add("active");
}
function trim(){
  var element = document.getElementById("box");
  element.classList.remove("active");
}
//Color change
function colorChange(){
  let color = document.getElementById("favcolor").value;
  var icon_color = document.getElementById("icon-2");
  console.log(color);
  icon_color.style.color = color;
}
//background-color change
function bcolorChange(){
  let color = document.getElementById("b-color").value;
  console.log(color);
  var bcolor = document.getElementById("box");
  bcolor.style.background = color;
}
//default color palette value
function default_color(){
  document.getElementById("favcolor").value = '#0000ff';
  document.getElementById("b-color").value = '#5192ff';
}