import Logo from '../assets/logo.svg'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined'
import ReplayOutlinedIcon from '@material-ui/icons/ReplayOutlined'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import Tooltip from './Tooltip'
import { useCar } from '../hooks/car'

const MenuSide = () => {

    const { carItem } = useCar()

    return (
        <nav className="main__menuSide">
            <img src={Logo} alt="" className="menuSide__logo" />
            <ul>
                <li className="tooltip active">
                    <FormatListBulletedIcon className="main__menuSide__icons" />
                    <Tooltip>items</Tooltip>
                </li>
                <li className="tooltip">
                    <ReplayOutlinedIcon className="main__menuSide__icons" />
                    <span className="tooltiptext tooltip-right">history</span>
                </li>
                <li className="tooltip">
                    <AssessmentOutlinedIcon className="main__menuSide__icons" />
                    <span className="tooltiptext tooltip-right">statistics</span>
                </li>
            </ul>
            <button className="btn-rounded">
                <ShoppingCartOutlinedIcon className="color" />
                <span className="btn__ping">{carItem.length}</span>
            </button>
        </nav>
    )
}

export default MenuSide
