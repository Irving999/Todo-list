export let tasks = []

export default class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }

    addToGeneralTasks() {
        tasks.push(this)
    }

    addTaskToProject(project) {
        project.projectTasks.push(this)
        console.log(project)
    }
}