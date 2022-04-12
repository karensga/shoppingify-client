import { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ListOfCategories from '../../components/ListOfCategories'
import MainLayout from '../../layout/main'

const Items = () => {
  const [openFormProduct, setOpenFormProduct] = useState(false)

    const handleChangeStateOpenFormProduct = () => setOpenFormProduct(!openFormProduct)

    return (
        <MainLayout>
            <header className="main__header">
                <h1><span className="main__header__span">Shoppingify</span> allows you take your shopping list wherever you go</h1>
                <div className="main__search">
                    <input type="text" placeholder="search item" />
                    <SearchIcon className="main__search__icon" width="18px" height="18px" />
                </div>
            </header>
            <ListOfCategories />
        </MainLayout>
    )
}

export default Items