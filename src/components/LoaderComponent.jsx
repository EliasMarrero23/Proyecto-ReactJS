import React from 'react'
import { Spinner } from 'react-bootstrap'
import { BarLoader } from 'react-spinners'

const LoaderComponent = () => {
  return (
    <div style={{width:'100%', height:'85vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <BarLoader color='orange'/>
    </div>
  )
}

export default LoaderComponent