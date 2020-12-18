import React from 'react'
import { 
    Click
    } from './ButtonStyles';

const Button = ({childrens}) => {
    return (
        <div>
            <Click>{childrens}</Click>
        </div>
    )
}

export default Button
