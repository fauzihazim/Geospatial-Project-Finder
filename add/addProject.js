async function addProject() {
    const apiUrl = baseUrl;
    const addedName = document.getElementById("addName").value.trim();
    const addedDescription = document.getElementById("addDescription").value.trim();
    const addedLatitude = parseFloat(document.getElementById("addLatitude").value.trim());
    const addedLongitude = parseFloat(document.getElementById("addLongitude").value.trim());

    if (!addedName || !addedDescription || addedLatitude === "" || addedLongitude === "" || isNaN(addedLatitude) || isNaN(addedLatitude)) {
        alert("Please fill in all fields.");
        return;
    };

    if (!(isValidLatitude(addedLatitude) && isValidLongitude(addedLongitude))) {
        alert("Latitude must between -90 and 90 and Longitude must between -180 and 180");
        return;
    }

    const newProject = {
        name: addedName,
        description: addedDescription,
        latitude: addedLatitude,
        longitude: addedLongitude
    };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProject)
        });

        if (response.ok) {
            alert("Project added successfully!");
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