import React from 'react'
import { 
    Head,
    Nav,
    Logo,
    Login
} from './Header_styles'
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { ReactComponent as User } from '../Assets/usuario.svg';


const Header = () => {
    return (
        <Head>
            <Nav className="container" >
                <Link to="/" aria-label="Dogs - Home" >
                    <Logo>
                        <Dogs />
                    </Logo>
                </Link>
                <Link to="/login">
                    <Login>
                        Login / Criar
                        <User className="user" />
                    </Login>
                    </Link>

            </Nav>
        </Head>
    )
}

export default Header
