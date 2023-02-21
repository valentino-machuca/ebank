

export const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => json)
    .catch(e => {throw e})
}