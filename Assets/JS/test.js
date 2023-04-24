
// Test
if ("geolocation" in navigator) {
    console.log('geolocation available');
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        document.getElementById('latitude').textContent = lat;
        document.getElementById('longitude').textContent = lon;
        // console.log(position.coords.latitude);
        // console.log(position.coords.longitude);
});
} else {
    console.log('geolocation not available');
}





// Y Test
const myState = () => {

  const status = document.querySelector('.status');

  const success = (position) => {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude + ' ' + longitude);

    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`


    fetch(geoApiUrl)

    .then(response => response.json())

    .then(data => {
      console.log(data);
      status.textContent = data.principalSubdivision
    })

  }

  const error  = () => {
    status.textContent = 'Unable to retrieve your location';
  }

  navigator.geolocation.getCurrentPosition(success, error);

}

document.querySelector('.find-state').addEventListener('click', myState);







/*

const myApp = document.getElementById('app');

const geoOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

navigator.geolocation.getCurrentPosition(success, error, geoOptions);



function success(pos) {
    const crd = pos.coords;

   console.log( `${crd} Your current position is: Latitude : ${crd.latitude} Longitude: ${crd.longitude} More or less ${crd.accuracy} meters.`);
    getLocationName(crd.longitude, crd.latitude);
}


function error(err) {
    myApp.innerText = `ERROR(${err.code}): ${err.message}`;
}



function getLocationName(myLong, myLat) {

// geo code api https://nominatim  no api key  use this
console.log(myLong, myLat);
const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${myLat}&lon=${myLong}&format=json`;


console.log(apiUrl);

    let myResElement = document.createElement('h2');

 let fetchOptions={

    Method: 'GET',
    Body: 'body',
    Cache: 'default',

    Headers: {
        'Accept': 'application.json',
        'Content-Type': 'application/json'
    }


 };
 // fetch(apiUrl,fetchOptions)

    fetch(apiUrl)
        .then((response) => response.json())

        .then((data) => {
            console.log('my fetched data:', data);

            myResElement.innerText = `Du er i  ${data.address.municipality} - ${data.address.postcode} ${data.address.city} `;
        })
        .catch((error) => {
            console.error('Error:', error);
            myResElement.innerText = `my error: ${error}`;
        });

    myApp.appendChild(myResElement);

}

*/