import React, {useState, useEffect} from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {

    const [data, setData] = useState(null);
    const [login, setLogin] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function autoLogin(){
            const token = window.localStorage.getItem('token');
            if (token) {
                const {url, options} = TOKEN_VALIDATE_POST(token);
                const response = await fetch(url,options);
                console.log(response);
            }
        }
    }, []);

    async function getUser(token) {
        const {url, options} = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
        setLogin(true);
        console.log(json);
    }

    async function userLogin(username, password) {
        const { url, options } = TOKEN_POST({username, password});
        const tokenRes = await fetch(url, options);
        const token = await tokenRes.json();
        window.localStorage.setItem('token', token);
        getUser(token);
    }

    return (
        <UserContext.Provider value={{userLogin, data}} >{children}</UserContext.Provider>
    )
}

