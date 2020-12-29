import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import styles from './Login.module.css';

const Login = () => {
    const {login} = useContext(UserContext);

    if(login) return <Navigate to='/conta' /> 

    return (
        <section className={styles.login}>
            <div className={styles.forms}> 
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="create" element={<LoginCreate />} />
                    <Route path="lost" element={<LoginPasswordLost />} />
                    <Route path="reset" element={<LoginPasswordReset />} />
                </Routes>
            </div>
        </section>
    )
}

export default Login
