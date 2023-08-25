"use client";

import { Image } from 'antd';
import styles from "./style.module.css";
import InfoBlock from '../InfoBlock/InfoBlock';

export default function RocketInfo({ data }) {
    return (
        <main className={styles.container}>
            <h1><a className={styles.title} href={data.wikipedia}>{data.name}</a></h1>
            <p>{data.description}</p>
            <Image.PreviewGroup
                items={data.flickr_images}
            >
                <Image
                width={800}
                src={data.flickr_images.at(0)}
                />
            </Image.PreviewGroup>
            <InfoBlock 
            title1={"Company"}
            title2={"Country"} 
            title3={"First flight"} 
            data1={data.company} 
            data2={data.country} 
            data3={data.first_flight}
            />
            <InfoBlock 
            title1={"Stages"}
            title2={"Boosters"} 
            title3={"Cost per launch"} 
            data1={data.stages} 
            data2={data.boosters} 
            data3={`${data.cost_per_launch} $`}
            />
            <InfoBlock 
            title1={"Height"}
            title2={"Diameter"} 
            title3={"Mass"} 
            data1={`${data.height.meters} meters`} 
            data2={`${data.diameter.meters} meters`} 
            data3={`${data.mass.kg} kg`}
            />
        </main>
    );
}