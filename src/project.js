export let projects = []

export default class Project {
    projectTasks = []

    constructor(title) {
        this.title = title
        projects.push(this)
    }
}