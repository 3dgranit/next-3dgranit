
import MainHeader from "@/app/components/MainHeader/Main";
import About from "@/app/components/about/About";
import {Header} from "@/app/components/Header/Header";
import {Review} from "@/app/components/Review/Review";
import React from "react";
import Choose from "@/app/components/Choose/Choose";
import Work from "@/app/components/Work/Work";
import Contact from "@/app/components/Contact/Contact";
import Footer from "@/app/components/Footer/Footer";

export default function Home() {
    return (
        <main>
            <MainHeader/>
            <Header/>
            <About/>
            <Review/>
            <Choose/>
            <Work/>
            <Contact/>
            <Footer/>
        </main>
    )
}
