# Geospasial Project Finder
## What is it ?
The frontend web app that allows user to search, view, add, and edit the geospasial project using data from MockAPI. This application also featured project location via map using Leaflet.js.
## The Features
| Feature         | Description |
|---------------|------------|
| 🔍 Search | Users can search projects by name |
| 📌 Edit | Modify project details via `/edit/:id` page |
| ❌ Delete | Remove projects dynamically from MockAPI |
| 🗺️ Map | Display project locations using Leaflet.js |
| ⚡ API | Uses MockAPI for project data management |

## Technology
- Html
- Tailwind css
- Mock API

## Display
| Feature         | Description | URL | Image |
|---------------|------------|------------|------------|
| Search Project by Name | Its allow user to search via name | http://127.0.0.1:your-port/ | ![Search Project by Name](https://freeimghost.net/images/2025/05/23/imagecfba5d9d66af626e.png) |
| Edit Project | Its allow user to edit the project | http://127.0.0.1:your-port/edit/editProject.html?id=idProject | ![Edit Project](https://freeimghost.net/images/2025/05/23/imaged603dce83c64697a.png) |
| Delete Project | Its allow user to delete the project | You can delete the project with click on marked button | ![Delete Project Map](https://freeimghost.net/images/2025/05/23/image7ac39b376a430a6c.png) |
| View Project Map | Its allow user to view project map | http://127.0.0.1:your-port/detail/detailProject.html?id=idProject | ![View Project Map](https://freeimghost.net/images/2025/05/23/imagee3f97a5ef2229349.png) |

## Running
1. Clone
``` git clone https://github.com/fauzihazim/Geospatial-Project-Finder.git ```
2. Go to the folder
``` cd Geospatial-Project-Finder ```
3. Install package and dependency
``` npm i ```
4. execute this command
``` npx @tailwindcss/cli -i ./input.css -o ./output.css --watch ```
5. Open with live server in vscode