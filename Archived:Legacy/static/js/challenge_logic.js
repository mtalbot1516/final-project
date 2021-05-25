// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// We create the second tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

//DARKVIEW INSERT HERE
// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 12,
  accessToken: API_KEY
});

// Create the map object with center, zoom level and default layer. CHANGE TO NASHVILLE

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
var marker = L.marker([36.055, -86.678], {
  city: "Antioch",
  state: "TN",
  street: "Shihmen",
  price : 295000 
}).addTo(map);

// WE CAN REMOVE THIS STATIC POPUP WE ARE USING A LOOP FUNCTION NOW. 
//marker.bindPopup("Demo House #1<br> City: Antioch<br>State: TN<br> Street: Shihmen<br> Price : $295,000");



// Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
  console.log(city)
  L.marker(city.location).addTo(map);
});

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.marker(city.location).addTo(map);
});


// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.marker(city.location)
  //.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Street " + city.street + "</h3>")
 //.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Street " + city.street  + "</hr3>" + "<hr> <h4>Price: $" + city.price.toLocaleString() + "</h4>")
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>BB: " + city.BB + " " +  "</h3> <hr> <h3>Street " + city.street  + "</hr3>" + "<hr> <h3>Price: $" + city.price.toLocaleString() + "</h3>")
  //.bindPopup("<h4>" + city.price.toLocaleString() + "</h4>")
  .addTo(map);
});


// L. (data,{
//   pointToLayer: function(feature, latlng) {
//     console.log(data);
//     return L.circleMarker(latlng);
//   },  
  

// style: styleInfo,
// onEachFeature: function (feature, layer) {
//   layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
// }
// }).addTo(map);



// citiesData.forEach(function(cities) {
//   console.log(cities)
//   L.circleMarker(cities.location, {
//       radius:city.state/100000
//   })
//   .bindPopup("<h2>" + cities.city + ", " + cities.state + "</h2> <hr> <h3>Population " + cities.population.toLocaleString() + "</h3>")
//   .addTo(map);  
// });




//.openPopup()

// 1. Add a 2nd & 3rd layer group for the tectonic plate data.
//let allEarthquakes = new L.LayerGroup();
//let tectonicplates = new L.LayerGroup();
//let majorEarthquakes = new L.LayerGroup();

// // 2. Add a reference to the tectonic plates and major earth quakes group to the overlays object.
// let overlays = {
//   "Earthquakes": allEarthquakes,
//   "TectonicPlates": tectonicplates,
//   "Major Earthquakes": majorEarthquakes,
// };

// Then we add a control to the map that will allow the user to change which
// layers are visible.
// L.control.layers(baseMaps, overlays).addTo(map);

// Retrieve the earthquake GeoJSON data.
//d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function (data) {
  // // This function returns the style data for each of the earthquakes we plot on
  // // the map. We pass the magnitude of the earthquake into two separate functions
  // // to calculate the color and radius.
  // function styleInfo(feature) {
  //   return {
  //     opacity: 1,
  //     fillOpacity: 1,
  //     fillColor: getColor(feature.properties.mag),
  //     color: "#000000",
  //     radius: getRadius(feature.properties.mag),
  //     stroke: true,
  //     weight: 0.5
  //   };
  // }

  // // This function determines the color of the marker based on the magnitude of the earthquake.
  // function getColor(magnitude) {
  //   if (magnitude > 5) {
  //     return "#ea2c2c";
  //   }
  //   if (magnitude > 4) {
  //     return "#ea822c";
  //   }
  //   if (magnitude > 3) {
  //     return "#ee9c00";
  //   }
  //   if (magnitude > 2) {
  //     return "#eecc00";
  //   }
  //   if (magnitude > 1) {
  //     return "#d4ee00";
  //   }
  //   return "#98ee00";
  // }

//   // This function determines the radius of the earthquake marker based on its magnitude.
//   // Earthquakes with a magnitude of 0 were being plotted with the wrong radius.
//   function getRadius(magnitude) {
//     if (magnitude === 0) {
//       return 1;
//     }
//     return magnitude * 4;
//   }

//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data, {
//     // We turn each feature into a circleMarker on the map.
//     pointToLayer: function (feature, latlng) {
//       console.log(data);
//       return L.circleMarker(latlng);
//     },
//     // We set the style for each circleMarker using our styleInfo function.
//     style: styleInfo,
//     // We create a popup for each circleMarker to display the magnitude and location of the earthquake
//     //  after the marker has been created and styled.
//     onEachFeature: function (feature, layer) {
//       layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
//     }
//   }).addTo(allEarthquakes);

//   // Then we add the earthquake layer to our map.
//   allEarthquakes.addTo(map);

//   // Here we create a legend control object.
//   let legend = L.control({
//     position: "bottomright"
//   });

//   // Then add all the details for the legend
//   legend.onAdd = function () {
//     let div = L.DomUtil.create("div", "info legend");

//     const magnitudes = [0, 1, 2, 3, 4, 5];
//     const colors = [
//       "#98ee00",
//       "#d4ee00",
//       "#eecc00",
//       "#ee9c00",
//       "#ea822c",
//       "#ea2c2c"
//     ];

//     // Looping through our intervals to generate a label with a colored square for each interval.
//     for (var i = 0; i < magnitudes.length; i++) {
//       console.log(colors[i]);
//       div.innerHTML +=
//         "<i style='background: " + colors[i] + "'></i> " +
//         magnitudes[i] + (magnitudes[i + 1] ? "&ndash;" + magnitudes[i + 1] + "<br>" : "+");
//     }
//     return div;
//   };

//   // Finally, we our legend to the map.
//   legend.addTo(map);


//   // Use d3.json to make a call to get our Tectonic Plate geoJSON data.

//   //ask for tutoring help here!!!!
//   //I SHOULD BE ABLE TO DO THIS WITH JUST USING THE d3.json!!!
//   // Accessing the Tectonicplates GeoJSON URL.
//   let tectonicData = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

//   //Create a style for the lines.  #3388ff
//   let myStyle = { color: "#3388ff", weight: 3 }

//   // Retrieve the tectonic GeoJSON data.
//   d3.json(tectonicData).then(function (data) {
//     // Creating a GeoJSON layer with the retrieved data.
//     L.geoJson(data, {
//       style: myStyle
//     }).addTo(tectonicplates);

//     // Then we add the tectonic layer to our map.
//     tectonicplates.addTo(map);
//   }); // I closed out the d3.json tectonic hear?????

//     //**************START HERE ************//    



    
//     // Deliverable 2 starting step 3. 
//     // 3. Retrieve the major earthquake GeoJSON data >4.5 mag for the week.

//     d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson").then(function (data) {
//       console.log(data)
//       // 4. Use the same style as the earthquake data.
//       function styleInfo(feature) {
//         return {
//           opacity: 1,
//           fillOpacity: 1,
//           fillColor: getColor(feature.properties.mag),
//           color: "#000000",
//           radius: getRadius(feature.properties.mag),
//           stroke: true,
//           weight: 0.5
//         };
//       }

//       // 5. Change the color function to use three colors for the major earthquakes based on the magnitude of the earthquake.
//       // This function determines the color of the marker based on the magnitude of the earthquake.
//       function getColor(magnitude) {
//         if (magnitude > 5) {
//           return "#ea2c2c";
//         }
//         if (magnitude > 4.5) {
//           return "#ea822c";
//         }
//         return "#98ee00";
//       }
//         // 6. Use the function that determines the radius of the earthquake marker based on its magnitude.
//         function getRadius(magnitude) {
//           if (magnitude === 0) {
//             return 1;
//           }
//           return magnitude * 4;
//         }
//         // 7. Creating a GeoJSON layer with the retrieved data that adds a circle to the map 
//         // sets the style of the circle, and displays the magnitude and location of the earthquake
//         //  after the marker has been created and styled.
//         // Creating a GeoJSON layer with the retrieved data.
//         L.geoJson(data, {
//           // We turn each feature into a circleMarker on the map.
//           pointToLayer: function (feature, latlng) {
//             console.log(data);
//             return L.circleMarker(latlng);
//           },
//           // We set the style for each circleMarker using our styleInfo function.
//           style: styleInfo,
//           // We create a popup for each circleMarker to display the magnitude and location of the earthquake
//           //  after the marker has been created and styled.
//           onEachFeature: function (feature, layer) {
//             layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
//           }
//         }).addTo(majorEarthquakes);

//         //Then we add the tectonic layer to our map.
//         majorEarthquakes.addTo(map);

//       }
//     );
  
  
// });