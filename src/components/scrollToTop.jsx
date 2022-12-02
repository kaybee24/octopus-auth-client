import React from "react";
import { FiArrowUpCircle } from "react-icons/fi";
import { useState, useEffect } from "react";


export default function ScrollToTop() {
    const [setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }


    return (
        <div className="relative">
            <FiArrowUpCircle
                onClick={goToTop}
                className="fixed w-12 h-12 bottom-[2rem] right-[2rem] text-offwhite-900 z-50"
            />
        </div>
    )
}



