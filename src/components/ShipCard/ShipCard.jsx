import Link from "next/link";
import styles from "./style.module.css"

export default function ShipCard({id, name, type}) {

console.log(name, type)

    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <Link href={`/ships/${id}`}>
                    <h2 className={styles.name}>{name}</h2>
                </Link>
                <span className={styles.type}>{type}</span>
            </div>
        </section>
    );
}