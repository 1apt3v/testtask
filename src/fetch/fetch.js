export const getHouseData = async () => {
    return await fetch('http://localhost:8080/api/houseData')
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
            console.error(err)
            return { message: '404' }
        })
}

export const getHouseDataPage = async (page) => {
    return await fetch(`http://localhost:8080/api/houseData?page=${page}`)
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
            console.error(err)
            return { message: '404' }
        })
}


export const getCountHouses = async () => {
    return await fetch(`http://localhost:8080/api/housesCount`)
        .then(res => {
            return res.json()
        })
        .then(count => count[0].count)
        .catch(err => {
            console.error(err)
            return { message: '404' }
        })
}