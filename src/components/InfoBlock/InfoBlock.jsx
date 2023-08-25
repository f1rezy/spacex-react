"use client";

import styles from "./style.module.css"

export default function InfoBlock({ title1, title2, title3, data1, data2, data3 }) {
    return (
        <div className={styles.rowContainer}>
            <div className={styles.columnContainer}>
                <h2>{title1}</h2>
                {data1}
            </div>
            <div className={styles.columnContainer}>
                <h2>{title2}</h2>
                {data2}
            </div>
            <div className={styles.columnContainer}>
                <h2>{title3}</h2>
                {data3}
            </div>
        </div>
    );
}