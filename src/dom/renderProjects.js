import { projects } from "../project"
import { showAllTasks } from "../dom/renderTodo"
import { displaySidebarProjects } from "./handlers"

function displayProject(project, container) {
    const projectli = document.createElement("li")
    projectli.classList.add("project-item")

    const h4 = document.createElement("h4")
    h4.textContent = project.title

    const taskList = document.createElement("ul")
    taskList.classList.add("tasks")
    taskList.classList.add("container")

    const addTask = document.createElement("li")
    addTask.classList.add("add-task")
    addTask.dataset.projectTitle = project.title
    addTask.textContent = "Add task"

    showAllTasks(taskList, project.projectTasks)
    taskList.appendChild(addTask)
    projectli.appendChild(h4)
    projectli.appendChild(taskList)
    container.appendChild(projectli)
}

function showAllProjects(container) {
    projects.forEach(project => {
        displayProject(project, container)
    }) 
}

function loadProjects() {
    const main = document.querySelector(".main")
    main.textContent = ""

    const h1 = document.createElement("h1")
    h1.textContent = "Projects"

    const container = document.createElement("ul")
    container.classList.add("projects")
    container.classList.add("container")

    if (projects.length === 0) {
        container.textContent = "You have no projects"
    } else {
        showAllProjects(container)
    }

    main.appendChild(h1)
    main.appendChild(container)

    container.addEventListener("click", (e) => {
        if (e.target.classList.contains("add-task")) {
            const projectName = e.target.dataset.projectTitle
            const taskDialog = document.querySelector(".task-dialog")
            const taskForm = document.querySelector(".task-form")
            

            taskForm.dataset.projectTitle = projectName
            taskDialog.showModal()
        }
    })
}

export { loadProjects }