
const myApp = document.getElementById('App');


function success(position) {
    const crd = position.coords;
    // myApp.innerText = `Your current position is: Latitude : ${crd.latitude} Longitude: ${crd.longitude} More or less ${crd.accuracy} meters.`;
    getLocation(crd.longitude, crd.latitude);
}


function error(error) {
    // myApp.innerText = `ERROR(${error.code}): ${error.message}`;
}

const geoOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};


navigator.geolocation.getCurrentPosition(success, error, geoOptions);



function getLocation(myLong, myLat) {

    //url https://nominatim.openstreetmap.org/reverse?lat=56.94&lon=10.06&format=json

    const locationApi = `https://nominatim.openstreetmap.org/reverse?lat=${myLat}&lon=${myLong}&format=json`;

    console.log(locationApi);

    let myResultElement = document.createElement('div');
    
    let yourLocation = document.createElement('h1');
    yourLocation.innerText = "Din lokation"

    let mylocation = document.createElement('p');
    let myState = document.createElement('p');
    let myRegion = document.createElement('p');
    let myPostcode = document.createElement('p');
    let myCountry = document.createElement('p');



    fetch(locationApi)
    
        .then((response) => response.json())

        .then((data) => {
            console.log(data);

            //  myResultElement.innerText = `Du er i  ${data.address.municipality} - ${data.address.postcode} ${data.address.state} `;

            mylocation.innerHTML = `${data.address.town}`;
            myState.innerHTML = `${data.address.municipality}`;
            myRegion.innerHTML = `${data.address.state}`;
            myPostcode.innerHTML = `${data.address.postcode}`;
            myCountry.innerHTML = `${data.address.country}`;
        })

        .catch((error) => {
            console.error('Error:', error);
             myResultElement.innerText = `my error: ${error}`;
        });


    // Api data HTML
    myResultElement.appendChild(yourLocation);
    myResultElement.appendChild(mylocation);
    myResultElement.appendChild(myState);
    myResultElement.appendChild(myRegion);
    myResultElement.appendChild(myPostcode);
    myResultElement.appendChild(myCountry);

    // full Result
    myApp.appendChild(myResultElement);

}
