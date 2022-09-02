import { createPopper } from "@popperjs/core";
import { Modal } from "bootstrap";
import request from "oc-request";
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

// October CMS - Contact form

(function () {
    const contactsForms = document.querySelectorAll(".form");

    contactsForms.forEach((el) => {
        el.addEventListener("submit", function (e) {
            e.preventDefault();

            request.sendForm(el, "emptyForm::onFormSubmit", {
                success: (result) => {
                    el.reset();
                    const thanksModalOb = Modal.getOrCreateInstance(document.getElementById("thanksModal"));
                    thanksModalOb.show();
                },
            });
        });
    });
})();

// October CMS - Change language

(function () {
    const languages = document.querySelector(".languages");

    if (!languages) return;

    languages.addEventListener("click", (e) => {
        request.sendData("onSwitchLocale", {
            data: {
                locale: e.target.dataset.locale,
            },
        });
    });
})();
