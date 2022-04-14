import { useState, useEffect } from 'react'
import InputCustom from '../InputCustom'
import SelectCustom from '../SelectCustom'
import getCategories from '../../service/getCategories'
import createProduct from '../../service/createProduct'
import Loading from '../Loading'
import { useForm, Controller } from 'react-hook-form'

import { Container, Title, Footer, ButtonCancel, ButtonSave } from './style'

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
        <Container onSubmit={handleSubmit(handleCreateProduct)}>
            <Title>Add a new item</Title>
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
            <Footer>
                <ButtonCancel onClick={() => onActionCancel()}>cancel</ButtonCancel>
                <ButtonSave type="submit" disabled={loadingAddProduct}>
                    {loadingAddProduct ? <Loading text={'saving'} /> : 'Save'}
                </ButtonSave>
            </Footer>
        </Container>
    )
}

export default FormProduct
