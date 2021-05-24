let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: "pk.eyJ1IjoidGNoYWwxMDAiLCJhIjoiY2tsenY3ZTA1MGV1OTJvcjM2Mm85YWpmYSJ9.W5RSrQ8iKic92avbxEH-nQ"
});
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: "pk.eyJ1IjoidGNoYWwxMDAiLCJhIjoiY2tsenY3ZTA1MGV1OTJvcjM2Mm85YWpmYSJ9.W5RSrQ8iKic92avbxEH-nQ"
});
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 12,
  accessToken: "pk.eyJ1IjoidGNoYWwxMDAiLCJhIjoiY2tsenY3ZTA1MGV1OTJvcjM2Mm85YWpmYSJ9.W5RSrQ8iKic92avbxEH-nQ"
});
let map = L.map('mapid', {
  center: [36.1627, -86.7816],
  zoom: 12,
  layers: [streets]
});
// Create a base layer that holds all three maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets,
  "Dark": dark
};
d3.json("/database").then(function(data) {
    JSON.parse(data).forEach(val => {
        var location = [val.latitude, val.longitude]
        val.formattedValue = Math.round(val.predicted_price).toLocaleString('en-US')
        L.marker(location)
        // .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Street " + city.street + "</h3>")
        // .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Street " + city.street  + "</hr3>" + "<hr> <h4>Price: $" + city.price.toLocaleString() + "</h4>")
        .bindPopup(`
            <h2 class="${val.house_value}"> ${Math.round(val.predicted_price)}</h2>
            <hr>
            <h3>${val.city}, ${val.state}</h3>
            <h3>BB: ${val.beds},  ${val.baths}</h3>
        `)
        // .bindPopup("<h4>" + city.price.toLocaleString() + "</h4>")
        .addTo(map);
    })
})

