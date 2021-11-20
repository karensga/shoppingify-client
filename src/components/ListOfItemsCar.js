import ItemListCar from '../components/ItemListCar'

const ListOfItemsCar = ({ items, deleteProduct }) => {

    return (
        <div className="listOfItemCar">
            {
                items?.map(item => (
                    <ItemListCar product={item} key={item._id} deleteProduct={deleteProduct}/>
                ))
            }
        </div>
    )
}

export default ListOfItemsCar