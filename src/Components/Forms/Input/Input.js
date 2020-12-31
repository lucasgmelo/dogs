import React from "react";
import Helper from "../../Helper/Helper";
import { Wrapper, Field, Label } from "./InputStyles";

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
      <Helper error={error} />
    </Wrapper>
  );
};

export default Input;
