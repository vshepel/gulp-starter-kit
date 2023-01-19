import { createPopper } from "@popperjs/core";
import { Modal } from "bootstrap";
import IMask from "imask";

// Get real vh

(function () {
    const setRealHeight = () => {
        const doc = document.documentElement;
        doc.style.setProperty("--vh", `${window.innerHeight}px`);
    };
    window.addEventListener("resize", setRealHeight);
    setRealHeight();
})();

// Phone mask

(function () {
    const phoneInputs = document.querySelectorAll("input[type=tel]");

    phoneInputs.forEach((el) => {
        IMask(el, {
            mask: "+{38} (000) 000-00-00",
        });
    });
})();
