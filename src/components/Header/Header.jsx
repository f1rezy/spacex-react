"use client";

import styles from "./style.module.css"
import Link from 'next/link'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
    {
      label: <Link href="/rockets/5e9d0d95eda69973a809d1ec">Falcon 9</Link>,
      key: '0',
    },
    {
      label: <Link href="/rockets/5e9d0d95eda69974db09d1ed">Falcon Heavy</Link>,
      key: '1',
    },
  ];

export default function Header() {

    return (
        <header className={styles.header}>
            <span className={styles.title}><Link className={styles.link} href="/">SpaceX</Link></span>
            <div className={styles.container}>
                <Link className={styles.link} href="/apod">APOD</Link>
                <Link className={styles.link} href="/ships">Ships</Link>
                <Dropdown
                    menu={{
                        items,
                    }}
                    trigger={['click']}
                >
                    <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        Rockets
                        <DownOutlined />
                    </Space>
                    </a>
                </Dropdown>
                <Link className={styles.link} href="/roadster">Roadster</Link>
            </div>
        </header>
    );
}