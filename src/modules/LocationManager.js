const remoteURL = "https://kandykorner-5a913.firebaseio.com"

export default {
    getAll() {
        return fetch(`${remoteURL}/storeLocations.json?print=pretty`).then(e => e.json())
    }
}