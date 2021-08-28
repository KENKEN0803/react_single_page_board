import {useEffect, useState} from "react";

function Footer() {
    const [clock, setClock] = useState("");

    useEffect(() => {
        setInterval(() => {
            setClock(getClock());
        }, 1000);
    }, []);

    const getClock = () => {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    }

    return (
        <h4 className="footer">{clock}</h4>
    );
}

export default Footer;