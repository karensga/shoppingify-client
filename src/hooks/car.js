import { useState, useContext } from 'react'
import { CarContext } from '../context/car'

export function useCar() {

    const [carItem, setCarItem] = useContext(CarContext)

    const addItem = (product) => {
        setCarItem([...carItem, { ...product, cantidad: 1 }])
    }

    const deleteItem = (id) => {
        const newList = carItem.filter(item => id !== item._id)
        setCarItem(newList)
    }

    const updateItem = (id, cantidad) => {
        const newList = carItem.map(item => id === item._id ? { ...item, cantidad } : item)
        setCarItem(newList)
    }

    return { addItem, deleteItem, updateItem, carItem }
}