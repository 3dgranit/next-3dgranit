
import React from 'react'
import iconPinterest from '../../../../public/pinterest.png'
import iconInstagram from '../../../../public/ins.png'
import Image from "next/image";
import styles from './footer.module.scss'

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer}>
                <a href=' https://www.pinterest.com/3dgranit' target="_blank" ><Image src={iconPinterest} alt="iconPinterest"/></a>
                <a href='https://www.instagram.com/3dgranit_com' target="_blank"><Image src={iconInstagram} alt="iconInstagram"/></a>
            </div>
        </footer>
    )
}

export default Footer
