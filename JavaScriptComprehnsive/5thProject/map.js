function successCallBack(positionObject) {
    let lat = positionObject.coords.latitude;
    let longi = positionObject.coords.longitude;
    console.log(`The latitude: ${lat}, the longitude: ${longi}`);
    document.getElementById('output').innerHTML = `<ul><li>Latitude: ${lat}</li><li>Longitude: ${longi}</li></ul>`;
    let centerPoint = {
        lat: lat,
        lng: longi
    }

    let googleMap = new google.maps.Map(document.getElementById('container'), {
        zoom: 14,
        center: centerPoint
    })

    let marker = new google.maps.Marker({
        position: centerPoint,
        map: googleMap
    })
}

function errorCallBack(err) {
    console.log(`There was an error: ${err}`);
}

function geoFindMe() {
    window.navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
}

//DOM
let doc=window.document.all[2];
document.head;
let OpsArray=Array.from(document.scripts);
OpsArray.forEach(ele => console.log(ele.src);