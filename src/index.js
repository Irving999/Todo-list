import "./styles.css"
import { tasks, tasksToday } from "./todos.js"
import { loadTasks } from "./dom/renderTodo.js"
import { loadProjects } from "./dom/renderProjects.js"
import { setUpTaskModal, setUpProjectModal } from "./dom/modalHandlers.js"

// Displays tasks when 'View Tasks' is clicked
const viewTasks = document.querySelector(".view-tasks")
viewTasks.addEventListener("click", () => loadTasks(tasks))

// Displays tasks when 'Today' is clicked
const today = document.querySelector(".view-tasks-today")
today.addEventListener("click", () => loadTasks(tasksToday))

// Handles Modal form for tasks
const newTaskBtn = document.querySelector(".create-task")
newTaskBtn.addEventListener("click", () => setUpTaskModal())

// Displays projects when 'View Projects' is clicked
const viewProjects = document.querySelector(".view-projects")
viewProjects.addEventListener("click", () => loadProjects())

// Handles Modal form for projects
const newProjectBtn = document.querySelector(".create-project")
setUpProjectModal(newProjectBtn)