// Carte de France
let carte = L.map('mapid').setView([47.6, 2.5], 6);

// Fond de carte
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(carte);

// Marqueur pour Angers
let marker = L.marker([47.47073700, -055247200]);

// Ajout carte
marker.addTo(carte);

// Bulle texte
marker.bindTooltip('Angers', {
    direction: "top",
    permanent: true,
    offset: [-15,-15],
    opacity: 0.6
}).openTooltip