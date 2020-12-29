import React from 'react'
import { Title } from '../MainStyles'

const LoginCreate = () => {
    return (
        <section className="animeLeft">
            <Title>Cadastre-se</Title>
            <form onSubmit={handleSubmit}></form>
        </section>
    )
}

export default LoginCreate
