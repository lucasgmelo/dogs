import styled from "styled-components";

const Click = styled.button`
  & {
    font-size: 1rem;
    font-family: var(--type-first);

    cursor: ${(props) => props.disabled ? 'wait' : 'pointer'};

    border: none;
    border-radius: 0.4rem;

    background-color: #fb1;
    color: #764701;

    min-width: 8rem;
    padding: 0.8rem 1.2rem;

    box-sizing: border-box;

    transition: 0.1s;

    opacity: ${(props) => props.disabled ? 0.5 : 1};
  }
  &:hover {
    outline: none;
    box-shadow: 0 0 0 1px #fea, 0 0 0 2px #fb1;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px #fea, 0 0 0 2px #fb1;
  }
  &:disabled{
      opacity: 0.5;
      cursor: wait;
  }
`;

export { Click };
