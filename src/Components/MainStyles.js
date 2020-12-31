import styled from "styled-components";

const Head = styled.header`
  box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  top: 0;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  margin: 0;
`;

const Logo = styled.div`
  padding: 0.5rem 0;
`;

const Login = styled.a`
  color: #333;
  display: flex;
`;

const Title = styled.h1`
  & {
    font-size: 3rem;
    font-family: var(--type-second);
    line-height: 1;
    margin: 1rem 0;
    position: relative;
  }

  &::after {
    content: "";

    display: block;

    width: 1.5rem;
    height: 1.5rem;

    background-color: #fb1;

    position: absolute;

    bottom: 5px;
    left: -5px;

    border-radius: 0.2rem;

    z-index: -1;
  }
`;

const Subtitle = styled.h2`
  & {
    font-family: var(--type-second);
    line-height: 1;
    font-size: 2rem;
  }
  &::after {
    content: "";
    display: block;
    background: #ddd;
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`;

export { Head, Nav, Logo, Login, Title, Subtitle };
