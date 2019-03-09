/*function makeMeMove() {
    let elem = document.getElementById("animate");
    let pos = 0;
    let inter = setInterval(move, 500);

    function move() {
        if(pos===350){
           clearInterval(inter);
        } else{
            pos++;
            elem.style.top = pos+'1px';
            elem.style.left = pos+'1px';
        }
    }
}

 [1,2,3,4].forEach((ele)=>{console.log(ele)});

function openWindow( url ) {
    window.open(url, '_blank', "shilpijain" ,"modal=no");
    window.focus();
}*/

function successCallBack(positionObject) {
    let lati = positionObject.coords.latitude;
    let longi = positionObject.coords.longitude;
    console.log(`The latitude: ${lati} and longitude: ${longi}`);
    document.getElementById('output').innerHTML = `<ul><li>Latitude: ${lati}</li><li>Longitude: ${longi}</li></ul>`;
    let centerPoint = {
        lat: lati,
        lng: longi
    };
    let googleMap = new google.maps.Map(document.getElementById('container'),{
        zoom: 14,
        center: centerPoint
    })

    let marker = new google.maps.Marker({
        position: centerPoint,
        map: googleMap
    })
}

function errorCallBack(err) {
    console.log(`There is an error ${err} !!!`);
}

function locateMe() {
    window.navigator.geolocation.getCurrentPosition(successCallBack,errorCallBack);
}



