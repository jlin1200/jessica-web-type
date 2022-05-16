function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

$(document).ready(function(){

    $('input[type=range]').on('input', function(){

        let inputValue = $(this).val();
   	
   		console.log(inputValue);
    
        const wghtmax = 500;
   
        //standard sliders
        $('.axis-range').on('input', function(){
    
            let value = parseInt($(this).val()); //get slider input value
            // console. log(value);
    
      
    
            // console.log("--"+slidertype, value );
    
            $('#content').css("--wght", value);
    
        });
        //mouseposition
        $('#intro').mousemove(function(event) {
    
            console.log(event.pageX, event.pageY);
    
            let cursorX = event.pageX / $(this).width();
    
            let settingX = Math.floor(cursorX * wghtmax);
    
            // console.log( settingX, settingY)
    
            $("#bigletter").css({
                "--wght": settingX
            });
            
        });
    });

});