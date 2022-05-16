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
    /*let rating = $(this).attr('data-rating');*/
    let rating = evt.currentTarget.getAttribute("data-rating"); 
      let drinkColor =evt.currentTarget.getAttribute("data-color")

      console.log(rating);
      
      $('.box').css({
          'height': rating * 100 + 'vh',
          'background': drinkColor
        });
}

$(document).ready(function(){

	$('.tablinks').click( function(){
	    let rating = $(this).attr('data-rating');
      let drinkColor = $(this).attr('data-color')

	    console.log(rating);
	    
	    $('.box').css({
	        'height': rating * 100 + 'vh',
          'background': drinkColor
	      });
	});
  });





