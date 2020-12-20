import React, {useState} from 'react'
import { 
    Click
    } from './ButtonStyles';

    
    const Button = ({childrens, loading}) => {

    return (
        <div>
            {loading ? <Click disabled={true}>{childrens}</Click> : <Click disabled={false}>{childrens}</Click>}
        </div>
    )
}

export default Button
