import { useState, useEffect } from 'react'
import getProductsByCategory from '../service/getProductsByCategory'
import Product from './Product'

const ListProductOfCategory = ({ id }) => {

    const [products, setProducts] = useState([])

    useEffect(async () => {
        const res = await getProductsByCategory({ id }).catch(err => console.log(err))
        setProducts(res.data)
    }, [])

    return (
        <div className="productList">
            {
                products?.map(product => <Product key={product.name} title={product.name} product={product}/>)
            }
        </div>
    )
}

export default ListProductOfCategory
