import { useState } from "react";
import { Header, Footer } from "./components";
import { View1, View2, View3, View4 } from "./views";
import { useStorage } from "./hooks";

export default function App() {
    const [currentView, setCurrentView] = useState("view1");
    const [, getStored] = useStorage("answers");

    function send() {
        const answers = getStored();
        console.log(answers);

        localStorage.clear();
        setCurrentView("view4");
    }

    function changeView(view) {
        window.scrollTo(0, 0);
        setCurrentView(view);
    }

    function displayView() {
        if (currentView === "view1") return <View1 handleNext={() => changeView("view2")} />;
        if (currentView === "view2") return <View2 handleNext={() => changeView("view3")} handlePrev={() => changeView("view1")} />;
        if (currentView === "view3") return <View3 handleNext={send} handlePrev={() => changeView("view2")} />;
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
