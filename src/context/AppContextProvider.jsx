import AppContext from './AppContext'
import { useState } from 'react'

export default function AppContextProvider({ children }) {
    const [mesh, setMesh] = useState(null)

    return <AppContext.Provider value={{ mesh, setMesh }}>{children}</AppContext.Provider>
}
