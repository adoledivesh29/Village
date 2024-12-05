import { useContext, useEffect } from 'react'
import AppContext from '../../context/AppContext'  // Fix the import path

export default function YourOtherComponent() {
    const { allGroups } = useContext(AppContext)

    useEffect(() => {
        if (allGroups.length > 0) {
            allGroups.forEach(group => {
                console.log('Group:', group.name)
                group.children.forEach(mesh => {
                    if (mesh.isMesh) {
                        console.log('Mesh:', mesh.name)
                    }
                })
            })
        }
    }, [allGroups])

    return null
}