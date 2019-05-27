const remoteURL = "https://kandykorner-5a913.firebaseio.com"

export default {
    getAll() {
        return fetch(`${remoteURL}/employees.json?print=pretty`).then(e => e.json())
    }
}