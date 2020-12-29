import React from 'react'
import { Error } from "../Forms/Input/InputStyles";

const Helper = ({error}) => {

    if(!error) return null;
    return <Error>{error}</Error>
}

export default Helper
