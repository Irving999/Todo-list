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

    const date = getDateTime(task)
    const span = document.createElement("span")
    span.textContent = `⏱️ ${date.hrMin}`
    console.log(task.dueDate)

    taskli.appendChild(span)
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

//Displays time of task
function getDateTime(task) {
    const date = new Date(task.dueDate);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const period = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;

    const hrMin = `${hours}:${minutes}${period}`;

    return { year, month, day, hrMin };
}

export { loadTasks, showAllTasks }