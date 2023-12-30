'use client';

import React from 'react'

import classes from './page.module.scss'
import MainHeader from "@/app/components/MainHeader/Main";

import ImageGallery from "react-image-gallery";
import FullImage from "@/app/components/FullImage/FullImage";
import Footer from "@/app/components/Footer/Footer";

export default () => {
    const [show, setShow] = React.useState(false);
    const [image, setImage] = React.useState('');
    const images = [
        {
            original: "https://firebasestorage.googleapis.com/v0/b/mara-b5982.appspot.com/o/artem%2F1.png?alt=media&token=97e41c88-0c1a-467e-8695-e912361b2de4",
            thumbnail: "https://firebasestorage.googleapis.com/v0/b/mara-b5982.appspot.com/o/artem%2F1.png?alt=media&token=97e41c88-0c1a-467e-8695-e912361b2de4",
        },
        {
            original: "https://firebasestorage.googleapis.com/v0/b/mara-b5982.appspot.com/o/artem%2F2.png?alt=media&token=bf4b670e-0761-439c-ac03-3290a84cd0e2",
            thumbnail: "https://firebasestorage.googleapis.com/v0/b/mara-b5982.appspot.com/o/artem%2F2.png?alt=media&token=bf4b670e-0761-439c-ac03-3290a84cd0e2",
        },
        {
            original: "https://firebasestorage.googleapis.com/v0/b/mara-b5982.appspot.com/o/artem%2F3.png?alt=media&token=85515eb7-7190-4b49-910e-13990dd6476a",
            thumbnail: "https://firebasestorage.googleapis.com/v0/b/mara-b5982.appspot.com/o/artem%2F3.png?alt=media&token=85515eb7-7190-4b49-910e-13990dd6476a",
        },

        {
            original: "https://firebasestorage.googleapis.com/v0/b/mara-b5982.appspot.com/o/artem%2F4.png?alt=media&token=012f121d-8fcf-42cd-a12a-018a762b3922",
            thumbnail: "https://firebasestorage.googleapis.com/v0/b/mara-b5982.appspot.com/o/artem%2F4.png?alt=media&token=012f121d-8fcf-42cd-a12a-018a762b3922",
        },
        {
            original: "https://firebasestorage.googleapis.com/v0/b/mara-b5982.appspot.com/o/artem%2F5.png?alt=media&token=90bb8204-3e5a-4d22-a635-e1966de64b38",
            thumbnail: "https://firebasestorage.googleapis.com/v0/b/mara-b5982.appspot.com/o/artem%2F5.png?alt=media&token=90bb8204-3e5a-4d22-a635-e1966de64b38",
        },
        {
            original: "https://firebasestorage.googleapis.com/v0/b/mara-b5982.appspot.com/o/artem%2F6.png?alt=media&token=ae7065be-78e3-416b-9f19-12bb0e85efaf",
            thumbnail: "https://firebasestorage.googleapis.com/v0/b/mara-b5982.appspot.com/o/artem%2F6.png?alt=media&token=ae7065be-78e3-416b-9f19-12bb0e85efaf",
        },
        {
            original: "https://firebasestorage.googleapis.com/v0/b/mara-b5982.appspot.com/o/artem%2F7.png?alt=media&token=85ab17a8-f1c9-47d5-982a-c9273eb52172",
            thumbnail: "https://firebasestorage.googleapis.com/v0/b/mara-b5982.appspot.com/o/artem%2F7.png?alt=media&token=85ab17a8-f1c9-47d5-982a-c9273eb52172",
        },
        {
            original: "https://firebasestorage.googleapis.com/v0/b/mara-b5982.appspot.com/o/artem%2F8.png?alt=media&token=1e6901da-749c-4fca-acb5-6fe267875e99",
            thumbnail: "https://firebasestorage.googleapis.com/v0/b/mara-b5982.appspot.com/o/artem%2F8.png?alt=media&token=1e6901da-749c-4fca-acb5-6fe267875e99",
        },
        {
            original: "https://firebasestorage.googleapis.com/v0/b/mara-b5982.appspot.com/o/artem%2F9.png?alt=media&token=38f00bbb-926e-4eb3-8387-93031dc0055e",
            thumbnail: "https://firebasestorage.googleapis.com/v0/b/mara-b5982.appspot.com/o/artem%2F9.png?alt=media&token=38f00bbb-926e-4eb3-8387-93031dc0055e",
        },
        {
            original: "https://firebasestorage.googleapis.com/v0/b/mara-b5982.appspot.com/o/artem%2F10.png?alt=media&token=1740dff3-de87-475f-a7e6-45711ac28a25",
            thumbnail: "https://firebasestorage.googleapis.com/v0/b/mara-b5982.appspot.com/o/artem%2F10.png?alt=media&token=1740dff3-de87-475f-a7e6-45711ac28a25",
        },
        {
            original: "https://firebasestorage.googleapis.com/v0/b/mara-b5982.appspot.com/o/artem%2F11.png?alt=media&token=15eb9e81-09cc-4e06-8ab3-2b4081f1d710",
            thumbnail: "https://firebasestorage.googleapis.com/v0/b/mara-b5982.appspot.com/o/artem%2F11.png?alt=media&token=15eb9e81-09cc-4e06-8ab3-2b4081f1d710",
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
