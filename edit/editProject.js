function parseIdUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

async function updateProject() {
    const idProject = parseIdUrl();
    const apiUrl = `${baseUrl}/${idProject}`;
    const updatedName = document.getElementById("editName").value.trim();
    const updatedDescription = document.getElementById("editDescription").value.trim();
    const updatedLatitude = Number(document.getElementById("editLatitude").value.trim());
    const updatedLongitude = Number(document.getElementById("editLongitude").value.trim());
    console.log("Update Latitude ", updatedLatitude, " Update Longitude ", updatedLongitude);
    
    if (!updatedName || !updatedDescription || updatedLatitude === "" || updatedLongitude === "" || isNaN(updatedLatitude) || isNaN(updatedLatitude)) {
        alert("Please fill in all fields.");
        return;
    }

    try {
        const response = await fetch(apiUrl, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: updatedName, description: updatedDescription, latitude: updatedLatitude, longitude: updatedLongitude })
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

function backToIndex() {
    window.location.href = "/";
}