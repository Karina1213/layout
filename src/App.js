import React from "react";
import {Header} from "./components/Header/Header";
import {TopSection} from "./components/TopSection/TopSection";
import {ServicesSection} from "./components/ServicesSection/ServicesSection";
import {OurCompanySection} from "./components/OurCompanySection/OurCompanySection";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>

            <main>
                <TopSection/>
                <ServicesSection/>
                <OurCompanySection/>
            </main>

            <Footer/>
        </div>
    );
}

export default App;
