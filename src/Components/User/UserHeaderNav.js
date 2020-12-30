import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Forms/Button/Button'

const UserHeaderNav = () => {
    return (
        <nav>
            <NavLink to="/conta">Minhas Fotos</NavLink>
            <NavLink to="/conta/statistics" >Estatísticas</NavLink>
            <NavLink to="/conta/post">Adicionar fotos</NavLink>
            <Button childrens="Sair"/>
            
        </nav>
    )
}

export default UserHeaderNav
