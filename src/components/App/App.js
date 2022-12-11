import { useEffect } from "react";

import "./App.scss";

export const App = () => {
    const tg = window.Telegram.WebApp;

    useEffect(() => {
        tg.ready();
    }, []);

    const onClose = () => {
        tg.close();
    };

    return (
        <div className="App">
            <button onClick={onClose}>close</button>
        </div>
    );
};
