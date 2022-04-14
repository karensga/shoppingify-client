import { useState } from 'react'
import source from '../../assets/source.svg'
import shopping from '../../assets/shopping.svg'
import EditIcon from '@material-ui/icons/Edit'
import ListOfItemsCar from '../ListOfItemsCar'
import { useCar } from '../../hooks/car'

import {Container, Header, Img, TextHeader, HeaderContainer, Button, Main, HeaderMain, HeaderTitle, HeaderMainButton, ContainerNoItems, TextNoItems, ImageNoItems, Footer, WrapperInput, Input, ButtonSave} from './style'

const ShoppingList = ({ handleOpenForm }) => {

    const { carItem, deleteItem } = useCar()
    const [listItems, setListItems] = useState([])

    return (
        <Container>
            <Header >
                <Img src={source} alt="" />
                <HeaderContainer>
                    <TextHeader>Didn’t find what you need?</TextHeader>
                    <Button onClick={() => handleOpenForm()}>Add item</Button>
                </HeaderContainer>
            </Header>
            <Main>
                {
                    carItem.length > 0 ?
                        <>
                            <HeaderMain>
                                <HeaderTitle>Shopping list</HeaderTitle>
                                <HeaderMainButton>
                                    <EditIcon className="icon" />
                                </HeaderMainButton>
                            </HeaderMain>
                            <ListOfItemsCar items={carItem} deleteProduct={deleteItem}/>
                        </>
                        :
                        <ContainerNoItems>
                            <TextNoItems>No items</TextNoItems>
                            <ImageNoItems src={shopping} alt="" />
                        </ContainerNoItems>
                }

                <Footer>
                    <WrapperInput>
                        <Input type="text" placeholder="Enter a name" />
                        <ButtonSave>Save</ButtonSave>
                    </WrapperInput>
                </Footer>
            </Main>
        </Container>
    )
}

export default ShoppingList
