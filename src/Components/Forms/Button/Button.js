import React, {useState} from 'react'
import { 
    Click
    } from './ButtonStyles';

    
    const Button = ({childrens}) => {
        
        const [isDisabled, setIsDisabled] = useState(false);

    return (
        <div>
            <Click disabled={isDisabled}>{childrens}</Click>
        </div>
    )
}

export default Button
