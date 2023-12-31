"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import CompanyInfo from '@/components/CompanyInfo/CompanyInfo';
import Loading from '@/components/Loading/Loading';

export default function Home() {
  const [posts, setPosts] = useState();

    useEffect(() => {
        axios
        .get("https://api.spacexdata.com/v4/company")
        .then((response) => {
            setPosts(response.data);
            console.log(response.data)
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    if (!posts) {
        return <Loading />
    }

  return (
    <CompanyInfo data={posts}/>
  )
}
