
// Codes from Web docs

/*
   const watchID = navigator.geolocation.watchPosition((position) => {
    doSomething(position.coords.latitude, position.coords.longitude);
   });
*/


// navigator.geolocation.clearWatch(watchID);



/*
function success(position) {
    doSomething(position.coords.latitude, position.coords.longitude);
  }
  
  function error() {
    alert("Sorry, no position available.");
  }
  
  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };
  
  const watchID = navigator.geolocation.watchPosition(success, error, options);
  */




// Describing a position
/*
function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    // Do something with your latitude and longitude
}
*/


// Handling error
/*
function errorCallback(error) {
    alert(`ERROR(${error.code}): ${error.message}`);
  }
  */


// Example test
function geoFindMe() {
    const status = document.querySelector("#status");
    const mapLink = document.querySelector("#map-link");
  
    mapLink.href = "";
    mapLink.textContent = "";
  
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = "";
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
  
    function error() {
      status.textContent = "Unable to retrieve your location";
    }
  
    if (!navigator.geolocation) {
      status.textContent = "Geolocation is not supported by your browser";
    } else {
      status.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(success, error);
    }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);






// Geolocation.getCurrentPosition()
/* Metoden Geolocation.getCurrentPosition() bruges til at få enhedens aktuelle position. */

// Syntax / Syntaks
/*
getCurrentPosition(success)
getCurrentPosition(success, error)
getCurrentPosition(success, error, options)
*/

// Parameters

// succes / getCurrentPosition(success)
/* En tilbagekaldsfunktion, der tager et GeolocationPosition-objekt som dets eneste inputparameter. */
// error / getCurrentPosition(success, error)
/* En tilbagekaldsfunktion, der tager et GeolocationPosition-objekt som det eneste inputparameter. */

// Options / getCurrentPosition(success, error, options)
/* Et valgfrit objekt med følgende parametre: maximumAge, timeout og enableHighAccuracy */


// Ekamples
/*
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  function success(pos) {
    const crd = pos.coords;
  
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);

*/








// Geolocation.clearWatch()
/* Metoden Geolocation.clearWatch() bruges til at afregistrere lokations-/fejlovervågningsbehandlere, der tidligere er installeret ved hjælp af Geolocation.watchPosition(). */

// Syntax / Syntaks
/* clearWatch(id) */

// Parameters
// id
/* ID-nummeret, der returneres af metoden Geolocation.watchPosition() ved installation af den behandler, du ønsker at fjerne. */

// Geolocation.watchPosition()
/* 
Geolocation-metoden watchPosition()-metoden bruges til at registrere en behandlerfunktion, der vil blive kaldt automatisk hver gang enhedens position ændres. Du kan også, valgfrit, angive en fejlhåndterings-tilbagekaldsfunktion. */

// Syntax / Syntaks
/*
watchPosition(success)
watchPosition(success, error)
watchPosition(success, error, options)
*/


// Parameters

// succes / watchPosition(success)
/* En tilbagekaldsfunktion, der tager et GeolocationPosition-objekt som inputparameter. */

// error / watchPosition(success, error)
/* An optional callback function that takes a GeolocationPositionError object as an input parameter. */

// Options / watchPosition(success, error, options)
/* An optional object that provides configuration options for the location watch. See Geolocation.getCurrentPosition() for more details on possible options. */

// eksample
/*
let id;
let target;
let options;

function success(pos) {
  const crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log("Congratulations, you reached the target");
    navigator.geolocation.clearWatch(id);
  }
}

function error(err) {
  console.error(`ERROR(${err.code}): ${err.message}`);
}

target = {
  latitude: 0,
  longitude: 0,
};

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};

id = navigator.geolocation.watchPosition(success, error, options);
*/
