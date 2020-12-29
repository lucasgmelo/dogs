import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input/Input";
import Button from "../Forms/Button/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import { Title, Subtitle } from "../MainStyles";
import Helper from "../Helper/Helper";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading, setLoading } = React.useContext(
    UserContext
  );

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Title>Login</Title>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        {loading ? (
          <Button loading={true} childrens="Carregando..." />
        ) : (
          <Button loading={false} childrens="Entrar" />
        )}

        <Helper error={error} />
      </form>
      <Link className={styles.lost} to="/login/lost">Perdeu a senha?</Link>
      <div className={styles.register}>
        <Subtitle>Cadastre-se</Subtitle>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
      </div>
      <Link classname={styles.button}to="/login/create">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
