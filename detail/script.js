function parseIdUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Main function to initialize the map
async function initMap() {
    const idProject = parseIdUrl();
    if (!idProject) {
        return console.error("Id is null");
    }
    
    const apiUrl = `${baseUrl}/${idProject}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            return console.error("Project not found.");
        };
        const project = await response.json();
        // Create map instance
        const map = createMap('map', [project.latitude, project.longitude], 13);
        // Add tile layer
        addTileLayer(map);
        // Add map Marker
        addMarker(map, [project.latitude, project.longitude], `<b>${project.name}</b><br>${project.description}`);
    } catch (error) {
        console.error("Error project not found:", error);
    }
}

// Function to create and configure the map
function createMap(elementId, centerCoords, zoomLevel) {
    return L.map(elementId).setView(centerCoords, zoomLevel);
}

// Function to add the tile layer to the map
function addTileLayer(map) {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

// Function to add a marker with popup
function addMarker(map, coords, popupContent) {
    const marker = L.marker(coords).addTo(map);
    if (popupContent) {
        marker.bindPopup(popupContent).openPopup();
    }
    return marker;
}

// Initialize the map when the script loads
document.addEventListener('DOMContentLoaded', initMap);