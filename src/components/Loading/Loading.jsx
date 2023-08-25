import styles from "./style.module.css"
import { Spin } from "antd";

export default function Loading() {
    return (
        <main className={styles.container}>
            <Spin size="large" />
        </main>
    );
}