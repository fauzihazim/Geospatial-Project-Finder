// import { baseUrl } from "./baseUrl.js";

// Display projects in table
function displayProjects(projects) {
    const projectContainer = document.getElementById("projectTable");
    projectContainer.innerHTML = "";
    let number = 0;

    projects.forEach(project => {
        number++;
        const table = `
            <tbody>
                <tr class="hover:bg-blue-200">
                    <td class="text-center p-4" onclick="goToDetailPage(${project.id})">${number}</td>
                    <td class="text-center p-4" onclick="goToDetailPage(${project.id})">${project.name}</td>
                    <td class="text-center p-4" onclick="goToDetailPage(${project.id})">${project.description}</td>
                    <td class="border border-gray-300 p-2">
                        <button class="bg-red-500 text-white p-1 rounded" onclick="deleteProject(${project.id})">
                            Delete
                        </button>
                        <button class="bg-blue-500 text-white p-1 rounded" onclick="goToEditPage(${project.id})">
                            Edit
                        </button>
                    </td>
                </tr>
            </tbody>
        `
        projectContainer.innerHTML += table;
    });
}

// Fetch and Search Projects
async function fetchProjects() {
    const searchValue = document.getElementById("searchBox").value.trim();
    console.log("Baseurl ", baseUrl);
    const apiUrl = searchValue ? `${baseUrl}?name=${encodeURIComponent(searchValue)}` : baseUrl;
    try {
        const response = await fetch(apiUrl);
        const projects = await response.json();
        if (response.ok) {
            displayProjects(projects);
        } else {
            console.error("failed to fetch");     
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Delete project
async function deleteProject(projectId) {
    const apiUrl = `${baseUrl}/${projectId}`;
    try {
        const response = await fetch(apiUrl, {
            method: "DELETE"
        });

        if (response.ok) {
            alert("Project deleted successfully!");
            fetchProjects(); // Refresh table after deletion
        } else {
            alert("Error deleting project.");
        }
    } catch (error) {
        console.error("Error deleting project:", error);
    }
}

function goToEditPage(projectId) {
    window.location.href = `/edit/editProject.html?id=${projectId}`;
}

function goToDetailPage(projectId) {
    window.location.href = `/detail/detailProject.html?id=${projectId}`;
}

document.addEventListener("DOMContentLoaded", fetchProjects);