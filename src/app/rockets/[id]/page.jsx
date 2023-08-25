"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import RocketInfo from '@/components/RocketInfo/RocketInfo';
import Loading from '@/components/Loading/Loading';

export default function Rockets({ params }) {
    const [posts, setPosts] = useState();

    useEffect(() => {
        axios
        .get(`https://api.spacexdata.com/v4/rockets/${params.id}`)
        .then((response) => {
            setPosts(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    if (!posts) {
        return <Loading />
    }

    return (
        <RocketInfo data={posts}/>
    )
}