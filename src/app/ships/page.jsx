"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import ShipCard from '@/components/ShipCard/ShipCard';
import Loading from '@/components/Loading/Loading';

import styles from "./styles.module.css"
import { TEMPORARY_REDIRECT_STATUS } from 'next/dist/shared/lib/constants';

export default function Ships() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
        .get("https://api.spacexdata.com/v4/ships")
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
        <main className={styles.main}>
            {posts.map((item, index) => {
                return <ShipCard key={index} id={item.id} name={item.name} type={item.type}/>
                })}
        </main>
    )
}