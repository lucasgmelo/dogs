import styled from 'styled-components';

const Head = styled.header`
    box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, .1);
    padding: .5rem 0;
    position: fixed;
    width: 100%;
    z-index: 100;
    background: white;
    top: 0;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    padding: 0.5rem 0;
`;

const Login = styled.a`
    & {
        color: #333;
    }
    &:after {
        content: "";
        display: inline-block;
        width: 14px;
        height:17px;
        background: url('../Assets/usuario.svg')
    }
`;

export {
    Head,
    Nav,
    Logo,
    Login,
}