$(document).ready(function(){

    $('input[type=range]').on('input', function(){

        let inputValue = $(this).val();
   	
   		console.log(inputValue);
    
        const wghtmax = 500;
   
        //standard sliders
        $('.axis-range').on('input', function(){
    
            let value = parseInt($(this).val()); //get slider input value
            // console.log(value);
    
      
    
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