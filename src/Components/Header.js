import React, { useContext } from "react";
import { Head, Nav, Logo, Login } from "./MainStyles";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { ReactComponent as User } from "../Assets/usuario.svg";
import { UserContext } from "../UserContext";

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <Head>
      <Nav className="container">
        <Link to="/" aria-label="Dogs - Home">
          <Logo>
            <Dogs />
          </Logo>
        </Link>
        {data ? (
          <Link to="/conta">
          <Login>
            {data.nome}
            <User className="user" />
          </Login>
        </Link>
        ) : (
          <Link to="/login">
            <Login>
              Login / Criar
              <User className="user" />
            </Login>
          </Link>
        )}
      </Nav>
    </Head>
  );
};

export default Header;
