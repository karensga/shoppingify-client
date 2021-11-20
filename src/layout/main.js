import { useState } from 'react'
import MenuSide from '../components/MenuSide'
import Page from './page'
import ShoppingList from '../components/ShoppingList'

const main = ({ children }) => {

    const [openFormProduct, setOpenFormProduct] = useState(false)

    const handleChangeStateOpenFormProduct =  () => {
        
    }
    return (
        <div className="main">
            <MenuSide />
            <Page>
                {children}
            </Page>
            <ShoppingList handleOpenForm={handleChangeStateOpenFormProduct} />
            {/* {
                true && <ShoppingList handleOpenForm={handleChangeStateOpenFormProduct} />
            }
            {
                false && <FormProduct onActionCancel={handleChangeStateOpenFormProduct} />
            } */}
        </div>
    )
}

export default main
