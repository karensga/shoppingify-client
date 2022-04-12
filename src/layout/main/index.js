import { useState } from 'react'
import MenuSide from '../../components/MenuSide'
import ShoppingList from '../../components/ShoppingList'
import FormProduct from '../../components/FormProduct'

import { Container, Page } from './style'

const main = ({ children }) => {

    const [openFormProduct, setOpenFormProduct] = useState(false)

    const handleChangeStateOpenFormProduct =  () => {
        setOpenFormProduct(!openFormProduct)
    }
    return (
        <Container>
            <MenuSide />
            <Page>
                {children}
            </Page> 
            {/* {
                openFormProduct ? <FormProduct onActionCancel={handleChangeStateOpenFormProduct} />
                : <ShoppingList handleOpenForm={handleChangeStateOpenFormProduct} />
            } */}
            
        </Container>
    )
}

export default main
