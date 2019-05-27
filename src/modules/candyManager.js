const remoteURL = "https://kandykorner-5a913.firebaseio.com"

export default {
    getAll() {
        return fetch(`${remoteURL}/candies.json?print=pretty`).then(e => e.json())
            .then(e => {
                const data = e
                return Object.keys(data).map(key => {
                    return { id: key, ...data[key] }
                })
            })

    },
    get(id) {
        return fetch(`${remoteURL}/candies/${id}.json?print=pretty`).then(e => e.json())
            .then(e => {
                const data = e
                return { id: id, ...data }
            })
        // .then(e => console.log(e))
    },
    getAllTypes() {
        return fetch(`${remoteURL}/candyTypes.json?print=pretty`).then(e => e.json())
    },
    deleteCandy(id) {
        return fetch(`${remoteURL}/candies/${id}.json`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application.json'
            }
        })
            .then(e => e.json())
    },
    post(candy) {
        return fetch(`${remoteURL}/candies.json`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(candy)
        }).then(e => e.json)
    },
    put(editedCandy) {
        const candyPut = {
            name: editedCandy.name,
            typeId: editedCandy.typeId
        }
        return fetch(`${remoteURL}/candies/${editedCandy.id}.json`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(candyPut)
        }).then(data => data.json());
    }
}