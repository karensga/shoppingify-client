import axios from 'axios'

const createProduct = ({ product }) => {
    const apiUrl = 'http://localhost:3000/api/product'

    return axios.post(apiUrl, product)
}

export default createProduct