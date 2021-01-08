import React, {useEffect} from 'react'
import useFetch from '../../Hooks/useFetch'
import {PHOTOS_GET} from '../../services/Api'
import FeedPhotosItem from './FeedPhotosItem';
import Helper from '../Helper/Helper'

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

    {error && <Helper error={error} />}
    {loading && <Loading />}
    return (
        <div>
            <FeedPhotosItem />
        </div>
    )
}

export default FeedPhotos
