import React, {useState} from 'react'
import styles from './UserPhotoPost.module.css'
import Input from '../Forms/Input/Input'
import Button from '../Forms/Button/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import {PHOTO_POST} from '../../services/Api'


const UserPhotoPost = () => {
    const nome = useForm();
    const peso = useForm('number');
    const idade = useForm('number');
    const [img, setImg] = useState({});
    const {data, error, loading, request} = useFetch();


    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append('img', img.raw);
        formData.append('nome', nome.value);
        formData.append('peso', peso.value);
        formData.append('idade', idade.value);

        const token = window.localStorage.getItem('token');
        const {url, options} = PHOTO_POST(formData, token);
        request(url, options);
    }

    function handleImgChange({target}){
        setImg({
            raw: target.files[0],

        })
    }

    return (
        <section className={`${styles.photoPost} animeLeft`}>

            <form onSubmit={handleSubmit}>
                <Input label="Nome" type="text" name="nome" {...nome}/>
                <Input label="Peso" type="number" name="peso" {...peso}/>
                <Input label="Idade" type="number" name="idade" {...idade}/>
                <input type="file" name="img" id="img" onChange={handleImgChange}/>

                <Button childrens="enviar"/>
            </form>

        </section>
    )
}

export default UserPhotoPost
