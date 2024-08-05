'use client';

import React from 'react'

import classes from './page.module.scss'
import MainHeader from "@/app/components/MainHeader/Main";

import FullImage from "@/app/components/FullImage/FullImage";
import Footer from "@/app/components/Footer/Footer";

export default () => {
    const [show, setShow] = React.useState(false);
    const [image, setImage] = React.useState('');
    const images = [
        {
            original: "/catalog/01.webp",
            thumbnail: "/catalog/01.webp",
        },
        {
            original: "/catalog/02.webp",
            thumbnail: "/catalog/02.webp",
        },
        {
            original: "/catalog/03.webp",
            thumbnail: "/catalog/03.webp",
        },
        {
            original: "/catalog/04.webp",
            thumbnail: "/catalog/04.webp",
        },
        {
            original: "/catalog/05.webp",
            thumbnail: "/catalog/05.webp",
        },
        {
            original: "/catalog/06.webp",
            thumbnail: "/catalog/06.webp",
        },
        {
            original: "/catalog/07.webp",
            thumbnail: "/catalog/07.webp",
        },
        {
            original: "/catalog/08.webp",
            thumbnail: "/catalog/08.webp",
        },
        {
            original: "/catalog/09.webp",
            thumbnail: "/catalog/09.webp",
        },
        {
            original: "/catalog/10.webp",
            thumbnail: "/catalog/10.webp",
        },
        {
            original: "/catalog/11.webp",
            thumbnail: "/catalog/11.webp",
        },
        {
            original: "/catalog/12.webp",
            thumbnail: "/catalog/12.webp",
        },
        {
            original: "/catalog/13.webp",
            thumbnail: "/catalog/13.webp",
        },
        {
            original: "/catalog/14.webp",
            thumbnail: "/catalog/14.webp",
        },
        {
            original: "/catalog/15.webp",
            thumbnail: "/catalog/15.webp",
        },
        {
            original: "/catalog/16.webp",
            thumbnail: "/catalog/16.webp",
        },
        {
            original: "/catalog/17.webp",
            thumbnail: "/catalog/17.webp",
        },
    ];

    function handleClick(value: string) {
        setImage(value)
        setShow(!show);

    }


    function handleClose() {
        setShow(false)
    }

    return (
        <>
            <MainHeader/>
            <section className={classes.section}>
                <div className={classes.wrapper}>
                    <div className={classes.container}>
                        {
                            images.map(el => {
                                return (
                                    <div key={el.original} className={classes.card} onClick={() => handleClick(el.original)}>
                                        <img src={el.original} alt={el.original}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <FullImage image={image} show={show} close={handleClose} />
            <Footer />
        </>
    )

}
