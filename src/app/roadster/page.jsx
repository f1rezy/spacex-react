"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import RoadsterInfo from '@/components/RoadsterInfo/RoadsterInfo';
import Loading from '@/components/Loading/Loading';

export default function Roadster() {
    const [posts, setPosts] = useState();

    useEffect(() => {
        axios
        .get("https://api.spacexdata.com/v4/roadster")
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
      <RoadsterInfo data={posts}/>
    )
}