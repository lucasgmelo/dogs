import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input/Input";
import Button from "../Forms/Button/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from '../../UserContext';
import {
  Title,
} from "../MainStyles"
import Helper from "../Helper/Helper";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const {userLogin, error, loading, setLoading} = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Title>Login</Title>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />

        <Input label="Senha" type="password" name="password" {...password} />

        {/* {setLoading(false)} */}
        {loading ? <Button loading={true} childrens="Carregando..." /> : <Button loading={false} childrens="Entrar"/>}
        
        <Helper error={error} />
      </form>
      <Link to="/login/create">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
