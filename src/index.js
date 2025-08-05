import "./styles.css"
import Todo, { tasks } from "./todos.js"
import Project, { projects } from "./project.js"
import { showAllTasks } from "./dom/renderTodo.js"

// Displays tasks when 'View Tasks' is clicked
const viewTasks = document.querySelector(".view-tasks")
viewTasks.addEventListener("click", () => showAllTasks())

// Handles Modal form for tasks
const createTask = document.querySelector(".create-task")
const taskDialog = document.querySelector(".task-dialog")
const taskForm = document.querySelector(".task-form")
const taskCloseBtn = document.querySelector(".task.cancel")

createTask.addEventListener("click", () => taskDialog.showModal())

taskCloseBtn.addEventListener("click", () => {
    taskDialog.close()
    taskForm.reset()
})

taskForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(taskForm)
    const title = formData.get("task-title")
    const description = formData.get("task-description")
    const date = formData.get("task-date")
    const priority = formData.get("task-priority")
    new Todo(title, description, date, priority)
    showAllTasks()
    taskForm.reset()
    taskDialog.close()
})

// Handles Modal form for projects
const project = document.querySelector(".create-project")
const projectDialog = document.querySelector(".project-dialog")
const projectForm = document.querySelector(".project-form")
const projectCloseBtn = document.querySelector(".project.cancel")

project.addEventListener("click", () => projectDialog.showModal())

projectCloseBtn.addEventListener("click", () => {
    projectDialog.close()
    projectForm.reset()
})

projectForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(projectForm)
    const projectTitle = formData.get("project-title")
    const newProject = new Project(projectTitle)

    console.log(newProject)
    projectForm.reset()
    projectDialog.close()
})