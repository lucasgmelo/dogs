import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

const Field = styled.input`
  & {
    border: 1px solid #eee;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background-color: #eee;
    transition: 0.2s;
  }

  &:hover {
    outline: none;
    border-color: #fb1;
    background-color: white;
    box-shadow: 0 0 0 1px #fea;
  }

  &:focus {
    outline: none;
    border-color: #fb1;
    background-color: white;
    box-shadow: 0 0 0 1px #fea;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
`;

const Error = styled.p`
  font-size: 0.875rem;
  color: #f31;
  margin-top: 0.25rem;
`;

export { Wrapper, Field, Label, Error };
