"use client";

import { Image } from 'antd';
import styles from "./style.module.css"
import InfoBlock from '../InfoBlock/InfoBlock';

export default function RoadsterInfo({ data }) {

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>{data.name}</h1>
            <p>{data.details}</p>
            <Image.PreviewGroup
                preview={{
                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}
            >
                <div className={styles.imageContainer}>
                    <Image 
                    width={600} 
                    src={data.flickr_images.at(0)} 
                    />
                    <Image
                    width={600}
                    src={data.flickr_images.at(1)}
                    />
                </div>
                <div className={styles.imageContainer}>
                    <Image
                    width={600}
                    src={data.flickr_images.at(2)}
                    />
                    <Image
                    width={600}
                    src={data.flickr_images.at(3)}
                    />
                </div>
            </Image.PreviewGroup>
            <InfoBlock 
            title1={"Launch_date"}
            title2={"Launch mass"} 
            title3={"Speed"} 
            data1={new Date(data.launch_date_utc).toLocaleString()} 
            data2={data.launch_mass_kg} 
            data3={data.speed_kph}
            />
            <InfoBlock 
            title1={"Orbit type"}
            title2={"Earth distance"} 
            title3={"Mars disctance"} 
            data1={data.orbit_type} 
            data2={data.earth_distance_km} 
            data3={data.mars_distance_km}
            />
            <div className={styles.rowContainer}>
                <a className={styles.link} href={data.wikipedia}>Wikipedia</a>
                <a className={styles.link} href={data.video}>YouTube</a>
            </div>
        </main>
    );
}