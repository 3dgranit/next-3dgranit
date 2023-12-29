'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick'
import classes from './work.module.scss'

import Image, {StaticImageData} from "next/image";
import image1 from '../../../../public/1.png'
import image2 from '../../../../public/2.png';
import image3 from '../../../../public/3.png';

import image21 from '../../../../public/21.png';
import image22 from '../../../../public/22.png';
import image23 from '../../../../public/23.png';
import image24 from '../../../../public/24.png';
import image25 from '../../../../public/25.png';

import image31 from '../../../../public/31.png';
import image32 from '../../../../public/32.png';
import image33 from '../../../../public/33.png';
import image34 from '../../../../public/34.png';
import image35 from '../../../../public/35.png';

export const Work = () => {
    const data = [
        {
            title: 'Простой комплекс',
            price: '14-20',
            oldPrice: '20-35',
            description: 'Простая геометрия. Не многочисленные элементы.',
            arrayImages: [image1, image2, image3]
        },
        {
            title: 'Средний комплекс',
            price: '20-35',
            oldPrice: '35-50',
            description: 'Не многочисленные элементы со сложной геометрией.',
            arrayImages: [image21, image22, image23, image24, image25]
        },
        {
            title: 'Сложный комплекс',
            price: 'от 35',
            oldPrice: 'от 50',
            description: 'Многочисленные элементы со сложной геометрией.',
            arrayImages: [image31, image32, image33, image34, image35]
        }
    ];

    const settings: any = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                }
            },
        ],
    };

    function handle(title: string) {
        const textarea = document.querySelector('textarea');
        if (textarea) {
            textarea.innerHTML = title;
            console.log('textarea', textarea)
            textarea.focus();
        }


    }

    return (
        <section className={classes.section} id="work">
            <div className={classes.wrapper}>
                <div className={classes.cards}>
                    {
                        data.map(({title, price, description, arrayImages, oldPrice}) => {
                            return (
                                <div className={classes.card} key={title}>
                                    <div className={classes.wrapperSlider}>
                                        <Slider {...settings}>
                                            {
                                                arrayImages.map((el: StaticImageData, index) => {
                                                    return (
                                                        <div key={index} style={{outline: 'none'}}><Image style={{outline: 'none'}} src={el} alt="image1"
                                                                                className={classes.wrapperImage}/></div>
                                                    )
                                                })
                                            }

                                        </Slider>
                                    </div>
                                    <h3>{title}</h3>
                                    <h2>{price}</h2>
                                    <div>Сезонные скидки <span className={classes.oldPrice}>{oldPrice}</span> <span>-30%</span></div>
                                    <p>{description}</p>
                                    <button className={classes.button} onClick={() => handle(title)}>Заказать</button>
                                </div>

                            )
                        })
                    }
                </div>

            </div>
        </section>

    )
}

export default Work
