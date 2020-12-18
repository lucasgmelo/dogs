import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input/Input';
import Button from '../Forms/Button/Button';


const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit (event) {
        event.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                "Content-Type": 'application-json'
            },
            body: JSON.stringify({username, password}),
        }).then(response => {
            console.log(response);
            return response.json();
        }).then(json => {
            console.log(json);
        })
    }

    const [isDisabled, setIsDisabled] = useState();

    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}> 
                <Input label='Usuário' type='text' name='username'/>
                <Input label='Senha' type='password' name='password'/>
                <Button childrens='Enviar'></Button>        
            </form>
            <Link to="/login/create" >Cadastro</Link>
        </section>
    )
}

export default LoginForm
