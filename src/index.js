import "./styles.css"
import { loadTasks } from "./dom/renderTodo.js"
import { loadProjects } from "./dom/renderProjects.js"
import { setUpTaskModal, setUpProjectModal } from "./dom/modalHandlers.js"

// Displays tasks when 'View Tasks' is clicked
const viewTasks = document.querySelector(".view-tasks")
viewTasks.addEventListener("click", () => loadTasks())

// Handles Modal form for tasks
const newTaskBtn = document.querySelector(".create-task")
setUpTaskModal(newTaskBtn)
loadTasks()

// Displays projects when 'View Projects' is clicked
const viewProjects = document.querySelector(".view-projects")
viewProjects.addEventListener("click", () => loadProjects())

// Handles Modal form for projects
const newProjectBtn = document.querySelector(".create-project")
setUpProjectModal(newProjectBtn)
loadProjects()