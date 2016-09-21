function capFirst (string) {
  var arr = string.split(' ');
  arr = arr.map(function(ele) {
    return ele[0].toUpperCase() + ele.slice(1);
  }).join(" ");
  return arr;
}

$(document).ready(function() {
  var key = 'bb5937cbb25df8522be64f97088aba99';
  var backgrounds = {
    'Clear': 'https://mkxrog.bn1302.livefilestore.com/y3mgSzzQtXxlpNPc3PuWF5zeZyQufS4utFNUNVCzFI10QIjZ3w_IpQu0t0W3LxCO8tQCxqfkSQFxEi8nBn34N_hDTHAHfKIuZRVuGvqz7Kxi4LjMi1hqcA7uXdOBU3aEjDSB8vh4n2RYqrndp3WkcsH_S4yu2uxda2vkryIsUqJRDs?width=1920&height=1200&cropmode=none',
    'Clouds': 'https://mkvxdq.bn1302.livefilestore.com/y3m1Y30U1xvUA8nIEoRRGty7DQLi1KBEeDpJP5DcJJDvwiKG0NOmFrPt7jiAhR7l8VwAT37x5hgmnzHDEWsOVNnZoGN0P7VuUYlktm8KVkuXPuc_0IzeZ40nFHqJ542jfjv-vr1QMZ1KKeumJ5qCcob6H71obzPky39SIyO187Hblo?width=1600&height=1200&cropmode=none',
    'Drizzle': 'https://mkw8ma.bn1302.livefilestore.com/y3m-ni0g1oqBCDxu9P9yuF3ib1tNfGuSrWIPYb_yIPNi7gRPA53OWgWKZt0WmShP3pCWI7Nn-mFe90jfOMadmP36C137OnSHZB-9ZQ2ta-fuM3TXxzWy-Q8arTqkKRpjPvZbAh5QCEJT2XWFZjuUxH1g-QX8QimVnmJN1v9q7jPk2E?width=2560&height=1600&cropmode=none',
    'Rain': 'https://mkxygq.bn1302.livefilestore.com/y3mC8EgV56hJa0aKY21pFu1yIx6ShhMK_puF1TMHn9jmTZ4tp1AAilv3m1SX04Utq7OSxLWdAuvmJTJ-eGMxOQhXeHxIFGzxsAdCFbnlOYHLXAQnWXYGeGM7uMUNl1lzh86X5GvR2-d01zOdCrLqMWj8GiZHQyeuxUxwU3dWk2AsFc?width=1920&height=1200&cropmode=none',
    'Thunderstorm': 'https://mkvqxg.bn1302.livefilestore.com/y3mUGDELpXs-BzKDNWwgrQndlJvYn6PM2fN6SJCm-H5yJFhQJ0Dtfk815w7NI7UAdmFenoXZL-31I4AiC3wbSZoppRBZgmLjX_gQwt44UTt1ioVdbLqSq55l4zzB5voW_THoMfNjBXMViDEMtnncKXdswEQ1tVi0rmLA9VhJtme9Ac?width=1920&height=1200&cropmode=none',
    'Snow': 'https://mkuhja.bn1302.livefilestore.com/y3mQtXpafNuWxUrOSEtdCCMFR8x1l1qDp6t7060p2TFI8JJdoroRyGb3Yzv6kC3feXoIJCVQjdWmpinNHRagAuExVGSymx3idhcj87RzMdLdhB4I0S55WiyF9TjM8N0esh94Ed5_xv5zsU99Rb6LV6BhGcUrvbVpXQzvn81zyeDJtY?width=1920&height=1200&cropmode=none'
  }
  $.getJSON("http://ipinfo.io").done(function(data) {
    console.log(data);
    var lat = data.loc.split(',')[0];
    var long = data.loc.split(',')[1];
    var city = data.city;
    var country = data.country;
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=" + key; 
    $.getJSON(url).done(function(data) {
      var main = data.weather[0].main;
      console.log(data.weather[0].description);
      var description = capFirst(data.weather[0].description);
      var icon = data.weather[0].description;
      var tempC = Math.floor(data.main.temp - 273.15) + "°C"; 
      var humidity = data.main.humidity + "%";
      var windSpeed = data.wind.speed;
      var windDir = data.wind.deg;
      var cloudPer = data.clouds.all + "%";
      $("#city").html(city);
      $("#country").html(country);
      $("#temp").html(tempC);
      $("#description").html(description);
      $("#humidity").html(humidity);
      $("#clouds").html(cloudPer);
      $("#windSpeed").html(windSpeed);
      $("#windDir").css('transform', 'rotate(' + windDir + 'deg)');
      $('#windDir').css({
  '-webkit-transform' : 'rotate(' + windDir + 'deg)',
  '-moz-transform'    : 'rotate(' + windDir + 'deg)',
  '-ms-transform'     : 'rotate(' + windDir + 'deg)',
  '-o-transform'      : 'rotate(' + windDir + 'deg)',
  'transform'         : 'rotate(' + windDir + 'deg)'
});
      $('.main').css('background-image', 'url(' + backgrounds[main] + ')');
      
      console.log(data);
    })
  })
});