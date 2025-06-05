import { useEffect } from "react"

const withLogging = (WrappedComponent) => {

    const ComponentWithLoggin = (props) =>{
        useEffect(()=>{
            console.log(`${WrappedComponent.name} se montó`)
        },[])

        return <WrappedComponent {...props}/>
    }

    return ComponentWithLoggin
}

export default withLogging