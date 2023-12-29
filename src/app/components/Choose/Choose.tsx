import experience from '../../../../public/opyt.png'
import price from '../../../../public/tsena.png'
import reliability from '../../../../public/nadezhnost.png'
import unique from '../../../../public/unikalnost.png'

import React from "react";
import Image from "next/image";
import classes from './choose.module.scss'

const Choose = () => {
    const data = [
        {
            id: 1,
            title: 'ОПЫТ',
            options: ['7 лет 3D-моделинга', 'более 3000 моделей'],
            icon: experience
        },
        {
            id: 2,
            title: 'ЦЕНА',
            options: ['от 14$ за комплекс', 'оплата после получения макета'],
            icon: price
        },
        {
            id: 3,
            title: 'НАДЕЖНОСТЬ',
            options: ['предварительная оценка проекта', 'выполнение всех правок'],
            icon: reliability
        },
        {
            id: 4,
            title: 'УНИКАЛЬНОСТЬ',
            options: ['каждый заказчик получает уникальный', 'макет и все права на его использование'],
            icon: unique
        }
    ]
    return (
        <section>
            <div className={classes.wrapper} id="advantages">
                <h2>Почему стоит выбрать меня?</h2>
                <p>Работаю так, чтобы ваши клиенты были довольны!</p>
                <div className={classes.list}>
                    {
                        data.map(({item, id, icon, title, options}: any) => {
                            return (
                                <div key={id}>
                                    <Image src={icon} alt={title}/>
                                    <h3>{title}</h3>
                                    {
                                        options.length > 0 && (
                                            <ul>
                                                {
                                                    options.map((item: any, index: number) => {
                                                        return (
                                                            <li key={index}>{item}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        )
                                    }
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Choose
