import axios from "axios"

const getCategories = () => {
    let url = 'http://192.168.100.53:3000/api/category'

    return axios.get(url)
}

export default getCategories
