import Logo from '../../assets/logo.svg'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined'
import ReplayOutlinedIcon from '@material-ui/icons/ReplayOutlined'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import Tooltip from '../Tooltip'
import { useCar } from '../../hooks/car'

import {Nav, Img, Ul, Li, Button, ItemsSignal} from './style'

const MenuSide = ({toggle}) => {

    const { carItem } = useCar()

    return (
        <Nav >
            <Img src={Logo} alt=""/>
            <Ul>
                <Li className="tooltip active">
                    <FormatListBulletedIcon className="main__menuSide__icons" />
                    <Tooltip>items</Tooltip>
                </Li>
                <Li className="tooltip">
                    <ReplayOutlinedIcon className="main__menuSide__icons" />
                    <span className="tooltiptext tooltip-right">history</span>
                </Li>
                <Li className="tooltip">
                    <AssessmentOutlinedIcon className="main__menuSide__icons" />
                    <span className="tooltiptext tooltip-right">statistics</span>
                </Li>
            </Ul>
            <Button onClick={toggle}>
                <ShoppingCartOutlinedIcon className="color" />
                <ItemsSignal>{carItem.length}</ItemsSignal>
            </Button>
        </Nav>
    )
}

export default MenuSide
