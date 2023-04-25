const map = L.map("map").setView([46.392410, -94.636230], 8);
const osm = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 10,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(map);

const geojsonMarkerOptions = {
  radius: 8,
  fillColor: "#ff7800",
  color: "red",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8,
};

// showing the latlong on click event
var popup = L.popup();

function onMapClick(e) {
  popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
};

map.on('click', onMapClick);

  
d3.json("./static/myfile.json", function(response) {

    // console.log(response.features.length);
  
    // Create a new marker cluster group.
    let markers = L.markerClusterGroup();
  
    // Loop through the data.
    for (let i = 0; i < response.length; i++) {

      
  
        let popUpcontent = '<h4 class = "text-primary">Invasive species</h4>' +
        '<div class="container"><table class="table table-striped">' +
        "<thead><tr><th>Properties</th><th>Value</th></tr></thead>" +
        "<tbody><tr><td> Group </td><td>" +
        response[i]["Group"]+
        "</td></tr>" +
        "<tr><td>Locality </td><td>" +
        response[i]["Locality"] +
        "</td></tr>" +
        "<tr><td>Common Name </td><td>" +
        response[i]["Common Name"] +
        "</td></tr>" +
        "<tr><td> Scientific Name </td><td>" +
        response[i]["Scientific Name"] +
        "</td></tr></tbody></div>";
        // Add a new marker to the cluster group, and bind a popup.
        markers.addLayer(L.marker([response[i]["Latitude"], response[i]["Longitude"]])
          .bindPopup(popUpcontent));
    
      // Add our marker cluster layer to the map.
    map.addLayer(markers);
  
    }
  }
);