import React from 'react'
import { 

} from './InputStyles'

const Input = ( {label, type, name} ) => {
    return <div>
        <label htmlFor={name}>{label}</label>
         <input id={name} name={name} type={type} />
        </div> 
}

export default Input
