function parseIdUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

async function updateProject() {
    const idProject = parseIdUrl();
    const apiUrl = `${baseUrl}/${idProject}`;
    const updatedName = document.getElementById("editName").value.trim();
    const updatedDescription = document.getElementById("editDescription").value.trim();
    if (!updatedName || !updatedDescription) {
        alert("Please fill in all fields.");
        return;
    }

    try {
        const response = await fetch(apiUrl, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: updatedName, description: updatedDescription })
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

// async function fetchEditingProject(projectId) {
//     const apiUrl = `${baseUrl}/${projectId}`;

//     try {
//         const response = await fetch(apiUrl);
//         const project = await response.json();
//         if (response.ok) {
//             console.log("Project: ", project);
//             const projectContainer = document.getElementById("idProject");
//             projectContainer.innerHTML = project.name;
//         } else {
//             console.error("failed to fetch");     
//         }
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// document.addEventListener("DOMContentLoaded", parseIdUrl);