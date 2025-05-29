function parseIdUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

async function updateProject() {
    const idProject = parseIdUrl();
    const apiUrl = `${baseUrl}/${idProject}`;
    const updatedName = document.getElementById("editName").value.trim();
    const updatedDescription = document.getElementById("editDescription").value.trim();
    const updatedLatitude = parseFloat(document.getElementById("editLatitude").value.trim());
    const updatedLongitude = parseFloat(document.getElementById("editLongitude").value.trim());
    console.log("Update Latitude ", updatedLatitude, " Update Longitude ", updatedLongitude);
    
    if (!updatedName || !updatedDescription || updatedLatitude === "" || updatedLongitude === "" || isNaN(updatedLatitude) || isNaN(updatedLatitude)) {
        alert("Please fill in all fields.");
        return;
    }

    if (!(isValidLatitude(updatedLatitude) && isValidLongitude(updatedLongitude))) {
        alert("Latitude must between -90 and 90 and Longitude must between -180 and 180");
        return;
    }

    const updateProject = {
        name: updatedName,
        description: updatedDescription,
        latitude: updatedLatitude,
        longitude: updatedLongitude
    };

    try {
        const response = await fetch(apiUrl, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateProject)
        });

        if (response.ok) {
            alert("Project updated successfully!");
            backToIndex();
        } else {
            alert("Error updating project.");
        }
    } catch (error) {
        console.error("Error updating project:", error);
    }
}

function isValidLatitude(latitude) {
    if (latitude < -90 || latitude > 90) {
        return false;
    };
    return true;
}

function isValidLongitude(longitude) {
    if (longitude < -180 || longitude > 180) {
        return false;
    };
    return true;
}

function backToIndex() {
    window.location.href = "/";
}