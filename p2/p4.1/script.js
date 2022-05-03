let reviews;

$(document).ready(function(){
  var locations = ["blue (berry)",];
  console.log(brand);
  $('#brand').text(brand);


  $.getJSON('user.json', function(data) {
      console.log(data);
      reviews = data;

      let brand = data[0]["brand"];
      let notes = data[0]["notes"];
      let rating = data[0]["rating"];
      let purchase = data[0]["purchase"];


      let infohtml = `
        <div class="info">
          <div class="brand">${brand}</div>
          <div class="notes">${notes}</div>
          <div class="rating">${rating}</div>
        </div>
      `

      $('body').append(infohtml);
      // $('#brand').text(brand);
      // $('#notes').text(notes);
      // $('#rating').text(rating);
      // $('#purchase').text(purchase);
  });

  $('.hover-title').click(function(){
    let key = parseInt( $(this).attr('id') );

    let rating = eval( reviews[key]["rating"] );

    console.log(rating * 100);
    $('.box').css({
        'height': rating * 100 + 'vh'
      });


  });

});