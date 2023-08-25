"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import APOD from '@/components/APOD/APOD';
import Loading from '@/components/Loading/Loading';

export default function Apod() {
    const [posts, setPosts] = useState();

    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=Ddr9gayDG796pK4ofrimoNazpZ2Zs3qFhs5lkgRe")
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
      <APOD data={posts}/>
    )
  }