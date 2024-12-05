import { createContext } from 'react'

const AppContext = createContext({
    mesh: null,
    setAllGroups: () => { }
})

export default AppContext 