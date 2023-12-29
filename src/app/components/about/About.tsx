import image from '../../../../public/iam.jpg'
import React from "react";
import Image from 'next/image'
import classes from './about.module.scss'
import Link from "next/link";

const About = () => {
    return (
        <div className={classes.about}>
            <div className={classes.wrapper}>
                <div><Image src={image} alt={'I am'}/></div>
                <div className={classes.content}>
                    <h2>3D-визуализатор</h2>
                    <p>работаю так, чтобы ваши клиента были довольны!</p>
                    <p>Здравствуйте!) Рад познакомиться, меня зовут Артем.</p>
                    <p>7 лет я занимаюсь 3D-моделингом, из которых 5 лет моделю памятники. За это время я создал 3 уникальных каталога с более, чем 1000 моделей памятников, цоколей, оград, комплексов, столиков и лавочек каждый.</p>
                    <p>Десятки изготовителей памятников регулярно заказывают у меня индивидуальные эскизы комплексов.</p>
                    <p>Буду рад поработать и с вами, напишите мне прямо сейчас!</p>
                    <Link href='/#contact'><button>Написать мне</button></Link>
                </div>
            </div>
        </div>
    )
}

export default About;
