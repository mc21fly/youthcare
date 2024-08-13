import { useState } from "react";
import { Header, Footer } from "./components";
import { View1, View2, View3, View4 } from "./views";
import { useStorage } from "./hooks";
import translate from "./helpers/translate";

export default function App() {
    const [currentView, setCurrentView] = useState("view1");
    const [sending, setSending] = useState(false);
    const [, getStored] = useStorage("answers");

    async function send() {
        setSending(true);
        const answers = getStored();
        const translated = translate(answers);

        const response = await fetch("https://cloud.info.ilmeridian.com/youthcare-hrs-backend", {
            method: "POST",
            body: JSON.stringify(translated),
        });
        const json = await response.json();

        if (json && json.status === 200) {
            changeView("view4");
            localStorage.clear();
        }

        setSending(false);
    }

    function changeView(view) {
        window.scrollTo(0, 0);
        setCurrentView(view);
    }

    function displayView() {
        if (currentView === "view1") return <View1 handleNext={() => changeView("view2")} />;
        if (currentView === "view2") return <View2 handleNext={() => changeView("view3")} handlePrev={() => changeView("view1")} />;
        if (currentView === "view3") return <View3 handleNext={send} handlePrev={() => changeView("view2")} sending={sending} />;
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
