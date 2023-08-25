"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import ShipInfo from '@/components/ShipInfo/ShipInfo';
import Loading from '@/components/Loading/Loading';

export default function Ship({ params }) {
    const [posts, setPosts] = useState();

    useEffect(() => {
        axios
        .get(`https://api.spacexdata.com/v4/ships/${params.id}`)
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
        <ShipInfo data={posts} />
    )
}