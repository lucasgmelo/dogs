import React from 'react'
import styles from './UserPhotoPost.module.css'
import Input from '../Forms/Input/Input'
import Button from '../Forms/Button/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'


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
                <Input label="Nome" type="text" name="nome" />
                <Input label="Peso" type="text" name="peso" />
                <Input label="Idade" type="text" name="idade" />
                <input type="file" name="img" id="img" onChange={handleImgChange}/>

                <Button childrens="enviar"/>
            </form>

        </section>
    )
}

export default UserPhotoPost
