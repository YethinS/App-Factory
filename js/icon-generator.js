$(document).ready(function(){
    $('#btn-trim, #btn-dtrim, #btn-crop, #btn-center, #btn-none, #btn-elevate, #btn-cast, #btn-score').click(function(){
        $('#btn-trim, #btn-dtrim, #btn-crop, #btn-center, #btn-none, #btn-elevate, #btn-cast, #btn-score').removeClass('active');
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

  //Display js code test 2//

  function myFunction(i) {
    var icon_2 = document.querySelector("#icon-2");
    icon_2.className = i.className
}

  