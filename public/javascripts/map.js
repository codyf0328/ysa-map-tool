var map;
var marker;
var infoWindow;
var lot = [];
var center = {lat: 41.934560, lng: -88.775377};
var options = {
  zoom: 16,
  center: center
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), options);

  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('form')
  });

  google.maps.event.addListener(map, "click", (event) => {

    marker = new google.maps.Marker({
      position: event.latLng,
      map: map
    });

      google.maps.event.addListener(marker, "click", (event) => {
        var form = document.getElementById('form');
        form.style.display = "block";

        infoWindow.open(map, marker);
      });   
  });
}

function saveData() {
  var lotName = decodeURI(escape(document.getElementById('name').value));
  var lotColor = escape(document.getElementById('color').value);

  lot.push({
    name: lotName,
    color: lotColor,
    lat: marker.getPosition().lat(),
    lng: marker.getPosition().lng()
  });

  // infoWindow.close();
  
  messageWindow = new google.maps.InfoWindow({
    content: `Saved lot ${lotName}.`
  });

  messageWindow.open(map, marker);

}

function exportData() {
  document.getElementById('output').innerHTML = `<code>${JSON.stringify(lot, undefined, 2)}</code>`;

  $.post("/", { 
    data: JSON.stringify(lot) 
    });
}