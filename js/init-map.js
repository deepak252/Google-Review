// const _0x254190 = _0x33c7; (function (_0x29194e, _0x138093) { const _0x1fd070 = _0x33c7, _0xe4305f = _0x29194e(); while (!![]) { try { const _0x2c9655 = -parseInt(_0x1fd070(0x195)) / 0x1 + -parseInt(_0x1fd070(0x187)) / 0x2 * (-parseInt(_0x1fd070(0x198)) / 0x3) + parseInt(_0x1fd070(0x184)) / 0x4 * (parseInt(_0x1fd070(0x180)) / 0x5) + parseInt(_0x1fd070(0x1a0)) / 0x6 + -parseInt(_0x1fd070(0x17d)) / 0x7 * (parseInt(_0x1fd070(0x1ab)) / 0x8) + -parseInt(_0x1fd070(0x197)) / 0x9 + parseInt(_0x1fd070(0x19c)) / 0xa; if (_0x2c9655 === _0x138093) break; else _0xe4305f['push'](_0xe4305f['shift']()); } catch (_0x48213c) { _0xe4305f['push'](_0xe4305f['shift']()); } } }(_0x30fd, 0xce257)); function _0x30fd() { const _0x397f35 = ['namedItem', 'place_id', '19852TcRrPO', 'mykeyofgoogleapi', 'name', '2540930bBxPyu', 'createElement', 'Marker', 'value', '12sZUsxC', 'setFields', 'place-name', '1879314pTmKHg', 'children', 'place-id', 'viewport', 'addListener', 'location', 'text/javascript', 'geometry', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBQaV0oxAlyDYyWdVjbKK_K9_kQatta14s&callback=initMap&libraries=places&v=weekly&channel=2', 'formatted_address', 'getElementById', 'click', 'setZoom', 'appendChild', '1421593UuynWy', 'onload', '6674202qDuOBg', '3GYiIWu', 'open', 'getPlace', 'fitBounds', '7284160aZJMEB', 'places', 'setPlace', 'review-link', '4538802SlnGqp', 'bindTo', 'bounds', 'close', 'body', 'Autocomplete', 'maps', 'pac-input', 'setVisible', 'setContent', 'http://search.google.com/local/writereview?placeid=', '2656dQlADm', 'setCenter', 'infowindow-content', 'Map', 'textContent', 'InfoWindow']; _0x30fd = function () { return _0x397f35; }; return _0x30fd(); } function _0x33c7(_0x454e97, _0x453dad) { const _0x30fdb8 = _0x30fd(); return _0x33c7 = function (_0x33c77d, _0x501574) { _0x33c77d = _0x33c77d - 0x179; let _0x5d2615 = _0x30fdb8[_0x33c77d]; return _0x5d2615; }, _0x33c7(_0x454e97, _0x453dad); } function initMap() { const _0x742caa = _0x33c7, _0x444df3 = new google['maps'][(_0x742caa(0x1ae))](document['getElementById']('map'), { 'center': { 'lat': -33.8688, 'lng': 151.2195 }, 'zoom': 0xd }), _0x1dc842 = document[_0x742caa(0x191)](_0x742caa(0x1a7)), _0x5b15ae = new google[(_0x742caa(0x1a6))][(_0x742caa(0x19d))][(_0x742caa(0x1a5))](_0x1dc842); _0x5b15ae[_0x742caa(0x1a1)](_0x742caa(0x1a2), _0x444df3), _0x5b15ae[_0x742caa(0x185)](['place_id', 'geometry', _0x742caa(0x190), _0x742caa(0x17f)]); const _0xdb32b5 = new google['maps'][(_0x742caa(0x17a))](), _0x55a361 = document[_0x742caa(0x191)](_0x742caa(0x1ad)); _0xdb32b5[_0x742caa(0x1a9)](_0x55a361); const _0x462b77 = new google['maps'][(_0x742caa(0x182))]({ 'map': _0x444df3 }); _0x462b77[_0x742caa(0x18b)](_0x742caa(0x192), () => { _0xdb32b5['open'](_0x444df3, _0x462b77); }), _0x5b15ae[_0x742caa(0x18b)]('place_changed', () => { const _0x59850d = _0x742caa; _0xdb32b5[_0x59850d(0x1a3)](); const _0x382b5d = _0x5b15ae[_0x59850d(0x19a)](); if (!_0x382b5d[_0x59850d(0x18e)] || !_0x382b5d[_0x59850d(0x18e)]['location']) return; _0x382b5d[_0x59850d(0x18e)]['viewport'] ? _0x444df3[_0x59850d(0x19b)](_0x382b5d['geometry'][_0x59850d(0x18a)]) : (_0x444df3[_0x59850d(0x1ac)](_0x382b5d['geometry'][_0x59850d(0x18c)]), _0x444df3[_0x59850d(0x193)](0x11)), _0x462b77[_0x59850d(0x19e)]({ 'placeId': _0x382b5d['place_id'], 'location': _0x382b5d[_0x59850d(0x18e)]['location'] }), _0x462b77[_0x59850d(0x1a8)](!![]), _0x55a361[_0x59850d(0x188)]['namedItem'](_0x59850d(0x186))[_0x59850d(0x179)] = _0x382b5d[_0x59850d(0x17f)], _0x55a361[_0x59850d(0x188)][_0x59850d(0x17b)](_0x59850d(0x189))[_0x59850d(0x179)] = _0x382b5d[_0x59850d(0x17c)], _0x55a361[_0x59850d(0x188)][_0x59850d(0x17b)]('place-address')[_0x59850d(0x179)] = _0x382b5d['formatted_address'], document[_0x59850d(0x191)](_0x59850d(0x19f))[_0x59850d(0x183)] = _0x59850d(0x1aa) + _0x382b5d['place_id'], generateQR(_0x59850d(0x1aa) + _0x382b5d[_0x59850d(0x17c)]), _0xdb32b5[_0x59850d(0x199)](_0x444df3, _0x462b77); }); } var GOOGLE_MAP_KEY = _0x254190(0x17e); function loadScript() { const _0x362fb6 = _0x254190; var _0x1be327 = document[_0x362fb6(0x181)]('script'); _0x1be327['type'] = _0x362fb6(0x18d), _0x1be327['src'] = _0x362fb6(0x18f), document[_0x362fb6(0x1a4)][_0x362fb6(0x194)](_0x1be327); } window[_0x254190(0x196)] = loadScript;










// This sample uses the Place Autocomplete widget to allow the user to search
// for and select a place. The sample then displays an info window containing
// the place ID and other information about the place that the user has
// selected.
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&libraries=places">

function initMap (){
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 13,
    });
    const input = document.getElementById("pac-input");
    const autocomplete = new google.maps.places.Autocomplete(input);
  
    autocomplete.bindTo("bounds", map);
    // Specify just the place data fields that you need.
    autocomplete.setFields(["place_id", "geometry", "formatted_address", "name"]);
  //   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input); //****EDIT******//
  
    const infowindow = new google.maps.InfoWindow();
    const infowindowContent = document.getElementById("infowindow-content");
  
    infowindow.setContent(infowindowContent);
  
    const marker = new google.maps.Marker({ map: map });
  
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
    autocomplete.addListener("place_changed", () => {
      infowindow.close();
  
      const place = autocomplete.getPlace();
  
      if (!place.geometry || !place.geometry.location) {
        return;
      }
  
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }
  
      // Set the position of the marker using the place ID and location.
      marker.setPlace({
        placeId: place.place_id,
        location: place.geometry.location,
      });
      marker.setVisible(true);
      infowindowContent.children.namedItem("place-name").textContent = place.name;
      infowindowContent.children.namedItem("place-id").textContent =
        place.place_id;
      infowindowContent.children.namedItem("place-address").textContent =
        place.formatted_address;
      
      document.getElementById("review-link").value="http://search.google.com/local/writereview?placeid="+place.place_id  //****EDIT******//
      validateBusinessAddress()
      // generateQR("http://search.google.com/local/writereview?placeid=" + place.place_id)
      infowindow.open(map, marker);
    });
}



var GOOGLE_MAP_KEY = "mykeyofgoogleapi";

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBk7fcJxKbBe_EoyCYnFODDuykojXnuc3Y&callback=initMap&libraries=places&v=weekly&channel=2`
  document.body.appendChild(script);
}
window.onload = loadScript;