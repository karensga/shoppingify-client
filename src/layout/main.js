import { useState } from 'react'
import MenuSide from '../components/MenuSide'
import Page from './page'
import ShoppingList from '../components/ShoppingList'
import FormProduct from '../components/FormProduct'

const main = ({ children }) => {

    const [openFormProduct, setOpenFormProduct] = useState(false)

    const handleChangeStateOpenFormProduct =  () => {
        setOpenFormProduct(!openFormProduct)
    }
    return (
        <div className="main">
            <MenuSide />
            <Page>
                {children}
            </Page> 
            {
                openFormProduct ? <FormProduct onActionCancel={handleChangeStateOpenFormProduct} />
                : <ShoppingList handleOpenForm={handleChangeStateOpenFormProduct} />
            }
            
        </div>
    )
}

export default main
