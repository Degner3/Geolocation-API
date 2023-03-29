
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
