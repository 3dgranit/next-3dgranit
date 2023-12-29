import React  from 'react';
import classes from './header.module.scss'
import Link from "next/link";

export const Header = () => {
    return (
        <div className={`${classes.bg}`}>
            <div className={`${classes.wrapper}`}>
                <h1>Мемориальное 3D-моделирование</h1>
                <div>
                    <Link href='/#contact'><button>Отправить ТЗ</button></Link>
                </div>
            </div>
        </div>
    )
}
