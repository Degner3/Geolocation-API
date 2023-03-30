
const myApp = document.getElementById('app');


function success(position) {
    const crd = position.coords;
    myApp.innerText = `${crd} Your current position is: Latitude : ${crd.latitude} Longitude: ${crd.longitude} More or less ${crd.accuracy} meters.`;
    getLocationName(crd.longitude, crd.latitude);
}


function error(error) {
    myApp.innerText = `ERROR(${error.code}): ${error.message}`;
}

const geoOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

navigator.geolocation.getCurrentPosition(success, error, geoOptions);



function getLocationName(myLong, myLat) {

    //const myApiKey = 'pk.439b01bdf321f632f87bd4d2631fe6d0';
    // const apiUrl = `https://eu1.locationiq.com/v1/reverse?key=${myApiKey}&lat=${myLat}&lon=${myLong}&format=json`;

//url https://nominatim.openstreetmap.org/reverse?lat=56.94&lon=10.06&format=json
const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${myLat}&lon=${myLong}&format=json`;

console.log(apiUrl);

    let myResultElement = document.createElement('h2');

    let fetchOptions={

    Method: 'GET',
    Body: 'body',
    Cache: 'default',

    Headers: {
        'Accept': 'application.json',
        'Content-Type': 'application/json'
    }


 };

    fetch(apiUrl,fetchOptions)
        .then((response) => response.json())

        .then((data) => {
            console.log('my fetched data:', data);

            myResultElement.innerText = `Du er i  ${data.address.municipality} - ${data.address.postcode} ${data.address.state} `;
        })
        .catch((error) => {
            console.error('Error:', error);
            myResultElement.innerText = `my error: ${error}`;
        });

    myApp.appendChild(myResultElement);

}