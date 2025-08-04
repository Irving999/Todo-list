import "./styles.css"
import Todo from "./todos.js"
import Project from "./project.js"

const task = document.querySelector(".create-task")
const taskDialog = document.querySelector(".task-dialog")
const taskForm = document.querySelector(".task-form")
const taskCloseBtn = document.querySelector(".task.cancel")

task.addEventListener("click", () => taskDialog.showModal())

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
    const newTask = new Todo(title, description, date, priority)
    console.log(newTask)
    taskForm.reset()
    taskDialog.close()
})

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