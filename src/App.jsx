import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import View1 from "./views/View1.jsx";
import View2 from "./views/View2.jsx";
import View3 from "./views/View3.jsx";
import View4 from "./views/View4.jsx";

export default function App() {
    const [currentView, setCurrentView] = useState("view1");

    function send() {
        console.log("sent");

        localStorage.clear();
        setCurrentView("view4");
    }

    function displayView() {
        if (currentView === "view1") return <View1 handleNext={() => setCurrentView("view2")} />;
        if (currentView === "view2") return <View2 handleNext={() => setCurrentView("view3")} handlePrev={() => setCurrentView("view1")} />;
        if (currentView === "view3") return <View3 handleNext={send} handlePrev={() => setCurrentView("view2")} />;
        if (currentView === "view4") return <View4 />;
    }

    return (
        <>
            <Header />
            {displayView()}
            <Footer />
        </>
    );
}
