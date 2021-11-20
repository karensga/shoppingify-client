import { useState } from 'react'
import source from '../assets/source.svg'
import shopping from '../assets/shopping.svg'
import EditIcon from '@material-ui/icons/Edit'
import ListOfItemsCar from '../components/ListOfItemsCar'
import { useCar } from '../hooks/car'

const ShoppingList = ({ handleOpenForm }) => {

    const { carItem, deleteItem } = useCar()
    const [listItems, setListItems] = useState([])

    return (
        <div className="shoppingList">
            <div className="shoppingList__addList">
                <img src={source} alt="" />
                <div className="shoppingList__group">
                    <p>Didn’t find what you need?</p>
                    <button className="shoppingList__button" onClick={() => handleOpenForm()}>Add item</button>
                </div>
            </div>
            <div className="shoppingList__section">
                {
                    carItem.length > 0 ?
                        <>
                            <header className="shoppingList__section__header">
                                <h1>Shopping list</h1>
                                <button>
                                    <EditIcon className="shoppingList__section__header__icon" />
                                </button>
                            </header>
                            <ListOfItemsCar items={carItem} deleteProduct={deleteItem}/>
                        </>
                        :
                        <div className="shoppingList__noItems">
                            <p>No items</p>
                            <img src={shopping} alt="" />
                        </div>
                }

                <footer className="shoppingList__section__footer">
                    <div className="shoppingList__section__footer__input">
                        <input type="text" placeholder="Enter a name" />
                        <button>Save</button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default ShoppingList
