import { useEffect, useState } from 'react'
import getCategories from '../service/getCategories'
import ListProductOfCategory from './ListProductOfCategory'

const ListOfCategories = () => {

    const [categories, setCategories] = useState([])

    useEffect(async () => {
        const res = await getCategories().catch(err => console.log(err))
        setCategories(res.data)
    }, [])

    return (
        <div className="category">
            {
                categories?.map(category => (
                    <div key={category.name}>
                        <h1 className="category__title">{category.name}</h1>
                        <ListProductOfCategory id={category._id}/>
                    </div>
                ))
            }
        </div>
    )
}

export default ListOfCategories
