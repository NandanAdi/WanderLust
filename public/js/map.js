 
  mapboxgl.accessToken =mapToken;
  const map = new mapboxgl.Map({
      container: 'map', // container ID
      center: listing.geometry.coordinates, // starting position [lng, lat]
      zoom: 9 // starting zoom
  });
  

  const marker = new mapboxgl.Marker({color:"red"})
  .setLngLat(listing.geometry.coordinates) 
  .setPopup (new mapboxgl.Popup({ closeOnClick: false })
  .setHTML(`<h4>${listing.location}</h4><p>Location will be provided after booking!</p>`)) //Listing.geometry.coordinates
  .addTo(map);