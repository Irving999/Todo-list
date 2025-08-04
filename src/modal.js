const task = document.querySelector(".create-task")
const dialog = document.querySelector("dialog")
const form = document.querySelector("form")
const closebtn = document.querySelector(".cancel")


task.addEventListener("click", () => dialog.showModal())

closebtn.addEventListener("click", () => {
    dialog.close()
    form.reset()
})
