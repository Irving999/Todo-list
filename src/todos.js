let tasks = []
let tasksToday = []

export default class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority

        if (this.isToday()) {
            tasksToday.push(this)
        }
        console.log(`Today's tasks: ${tasksToday}`)
        console.log(`General tasks: ${tasks}`)
    }

    addToGeneralTasks() {
        tasks.push(this)
    }

    addTaskToProject(project) {
        project.projectTasks.push(this)
        console.log(project)
    }

    isToday() {
        const now = new Date()
        const todaysDate = now.toISOString().split("T")[0]
        
        const date = getDateTime(this)
        const taskDate = `${date.year}-${date.month}-${date.day}`

        if (todaysDate === taskDate) {
            return true
        }
        return false
    }

    getDate() {
        const date = getDateTime(this)
        return `${parseInt(date.month)}/${parseInt(date.day)}/${parseInt(date.year)}`
    }

    getTime() {
        return `${getDateTime(this).hrMin}`
    }
}

function getDateTime(task) {
    const date = new Date(task.dueDate);

    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")

    let hours = date.getHours()
    const minutes = String(date.getMinutes()).padStart(2, "0")

    const period = hours >= 12 ? "pm" : "am"
    hours = hours % 12 || 12

    const hrMin = `${hours}:${minutes}${period}`

    return { year, month, day, hrMin }
}

export { tasks, tasksToday }