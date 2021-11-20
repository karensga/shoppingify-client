import { createContext, useState } from 'react'

export default ({ children }) => {

    const [carItem, setCarItem] = useState([])

    return <CarContext.Provider value={[carItem, setCarItem]}>{children}</CarContext.Provider>
}

export const CarContext = createContext()