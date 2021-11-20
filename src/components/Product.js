import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { useCar } from '../hooks/car'

const Product = ({ title, product }) => {

    const { addItem } = useCar()

    return (
        <div className="product">
            <p>{title}</p>
            <button className="product__btn" onClick={() => addItem(product)}>
                <AddOutlinedIcon className="iconoEnsayo"/>
            </button>
        </div >
    )
}

export default Product
