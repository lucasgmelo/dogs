import React from 'react'
import { 
    Wrapper,
    Field,
    Label,
} from './InputStyles'

const Input = ( {label, type, name} ) => {
    return <Wrapper>
        <Label htmlFor={name}>{label}</Label>
         <Field id={name} name={name} type={type} />
        </Wrapper> 
}

export default Input
