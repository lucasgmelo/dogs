import React, {useEffect} from 'react'
import useFetch from '../../Hooks/useFetch'
import {PHOTOS_GET} from '../../services/Api'
import FeedPhotosItem from './FeedPhotosItem';
import Helper from '../Helper/Helper'
import Loading from '../Helper/Loading';

const FeedPhotos = () => {

    const {data, loading, error, request} = useFetch();

    useEffect(() => {
       
        async function fetchPhotos(){
            const{url, options} = PHOTOS_GET({page: 1, total: 6, user: 0});
            const {responde, json} = await request(url, options);
            console.log(json);
        }

        fetchPhotos();
    }, [request]);

    if(error) <Helper error={error} />
    if(loading) <Loading />
    if (data){ return (
        <ul>
            {data.map((photo) => {
                <FeedPhotosItem key={photo.id} photo={photo}/>
            })}
        </ul>
    )} else return <h1>Hi</h1>
    }

export default FeedPhotos
