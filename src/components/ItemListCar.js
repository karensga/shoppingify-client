import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import { useCar } from '../hooks/car'

const ItemListCar = ({ product, deleteProduct }) => {

    const { updateItem } = useCar()

    const handleMost = () => {
        const value = product.cantidad + 1
        updateItem(product._id, value)
    }

    const handleRest = () => {
        const value = product.cantidad - 1
        if (value > 0) {
            updateItem(product._id, value)
        }
    }

    return (
        <div className="itemProduct">
            <p className="text-md">{product.name}</p>
            <div className="itemProductEdit">
                <button className="itemEditButtonDelete" onClick={() => deleteProduct(product._id)}>
                    <DeleteOutlinedIcon />
                </button>
                <div>
                    <button onClick={handleRest}> - </button>
                    <span>{product.cantidad} pcs</span>
                    <button onClick={handleMost}> + </button>
                </div>
            </div>
        </div>
    )
}

export default ItemListCar
