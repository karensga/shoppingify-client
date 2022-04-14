import axios from "axios"

const getProductsByCategory = ({ id }) => {
    let url = `http://192.168.100.53:3000/api/product/${id}`

    return axios.get(url)
}

export default getProductsByCategory
