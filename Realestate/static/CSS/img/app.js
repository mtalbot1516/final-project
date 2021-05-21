var mymap = L.map('mapid').setView([36.162, -86.781], 13);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);
    coords = [[36.055,-86.678], [36.029,-86.697], [36.075,-86.705], [36.031,-86.697], [36.086,-86.628], [36.019,-86.725]];
    price =  ['395K $', '275K $', '390K $', '235K $', '479K $']

    //areas
    area = ["80 m2", "50 m2", "35 m2", "60 m2", "70 m2", "25 m2"]

    //rooms
    rooms = [4, 2, 1, 3, 4, 1]
    //outside




    let l = coords.length;
    // markers
    for (let i = 0; i < l; i++) {
        //popups
        var pop = L.popup({
            closeOnClick:true
        }).setContent('text');



        var marker = L.marker(coords[i]).addTo(mymap).bindPopup(pop);
        //labels
        var toollip = L.tooltip({
            permanent: true
        }).setContent(rent[i]);
        marker.bindTooltip(toollip)

    }


