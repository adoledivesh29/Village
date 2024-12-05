import './style.css'
import ReactDOM from 'react-dom/client'
import Experience from './Experience.jsx'
import AppContextProvider from './context/AppContextProvider'
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <AppContextProvider>
        <Experience />
    </AppContextProvider>
)