"use client";

import { Image } from 'antd';
import styles from "./style.module.css"

export default function APOD({ data }) {

    return (
        <main className={styles.container}>
            <h1>Astronomy Picture of the Day</h1>
            <h2>{data.title}</h2>
            <Image.PreviewGroup
                preview={{
                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}
            >
                <div className={styles.images}>
                    <Image 
                    width={600} 
                    src={data.url}
                    />
                    <Image
                    width={600}
                    src={data.hdurl}
                    />
                </div>
            </Image.PreviewGroup>
            <h3>{data.explanation}</h3>
        </main>
    );
}