import axios from "axios"

const getCategories = () => {
    let url = 'http://localhost:3000/api/category'

    return axios.get(url)
}

export default getCategories
