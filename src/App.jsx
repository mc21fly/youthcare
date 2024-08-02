import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import View1 from "./views/View1.jsx";
import View2 from "./views/View2.jsx";
import View3 from "./views/View3.jsx";
import View4 from "./views/View4.jsx";

export default function App() {
    const [currentPage, setCurrentPage] = useState("page1");

    function send() {
        console.log("sent");

        localStorage.clear();
        setCurrentPage("page4");
    }

    function displayView() {
        if (currentPage === "page1") return <View1 handleNext={() => setCurrentPage("page2")} />;
        if (currentPage === "page2") return <View2 handleNext={() => setCurrentPage("page3")} handlePrev={() => setCurrentPage("page1")} />;
        if (currentPage === "page3") return <View3 handleNext={send} handlePrev={() => setCurrentPage("page2")} />;
        if (currentPage === "page4") return <View4 />;

        return <>BLANK</>;
    }

    return (
        <>
            <Header />
            {displayView()}
            <Footer />
        </>
    );
}
