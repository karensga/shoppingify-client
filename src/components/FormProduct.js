import { useState, useEffect } from 'react'
import InputCustom from '../components/InputCustom'
import SelectCustom from '../components/SelectCustom'
import getCategories from '../service/getCategories'
import createProduct from '../service/createProduct'
import Loading from '../components/Loading'
import { useForm, Controller } from 'react-hook-form'

const FormProduct = ({ onActionCancel }) => {

    const { handleSubmit, control } = useForm()
    const [categories, setCategories] = useState([])
    const [loadingAddProduct, setLoadingAddProduct] = useState(false)

    useEffect(async () => {
        const res = await getCategories().catch(err => console.log(err))
        setCategories(res.data)
    }, [])

    const handleCreateProduct = async (product) => {
        setLoadingAddProduct(true)
        const res = await createProduct({ product }).catch(err => console.log(err))
        setLoadingAddProduct(false)
        if(res?.data) onActionCancel()
    }

    return (
        <form className="formProduct" onSubmit={handleSubmit(handleCreateProduct)}>
            <h1>Add a new item</h1>
            <Controller
                render={({ field }) => <InputCustom {...field} title={'Name'} placeholderText={'Enter a name'} />}
                name="name"
                control={control}
                rules={{ required: true }}

            />

            <Controller
                render={({ field }) => <InputCustom {...field} title={'Note (optional)'} placeholderText={'Enter a note'} height={11} />}
                name="note"
                control={control}

            />

            <Controller
                render={({ field }) => <InputCustom {...field} title={'Image (optional)'} placeholderText={'Enter a url'} />}
                name="image"
                control={control}
            />

            <Controller
                render={({ field }) => <SelectCustom {...field} title={'Category'} placeholderText={'Enter a category'} options={categories} />}
                name="idCategory"
                control={control}
                rules={{ required: true }}
            />
            <footer className="formProduct__footer">
                <button className="formProduct__footer__button-cancel" onClick={() => onActionCancel()}>cancel</button>
                <button type="submit" disabled={loadingAddProduct} className="formProduct__footer__button-save">
                    {loadingAddProduct ? <Loading text={'saving'} /> : 'Save'}
                </button>
            </footer>
        </form>
    )
}

export default FormProduct
