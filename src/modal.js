import "./styles.css"
import Todos from "./todos"

const task = document.querySelector(".create-task")
const dialog = document.querySelector("dialog")
const form = document.querySelector("form")
const closebtn = document.querySelector(".cancel")


task.addEventListener("click", () => dialog.showModal())

closebtn.addEventListener("click", () => {
    dialog.close()
    form.reset()
})

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const title = formData.get("task-title")
    const description = formData.get("task-description")
    const date = formData.get("task-date")
    const priority = formData.get("task-priority")

    const task = new Todos(title, description, date, priority)
    console.log(task)
    form.reset()
    dialog.close()
})