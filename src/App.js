import React from "react";
import {Header} from "./components/Header/Header";
import {TopSection} from "./components/TopSection/TopSection";
import {ServicesSection} from "./components/ServicesSection/ServicesSection";
import {OurCompanySection} from "./components/OurCompanySection/OurCompanySection";

function App() {
    return (
        <div className="App">
            <Header/>

            <main>
                <TopSection/>
                <ServicesSection/>
                <OurCompanySection/>
            </main>
        </div>
    );
}

export default App;
