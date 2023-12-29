'use client';

import React, {useState} from "react";
import {FormEvent} from 'react';
import classes from './contact.module.scss';
import iconWhatsapp from "../../../../public/whatsapp.png";
import iconViber from "../../../../public/viber.png";
import iconTelegram from "../../../../public/telegram.png";
import Image from 'next/image';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
const Contact = () => {
    // State variables to store input values
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [whatsappChecked, setWhatsappChecked] = useState(false);
    const [viberChecked, setViberChecked] = useState(false);
    const [telegramChecked, setTelegramChecked] = useState(false);
    const [message, setMessage] = useState('');
    const [captcha, setCaptcha] = React.useState(null);

    // Handle form submission
    async function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const token = '6414814091:AAFgfZ8gn67pu-OvHzM5zQTrZVG_RQtjNPU'
        const chatId = '-4060606894'
        const getBotUpdates = () => {

            axios.get(`https://api.telegram.org/bot${token}/getUpdates`)
                .then(function (response) {
                    // handle success
                    axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
                        chat_id: chatId,
                        text: `
                        Заявка с сайта:
                        Email: ${email}
                        Phone: ${phone}
                        Whatsapp: ${whatsappChecked}
                        Viber: ${viberChecked}
                        Telegram: ${telegramChecked}
                        Message: ${message}
                        
                        `
                    })
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                })

            //     fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=361383571&text=Hello%20from%20your%20new%20bot`, {method: 'POST'}).then(res=>{
            //     console.log(res)})
            // }

            // fetch(
            //     `https://api.telegram.org/bot${token}/getUpdates`
            // ).then((response) => {
            //     fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=MESSAGE_TEXT`, {method: 'POST'}).then(res => {
            //         console.log(response)
            //     })
            //
            // });
        }
        getBotUpdates()
        // Access values from state variables
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('WhatsApp Checked:', whatsappChecked);
        console.log('Viber Checked:', viberChecked);
        console.log('Telegram Checked:', telegramChecked);
        console.log('Message:', message);
        setCaptcha(null)
        setEmail('')
        setPhone('');
        setWhatsappChecked(false);
        setViberChecked(false);
        setViberChecked(false);
        setMessage('')

    }

    return (
        <div id='contact'>
            <div className={classes.wrapper}>
                <h1>Свяжитесь со мной</h1>
                <form onSubmit={onSubmitHandler}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Телефон"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <p>В какой мессенджер вам написать?</p>
                    <div className={classes.checkboxList}>
                        <input
                            type="checkbox"
                            id="iconWhatsapp"
                            name="iconWhatsapp"
                            value="iconWhatsapp"
                            checked={whatsappChecked}
                            onChange={() => setWhatsappChecked(!whatsappChecked)}
                        />
                        <Image src={iconWhatsapp} alt="iconWhatsapp" className={classes.checkboxImage}/>
                    </div>
                    <div className={classes.checkboxList}>
                        <input
                            type="checkbox"
                            id="iconViber"
                            name="iconViber"
                            value="iconViber"
                            checked={viberChecked}
                            onChange={() => setViberChecked(!viberChecked)}
                        />
                        <Image src={iconViber} alt="iconViber" className={classes.checkboxImage}/>
                    </div>
                    <div className={classes.checkboxList}>
                        <input
                            type="checkbox"
                            id="iconTelegram"
                            name="iconTelegram"
                            value="iconTelegram"
                            checked={telegramChecked}
                            onChange={() => setTelegramChecked(!telegramChecked)}
                        />
                        <Image src={iconTelegram} alt="iconTelegram" className={classes.checkboxImage}/>
                    </div>
                    <textarea
                        placeholder="Сообщение"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    {
                        !captcha &&
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <ReCAPTCHA
                                sitekey="6LdVmjgpAAAAABz1epi5wj1KJ9M06uD8OqscBDGT"
                                onChange={(value: any) => setCaptcha(value)}
                            />
                        </div>

                    }
                    <button type="submit" disabled={captcha === null}>Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
