import React from 'react'
import { 
    Head,
    Nav,
    Logo,
    Login,
} from './Header_styles'
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';


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
                    </Login>
                    </Link>

            </Nav>
        </Head>
    )
}

export default Header
