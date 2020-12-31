import React, {useState, useEffect} from 'react'
import { Title } from '../MainStyles'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'

const UserHeader = () => {
    const [title, setTitle] = useState('');
    const location = useLocation();

    useEffect(() => {
        const {pathname} = location;
        switch(pathname) {
            case '/conta/estatisticas': 
                setTitle('Estatísticas');
                break;
            case '/conta/post': 
                setTitle('Poste Sua Foto');
                break;
            default:
                setTitle('Minha Conta');
        }
    }, [location]);

    return (
        <header className={styles.header}>
            <Title>{title}</Title>
            <UserHeaderNav />
        </header>
    )
}

export default UserHeader
