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

    const span = document.createElement("span")
    span.textContent = `⏱️ ${task.getDate()} ${task.getTime()}`

    taskli.appendChild(span)
}

function showAllTasks(container, array) {
    array.forEach(task => {
        displayTask(task, container)
    })
}

function loadTasks(tasksArray) {
    const main = document.querySelector(".main")
    main.textContent = ""

    const h1 = document.createElement("h1")
    tasksArray === tasks ? h1.textContent = "Tasks" : h1.textContent = "Today's Tasks"
    
    const container = document.createElement("ul")
    container.classList.add("tasks")
    container.classList.add("container")

    if (tasksArray.length === 0) {
        if (tasksArray === tasks) {
            container.textContent = "You have no tasks"
        } else {
            container.textContent = "You have no tasks today 😊"
        }
    } else {
        showAllTasks(container, tasksArray)
    }

    main.appendChild(h1)
    main.appendChild(container)
}

export { loadTasks, showAllTasks }