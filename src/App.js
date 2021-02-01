import React from "react";
import {Header} from "./components/Header/Header";
import {TopSection} from "./components/TopSection/TopSection";
import {ServicesSection} from "./components/ServicesSection/ServicesSection";
import {OurCompanySection} from "./components/OurCompanySection/OurCompanySection";
import {Footer} from "./components/Footer/Footer";
import {BurgerMenu} from "./components/BurgerMenu/BurgerMenu";

function App() {
    return (
        <>
            <Header/>
            <BurgerMenu/>

            <main>
                <TopSection/>
                <ServicesSection/>
                <OurCompanySection/>
            </main>

            <Footer/>
        </>
    );
}

export default App;
