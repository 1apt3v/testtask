export const getHouseData = async () => {
    return await fetch('http://localhost:8080/api/houseData')
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
            console.error(err)
            return { message: '404' }
        })
}