$(document).ready(function(){

    $('input[type=range]').on('input', function(){

        let inputValue = $(this).val();
   	
   		console.log(inputValue);
    
        const wghtmax = 500;
   
        