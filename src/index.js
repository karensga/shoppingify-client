import ReactDOM from 'react-dom'
import App from './App'
import CarContextProvider from './context/car'
import './style.css'

ReactDOM.render(
    <CarContextProvider>
        <App />
    </CarContextProvider>,
    document.getElementById('root')
)