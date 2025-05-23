async function updateProject() {
    // const idProject = parseIdUrl();
    const apiUrl = baseUrl;
    const addedName = document.getElementById("addName").value.trim();
    const addedDescription = document.getElementById("addDescription").value.trim();
    const addedLatitude = document.getElementById("addLatitude").value.trim();
    const addedLongitude = document.getElementById("addLongitude").value.trim();
    console.log("Added Name ", addedName, " added Decription ", addedDescription, " Update Latitude ", addedLatitude, " Update Longitude ", addedLongitude);
    
    if (!addedName || !addedDescription || addedLatitude === "" || addedLongitude === "" || isNaN(addedLatitude) || isNaN(addedLatitude)) {
        alert("Please fill in all fields.");
        return;
    };

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

function backToIndex() {
    window.location.href = "/";
}