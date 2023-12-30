'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick'
import classes from './review.module.scss'

import screen1 from '../../../../public/rew1.jpg';
import screen2 from '../../../../public/rew2.jpg';
import screen3 from '../../../../public/rew3.jpg';
import screen4 from '../../../../public/rew4.jpg';
import screen5 from '../../../../public/rew5.jpg';
import screen6 from '../../../../public/rew6.jpg';
import screen7 from '../../../../public/rew7.jpg';
import screen8 from '../../../../public/rew8.jpg';
import screen9 from '../../../../public/rew9.png';
import screen10 from '../../../../public/rew10.png';
import screen11 from '../../../../public/rew11.png';

import iconSite from '../../../../public/site.svg';
import iconInstagram from '../../../../public/instagram.png';
import Image from "next/image";
import Link from "next/link";


const settings: any = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
};

const configData = [
    {
        img: screen1,
        siteUrl: 'https://xn----7sbqkalmeegm2bf7l0ai.xn--p1ai/', instagramUrl: ' https://www.instagram.com/dkamnia/'
    },
    {
        img: screen2,
        siteUrl: 'http://xn----7sbb2bjdt0a4g2a.xn--p1ai/', instagramUrl: 'https://www.instagram.com/pamyatniki30/'
    },
    {
        img: screen3,
        siteUrl: 'https://pamyatm.ru/', instagramUrl: 'https://www.instagram.com/pamyatm.ru/?r=nametag'
    },
    {
        img: screen4,
        siteUrl: 'https://talkingstone.ru/',
        // instagramUrl: 'instagram.com'
    },
    {
        img: screen5,
        siteUrl: 'http://ritualbel.by/', instagramUrl: 'https://www.instagram.com/ritual_belarus/'
    },
    {
        img: screen6,
        // siteUrl: 'google.com',
        instagramUrl: 'https://www.instagram.com/nikolskaya_masterskaya/'
    },
    {
        img: screen7,
        siteUrl: 'https://memorial-grad.ru/', instagramUrl: 'https://www.instagram.com/anna_d3940/'
    },
    {
        img: screen8,
        siteUrl: 'https://www.nsrpnn.ru/', instagramUrl: 'https://www.instagram.com/zaran.ko/'
    },
    {
        img: screen9,
        siteUrl: 'https://www.rooneymonumental.com', instagramUrl: 'https://www.instagram.com/rooneyheadstones'
    },
    {
        img: screen10,
        siteUrl: 'https://www.ermis.su', instagramUrl: 'https://www.instagram.com/fs_ermis'
    },
    {
        img: screen11,
        siteUrl: 'https://sofyagranit.ru', instagramUrl: 'https://www.instagram.com/sofyagranit'
    }
]

export const Review = () => {
    return (
        <div className={classes.review} id="reviews">
            <Slider {...settings}>
                {
                    configData.map(({img, siteUrl = null, instagramUrl = null}) => {
                        return (
                            <div key={siteUrl}>
                                <div style={{outline: 'none'}}>
                                    <Image src={img} alt="review"
                                           style={{maxWidth: '100%', height: "auto", padding: 10, outline: 'none'}}/>
                                </div>
                                <div className={classes.links}>
                                {
                                    siteUrl && (
                                        <Link href={siteUrl} target="_blank">
                                            <Image src={iconSite} alt={siteUrl} style={{width: 35, height: 35}} />
                                        </Link>
                                    )
                                }
                                {
                                    instagramUrl && (
                                        <Link href={instagramUrl} target="_blank">
                                            <Image src={iconInstagram} alt={instagramUrl} style={{width: 35, height: 35}} />
                                        </Link>
                                    )
                                }
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}
