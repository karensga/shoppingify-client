import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { useCar } from '../../hooks/car'

import {Container, Button, Title} from './style'

const Product = ({ title, product }) => {

    const { addItem } = useCar()

    return (
        <Container>
            <Title>{title}</Title>
            <Button onClick={() => addItem(product)}>
                <AddOutlinedIcon className="icon"/>
            </Button>
        </Container >
    )
}

export default Product
