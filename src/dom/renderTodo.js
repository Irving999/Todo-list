import { tasks } from "../todos"

function displayTask(task, container) {
    const taskli = document.createElement("li")
    taskli.classList.add("task-item")
    taskli.textContent = task.title

    switch (task.priority) {
        case "high":
            taskli.classList.add("high-priority")
          break;
        case "medium":
            taskli.classList.add("medium-priority")
          break;
        case "low":
            taskli.classList.add("low-priority")
            break;
        default:
            taskli.classList.add("no-priority")
      }

    container.appendChild(taskli)
}

function showAllTasks(container, array) {
    array.forEach(task => {
        displayTask(task, container)
    })
}

function loadTasks() {
    const main = document.querySelector(".main")
    main.textContent = ""

    const h1 = document.createElement("h1")
    h1.textContent = "Tasks"
    
    const container = document.createElement("ul")
    container.classList.add("tasks")
    container.classList.add("container")

    if (tasks.length === 0) {
        container.textContent = "You have no tasks"
    } else {
        showAllTasks(container, tasks)
    }

    main.appendChild(h1)
    main.appendChild(container)
}


export { loadTasks, showAllTasks }