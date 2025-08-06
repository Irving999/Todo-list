import Todo, { tasks } from "../todos.js"
import Project, { projects } from "../project.js"

import { loadTasks } from "./renderTodo.js"
import { loadProjects } from "./renderProjects.js"

function handleTaskFormSubmit(e, form, dialog, projectName) {
    e.preventDefault()

    const formData = new FormData(form)
    const title = formData.get("task-title")
    const description = formData.get("task-description")
    const date = formData.get("task-date")
    const priority = formData.get("task-priority")
    const newTask = new Todo(title, description, date, priority)

    if (projectName !== undefined) {
        const project = projects.find(project => project.title === projectName)        
        newTask.addTaskToProject(project)
        loadProjects()
    } else {
        newTask.addToGeneralTasks()
        loadTasks()
    }
    form.reset()
    dialog.close()
}

function handleProjectFormSubmit(e, form, dialog) {
    e.preventDefault()

    const formData = new FormData(form)
    const projectTitle = formData.get("project-title")
    new Project(projectTitle)
    
    loadProjects()
    form.reset()
    dialog.close()
}

export { handleTaskFormSubmit, handleProjectFormSubmit }