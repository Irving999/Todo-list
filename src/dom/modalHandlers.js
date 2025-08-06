import { handleTaskFormSubmit, handleProjectFormSubmit } from "./handlers.js"

function setUpTaskModal(elementClicked) {
    const taskForm = document.querySelector(".task-form")
    const taskDialog = document.querySelector(".task-dialog")
    const taskCloseBtn = document.querySelector(".task.cancel")

    elementClicked.addEventListener("click", () => {
        taskDialog.showModal()
    })

    taskCloseBtn.addEventListener("click", () => {
        taskDialog.close()
        taskForm.reset()
    })

    taskForm.onsubmit = (e) => {
        const projectName = taskForm.dataset.projectTitle
        handleTaskFormSubmit(e, taskForm, taskDialog, projectName)
    }
}

function setUpProjectModal(elementClicked) {
    const projectDialog = document.querySelector(".project-dialog")
    const projectForm = document.querySelector(".project-form")
    const projectCloseBtn = document.querySelector(".project.cancel")

    elementClicked.addEventListener("click", () => projectDialog.showModal())

    projectCloseBtn.addEventListener("click", () => {
        projectDialog.close()
        projectForm.reset()
    })

    projectForm.addEventListener("submit", (e) => {
        handleProjectFormSubmit(e, projectForm, projectDialog)
    })
}

export { setUpTaskModal, setUpProjectModal }