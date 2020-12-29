import React from 'react'
import { Title } from '../MainStyles'
import Input from '../Forms/Input/Input'
import Button from '../Forms/Button/Button'


const LoginCreate = () => {

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <section className="animeLeft">
            <Title>Cadastre-se</Title>
            <form onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username"/>
                <Button childrens="Cadastrar"/>
            </form>
        </section>
    )
}

export default LoginCreate
