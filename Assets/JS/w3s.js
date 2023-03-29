
// W3S code

let x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + "&deg;" +
  "<br>Longitude: " + position.coords.longitude + "&deg;";
}

// Handling Errors and Rejections
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}


// Metoden getCurrentPosition() - Returner data
// Metoden getCurrentPosition() returnerer et objekt ved succes. Egenskaberne for breddegrad, længdegrad og nøjagtighed returneres altid. De øvrige ejendomme returneres, hvis de er tilgængelige:

/*
Property: coords.latitude          Returns: latitude som et decimaltal (altid returneret)
Property: coords.longitude         Returns: longitude som et decimaltal (altid returneret)
Property: coords.accuracy          Returns: accuracy af ​​positionen (altid returneret)
Property: coords.altitude          Returns: alitude i meter over middelhavoverfladen (returneres hvis tilgængelig)
Property: coords.altitudeAccuracy  Returns: Positionens altitude Accuracy (returneres, hvis tilgængelig)
Property: coords.heading           Returns: heading som grader med uret fra nord (returneret, hvis tilgængelig)
Property: coords.speed             Returns: Hastigheden i meter per sekund (returneres hvis tilgængelig)
Property: timestamp                Returns: Datoen/tidspunktet for svaret (returneret, hvis tilgængeligt)
*/
