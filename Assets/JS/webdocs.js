
// Codes from Web docs

/*
//   const watchID = navigator.geolocation.watchPosition((position) => {
//     doSomething(position.coords.latitude, position.coords.longitude);
//   });
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
