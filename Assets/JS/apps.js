

const myApp = document.getElementById('app');


const geoOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};


function success(pos) {

}

function error(err) {


}




function getLocationName() {


 // geo code api https://locationiq.com
    //const myApiKey = 'pk.439b01bdf321f632f87bd4d2631fe6d0';
    //const apiUrl = `https://eu1.locationiq.com/v1/reverse?key=${myApiKey}&lat=${myLat}&lon=${myLong}&format=json`;




    // geo code api https://nominatim  no token

    //url https://nominatim.openstreetmap.org/reverse?lat=56.94&lon=10.06&format=json
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${myLat}&lon=${myLong}&format=json`;


    console.log(apiUrl);

}