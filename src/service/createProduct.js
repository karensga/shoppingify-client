import axios from 'axios'

const createProduct = ({ product }) => {
    const apiUrl = 'http://192.168.100.53:3000/api/product'

    return axios.post(apiUrl, product)
}

export default createProduct