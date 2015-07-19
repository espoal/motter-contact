Template.contact.helpers({
    contactMapOptions: function () {
        if ( GoogleMaps.loaded() ) {
            return mapOptions = {
                center: new google.maps.LatLng(51.541599, -0.112588),
                styles: [
                    {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [
                            {"visibility": "simplified"},
                            {"lightness": 20}]
                    },
                    {
                        "featureType": "administrative.land_parcel",
                        "elementType": "all",
                        "stylers": [
                            {"visibility": "off"}]
                    },
                    {
                        "featureType": "landscape.man_made",
                        "elementType": "all",
                        "stylers": [
                            {"visibility": "on"}]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {"saturation": -100},
                            {"visibility": "on"},
                            {"lightness": 10}]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "all",
                        "stylers": [{"visibility": "on"}]
                    },
                    {"featureType": "road.local", "elementType": "all", "stylers": [{"visibility": "on"}]},
                    {"featureType": "road.highway", "elementType": "labels", "stylers": [{"visibility": "simplified"}]},
                    {"featureType": "poi", "elementType": "labels", "stylers": [{"visibility": "off"}]},
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels",
                        "stylers": [{"visibility": "on"}, {"lightness": 50}]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [{"hue": "#a1cdfc"}, {"saturation": 30}, {"lightness": 49}]
                    },
                    {"featureType": "road.highway", "elementType": "geometry", "stylers": [{"hue": "#f49935"}]},
                    {"featureType": "road.arterial", "elementType": "geometry", "stylers": [{"hue": "#fad959"}]},
                    {
                        "featureType": 'road.highway',
                        elementType: 'all',
                        stylers: [{hue: '#dddbd7'}, {saturation: -92}, {lightness: 60}, {visibility: 'on'}]
                    },
                    {
                        "featureType": 'landscape.natural',
                        elementType: 'all',
                        stylers: [{hue: '#c8c6c3'}, {saturation: -71}, {lightness: -18}, {visibility: 'on'}]
                    },
                    {
                        "featureType": 'poi',
                        elementType: 'all',
                        stylers: [{hue: '#d9d5cd'}, {saturation: -70}, {lightness: 20}, {visibility: 'on'}]
                    }],
                zoom: 14,
                disableDefaultUI: true,
                scrollwheel: false,
                panControl: false,
                zoomControl: false,
                draggable: true
            };
        }

    }
});

Template.contact.onCreated(function () {



    /*if (!GoogleMaps.loaded()) {
        console.log('Loading GoogleMaps...');
        GoogleMaps.load();
        GoogleMaps.loadUtilityLibrary('js/richmarker.js');
        GoogleMaps.loadUtilityLibrary('js/infobox.js');
    }*/
    GoogleMaps.ready('contactMap', function (map) {

        console.log('contact map ready');

        var markerContent = document.createElement('DIV');
        markerContent.innerHTML =
            '<div class="map-marker">' +
            '<div class="icon"></div>' +
            '</div>';

        // Create marker on the map ------------------------------------------------------------------------------------

        var marker = new RichMarker({
            //position: mapCenter,
            position: map.options.center,
            map: map.instance,
            draggable: false,
            content: markerContent,
            flat: true
        });

        marker.content.className = 'marker-loaded';

    });


});

Template.contact.onRendered(function () {

    $('.map-canvas').attr('id', 'map-simple').addClass('map-contact');


});