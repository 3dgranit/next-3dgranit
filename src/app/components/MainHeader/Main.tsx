'use client';

import Image from 'next/image'
import classes from './main.module.scss'
import React, {useEffect, useState} from "react";
import logoImg from '../../../../public/logo.png'
import Link from "next/link";
import {INavLink} from "@/app/types";
import iconWhatsapp from "../../../../public/whatsapp.png"
import iconViber from "../../../../public/viber.png"
import iconTelegram from "../../../../public/telegram.png"
import iconPinterest from "../../../../public/pinterest.png"

export default function MainHeader() {

    const [smallHeader, setSmallHeader] = useState(false);
    const [scrollProcent, setScrollProcent] = useState(0);
    const [openMenu, setOpenMenu] = useState(false);

    const data = [{
        id: 1,
        href: "tel:+375295219358",
        content: <span style={{marginRight: 10}}>+375 29 5219358</span>
    }, {
        id: 2,
        href: "https://wa.me/375295219358",
        content: <Image src={iconWhatsapp} alt="iconWhatsapp"/>
    }, {
        id: 3,
        href: "viber://chat?number=375295219358",
        content: <Image src={iconViber} alt="iconViber"/>
    }, {
        id: 4,
        href: "https://t.me/artem_shishlov",
        content: <Image src={iconTelegram} alt="iconTelegram"/>
    }, {
        id: 5,
        href: "https://www.pinterest.com/3dgranit/_created/",
        content: <Image src={iconPinterest} alt="iconPinterest"/>
    }]
    const navLinks: INavLink[] = [
        {url: '/#work', label: 'Цены'},
        {url: 'catalog', label: 'Каталоги'},
        {url: '/#advantages', label: 'Преимущества'},
        {url: '/#reviews', label: 'Отзывы'},
        {url: '/#contact', label: 'Контакты'},
    ]
    const renderLi = () => navLinks.map(({url, label}, inx) => {
        return (
            <li key={url}>
                <Link
                    onClick={() => handleClick()}
                    href={url}>{label}</Link>
            </li>
        )
    })

    const handleClick = () => {
        if (openMenu) {
            setOpenMenu(!openMenu)
        }

    }


    const handleScroll = (e: any) => {
        if (window.pageYOffset > 200) {
            setSmallHeader(true)
        } else {
            setSmallHeader(false)
        }

        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

        let sizeScrollProcent = (window.pageYOffset + document.documentElement.clientHeight) * 100 / scrollHeight;
        setScrollProcent(sizeScrollProcent > 30 ? sizeScrollProcent : 0)
        console.log(sizeScrollProcent);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`main ${smallHeader ? classes.wrapperTopMenuActive : classes.wrapperTopMenu}`}>
            <div className={classes.lineLoader} style={{width: `${scrollProcent}%`}}></div>
            <div className={classes.container}>
                <div>
                    <Link href='/'>
                        <Image
                            src={logoImg}
                            alt={'logo'}
                            className={`${classes.logo} ${smallHeader ? classes.logoOpen : classes.logoClose}`}
                        />
                    </Link>
                </div>
                <div>
                    <ul className={classes.ul}>
                        {renderLi()}
                    </ul>
                </div>
                <div className={classes.contact}>
                    <div className={classes.links}>
                        {
                            data.map(({id, href, content}, inx) => {
                                return (
                                    <a key={id} href={href} target={'_blank'}>
                                        {content}
                                    </a>
                                )
                            })
                        }
                    </div>
                    <button onClick={() => setOpenMenu(!openMenu)}
                            className={`${classes.btnMenu} ${openMenu ? classes.btnMenuOpen : ''}`}>
                        <div><span></span></div>
                    </button>
                </div>

                {
                    openMenu && <div className={classes.mobileMenu}>
                        <ul>
                            {renderLi()}
                        </ul>
                        <div className={classes.mobileItems}>
                            {
                                data.map(({id, href, content}, inx) => {
                                    return (
                                        <a key={id} href={href} target={'_blank'}>
                                            {content}
                                        </a>
                                    )
                                })
                            }
                        </div>

                    </div>
                }

            </div>
        </div>
    )
}
