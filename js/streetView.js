streetViewModulo = (function () {
  var panorama // 'Visor' de StreetView
  var map

  function inicializar () {
        /* Completar la función inicializar() que crea un panorama
        en una posición y lo muestra en la página. */
        var posicion = {lat: -34.6037389, lng: -58.3815704};

        map = new google.maps.Map(document.getElementById('map'), {
          center: posicion,
          zoom: 14
        });

        panorama = new google.maps.StreetViewPanorama(
          document.getElementById('pano'), {
            position: posicion,
            pov: {
              heading: 34,
              pitch: 10
            }
        });
        
        map.setStreetView(panorama);
  }

    // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {
        /* Completar la función fijarStreetView que actualiza la posición
         de la variable panorama y cambia el mapa de modo tal que se vea
         el streetView de la posición actual. */
        panorama.setPosition(ubicacion)
        map.setStreetView(panorama)
  }

  return {
    inicializar,
    fijarStreetView
  }
})()
