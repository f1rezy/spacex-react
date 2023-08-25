"use client";

import { Image } from 'antd';
import styles from "./style.module.css";
import InfoBlock from '../InfoBlock/InfoBlock';

export default function ShipInfo({ data }) {
    return (
        <main className={styles.container}>
            <h1><a className={styles.title} href={data.link}>{data.name}</a></h1>
            <p>{data.description}</p>
            <Image
                width={900}
                src={data.image}
            />
            <InfoBlock 
            title1={"Home port"}
            title2={"Class"} 
            title3={"Type"} 
            data1={data.home_port} 
            data2={data.class} 
            data3={data.type}
            />
            <InfoBlock 
            title1={"Mass (kg)"}
            title2={"Year built"} 
            data1={data.mass_kg} 
            data2={data.year_built} 
            />
        </main>
    );
}