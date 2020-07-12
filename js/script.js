function initMap() {
    var bucuresti = {lat: 44.439663, lng: 26.096306}
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 11, center: bucuresti});

    var sector1Coords = [
        {lat: 44.434735, lng: 26.102685},
        {lat: 44.498678, lng: 25.997430},
        {lat: 44.531438, lng: 26.045784},
        {lat: 44.539542, lng: 26.107227},
        {lat: 44.437762, lng: 26.115466},
    ];

    var sector1 = new google.maps.Polygon({
        paths: sector1Coords,
        strokeColor: 'red',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: 'red',
        fillOpacity: 0.5,
    });
    sector1.setMap(map);

    var sector2Coords = [
        {lat: 44.437762, lng: 26.115466},
        {lat: 44.439696, lng: 26.183194},
        {lat: 44.480118, lng: 26.178609},
        {lat: 44.487608, lng: 26.111390},
    ];
    var sector2 = new google.maps.Polygon({
        paths: sector2Coords,
        strokeColor: 'orange',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: 'orange',
        fillOpacity: 0.5,
    });
    sector2.setMap(map);

    var sector3Coords = [
        {lat: 44.437762, lng: 26.115466},
        {lat: 44.439696, lng: 26.183194},
        {lat: 44.432792, lng: 26.225852},
        {lat: 44.398970, lng: 26.214788},
        {lat: 44.426425, lng: 26.110945},
    ];
    var sector3 = new google.maps.Polygon({
        paths: sector3Coords,
        strokeColor: 'yellow',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: 'yellow',
        fillOpacity: 0.5,
    });
    sector3.setMap(map);

    var sector4Coords = [
        {lat: 44.437762, lng: 26.115466},
        {lat: 44.426425, lng: 26.110945},
        {lat: 44.409424, lng: 26.175235},
        {lat: 44.381283, lng: 26.152166},
        {lat: 44.368379, lng: 26.091243},
        {lat: 44.434735, lng: 26.102685},
    ];
    var sector4 = new google.maps.Polygon({
        paths: sector4Coords,
        strokeColor: 'green',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: 'green',
        fillOpacity: 0.5,
    });
    sector4.setMap(map);

    var sector5Coords = [
        {lat: 44.368379, lng: 26.091243},
        {lat: 44.399523, lng: 25.983471},
        {lat: 44.434735, lng: 26.102685},
    ];
    var sector5 = new google.maps.Polygon({
        paths: sector5Coords,
        strokeColor: 'blue',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: 'blue',
        fillOpacity: 0.5,
    });
    sector5.setMap(map);

    var sector6Coords = [
        {lat: 44.399523, lng: 25.983471},
        {lat: 44.456942, lng: 25.966121},
        {lat: 44.498678, lng: 25.997430},
        {lat: 44.434735, lng: 26.102685},
    ];
    var sector6 = new google.maps.Polygon({
        paths: sector6Coords,
        strokeColor: 'indigo',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: 'indigo',
        fillOpacity: 0.5,
    });
    sector6.setMap(map);
};