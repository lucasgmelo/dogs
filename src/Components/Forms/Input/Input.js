import React from "react";
import { Wrapper, 
         Field, 
         Label, 
         Error 
        } from "./InputStyles";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <Field
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default Input;
