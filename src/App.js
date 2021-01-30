import React from "react";
import {Header} from "./components/Header/Header";
import {TopSection} from "./components/TopSection/TopSection";
import {ServicesSection} from "./components/ServicesSection/ServicesSection";

function App() {
    return (
        <div className="App">
            <Header/>

            <main>
                <TopSection/>
                <ServicesSection/>
            </main>
        </div>
    );
}

export default App;
