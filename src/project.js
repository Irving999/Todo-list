let projects = []

export default class Project {
    tasks = []

    constructor(title) {
        this.title = title
        projects.push(this)
    }

    addTask(task) {
        this.tasks.push(task)
    }
}