"use client";

import styles from "./style.module.css"
import InfoBlock from "../InfoBlock/InfoBlock";

export default function CompanyInfo({ data }) {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>{data.name}</h1>
            <p>{data.summary}</p>
            <InfoBlock 
            title1={"Founder"}
            title2={"Founded"} 
            title3={"Employees"} 
            data1={data.founder} 
            data2={data.founded} 
            data3={data.employees}
            />
            <InfoBlock 
            title1={"Vehicles"}
            title2={"Valuation"} 
            data1={data.vehicles} 
            data2={data.valuation} 
            />
            <div className={styles.rowContainer}>
                <ul>
                    <h3>Links</h3>
                    <li><a className={styles.link} href={data.links.flickr}>Flickr</a></li>
                    <li><a className={styles.link} href={data.links.twitter}>Twitter</a></li>
                    <li><a className={styles.link} href={data.links.elon_twitter}>Elon Twitter</a></li>
                </ul>
                <ul>
                    <h3>Headquarters</h3>
                    <li>Address: {data.headquarters.address}</li>
                    <li>City: {data.headquarters.city}</li>
                    <li>State: {data.headquarters.state}</li>
                </ul>
            </div>
        </main>
    );
}