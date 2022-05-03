$(document).ready(function(){

  var locations = ["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Detroit", "Jacksonville", "Indianapolis"];
  var location_selection = Math.round(Math.random()*(locations.length-1))
  var location = locations[location_selection];
  console.log(location);
  $('#location').text(location);

  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=a0be2ca7d3101a5b3e8a3bbf580143f6&units=imperial', function(data) {
      console.log(data);

      let feels = data["main"]["feels_like"]
      let humidity = data["main"]["humidity"]
      let pressure = data["main"]["pressure"]
      let temp = data["main"]["temp"]
      let temp_max = data["main"]["temp_max"]
      let temp_min = data["main"]["temp_min"]


      let fontSize = Math.round(feels);

      $('#feels').text(feels);
      $('#humidity').text(humidity);
      $('#pressure').text(pressure);
      $('#temp').text(temp);
      $('#temp_max').text(temp_max);
      $('#temp_min').text(temp_min);
      $('#info').css("background", "linear-gradient(90deg, hsl("+Math.round(temp_min*2+150)+",100%,50%) 0%, hsl("+Math.round(temp_max*2+150)+",100%,50%) 100%");
  });

});