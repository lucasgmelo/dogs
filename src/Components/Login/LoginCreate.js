import React from 'react'
import { Title } from '../MainStyles'
import Input from '../Forms/Input/Input'
import Button from '../Forms/Button/Button'
import useForm from '../../Hooks/useForm'
import UserPost from '../../services/USER_POST'
import { UserContext } from '../../UserContext'
import useFetch from '../../Hooks/useFetch'
import Helper from '../Helper/Helper'

const LoginCreate = () => {
    const username = useForm();
    const email = useForm('email');
    const password = useForm();

    const {userLogin} = React.useContext(UserContext);
    const {loading, error, request} = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();
        const {url, options} = UserPost({
            username: username.value,
            email: email.value,
            password: password.value,

        });
        const { response } = await request(url, options);
        if(response.ok) userLogin(username.value, password.value);
        console.log(response);
    }

    return (
        <section className="animeLeft">
            <Title>Cadastre-se</Title>
            <form onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username}/>
                <Input label="Email" type="email" name="email" {...email}/>
                <Input label="Senha" type="password" name="password" {...password}/>

                {loading ? (
                <Button loading={true} childrens="Cadastrando..." />
                ) : (
                <Button loading={false} childrens="Cadastrar" />
                )}
                <Helper error={error} />
            </form>
        </section>
    )
}

export default LoginCreate
