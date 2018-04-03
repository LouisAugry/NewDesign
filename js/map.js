document.addEventListener('DOMContentLoaded', initialize,false);

    function initialize() {
             directionsDisplay = new google.maps.DirectionsRenderer();
			map = new google.maps.Map(document.getElementById("map_canvas"), {
			      zoom: 19,
			      center: new google.maps.LatLng(46.1476498, -1.1571302),
			      mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            
		if (navigator.geolocation)
            var watchId = navigator.geolocation.watchPosition(successCallback, null, {maximumAge:120,enableHighAccuracy:true});
		else
			alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");
		};
	
		function successCallback(position){
			map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
			var depart = {
				position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude), 
			}; 

			var arriver = {
				position: new google.maps.LatLng(46.1476498,-1.1571302),
			}; 

		directionsDisplay.setMap(map);
		calculDestination(depart, arriver);
		};
                    
                function calculDestination(start, end) {
                        var request = {
                        origin:start.position,
                        destination:end.position,
    			travelMode: google.maps.TravelMode.DRIVING
  };
    var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });
}
