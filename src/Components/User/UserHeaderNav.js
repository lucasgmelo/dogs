import React, { useContext, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import styles from "./UserHeader.module.css";
import { ReactComponent as Feed } from "../../Assets/feed.svg";
import { ReactComponent as Estatísticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as Photo } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia("(max-width:40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {

    setMobileMenu(false);
    
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button 
        aria-label="Menu" 
        className={`${styles.menuMobile}
         ${mobileMenu && styles.menuMobileActive}`}
        onClick={() => setMobileMenu(!mobileMenu)}>
        </button>
      )}

      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/conta" end activeClassName={styles.active}>
          <Feed />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas" activeClassName={styles.active}>
          <Estatísticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/post" activeClassName={styles.active}>
          <Photo />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
