import styled from 'styled-components';

const Head = styled.header`
    box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, .1);
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
    height: 4rem;
`;

const Logo = styled.div`
    padding: 0.5rem 0;
`;

const Login = styled.a`
        color: #333;
`;

export {
    Head,
    Nav,
    Logo,
    Login,
}