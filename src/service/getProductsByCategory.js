import axios from "axios"

const getProductsByCategory = ({ id }) => {
    let url = `http://localhost:3000/api/product/${id}`

    return axios.get(url)
}

export default getProductsByCategory
