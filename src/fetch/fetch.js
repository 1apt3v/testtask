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
        .then(count => count)
        .catch(err => {
            console.error(err)
            return { message: '404' }
        })
}

export const getFilteredHouses = async (currentPage, filters, sortValue) => {
    const url = `http://localhost:8080/api/houseWithFilterData`
    const arrQueryParams = ['?', `page=${currentPage}`]
    const keysFilters = Object.keys(filters)
    const valuesFilters = Object.values(filters)

    if (sortValue.length > 0) {
        arrQueryParams.push(`&sortvalue=${sortValue}`)
    }

    arrQueryParams.push('&')
    for (let i = 0; i < Object.keys(filters).length; i++) {
        arrQueryParams.push(`${keysFilters[i].toLocaleLowerCase()}=${valuesFilters[i]}`)
        if (!(i === Object.keys(filters).length - 1)) {
            arrQueryParams.push('&')
        }
    }


    const stringQueryParams = arrQueryParams.join('')
    const newUrl = url + stringQueryParams
    console.log(newUrl)


    // если фильтры пустые


    return await fetch(newUrl)
        .then(res => {
            return res.json()
        })
        .then(data => data)
        .catch(err => {
            console.error(err)
            return { message: '404' }
        })
}