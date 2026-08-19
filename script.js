/* ==================================================
   KAYVIC WEB STUDIO
   CLIENT INTAKE JAVASCRIPT
================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* ==================================================
       NAVBAR
    ================================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (!navbar) return;

        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });



    /* ==================================================
       PACKAGE SELECTION
    ================================================== */

    const packageOptions =
        document.querySelectorAll(".package-option");

    packageOptions.forEach(function (option) {

        option.addEventListener("click", function () {

            packageOptions.forEach(function (item) {
                item.classList.remove("selected");
            });

            option.classList.add("selected");

            const radio =
                option.querySelector(
                    'input[type="radio"]'
                );

            if (radio) {
                radio.checked = true;
            }

        });

    });



    /* ==================================================
       FORM
    ================================================== */

    const form =
        document.getElementById("websiteForm");

    if (!form) {
        return;
    }



    /* ==================================================
       SUBMIT
    ================================================== */

    form.addEventListener("submit", function (event) {

        event.preventDefault();


        /* ----------------------------------------------
           CHECK REQUIRED FIELDS
        ---------------------------------------------- */

        const required =
            form.querySelectorAll("[required]");

        let missing = null;


        required.forEach(function (field) {

            if (missing) {
                return;
            }


            /* Radio button groups */

            if (field.type === "radio") {

                const group =
                    form.querySelectorAll(
                        'input[name="' +
                        field.name +
                        '"]'
                    );

                let selected = false;

                group.forEach(function (radio) {

                    if (radio.checked) {
                        selected = true;
                    }

                });

                if (!selected) {
                    missing = field;
                }

                return;
            }


            /* Normal inputs/selects */

            if (
                field.value === null ||
                field.value.trim() === ""
            ) {
                missing = field;
            }

        });



        /* ----------------------------------------------
           SOMETHING IS MISSING
        ---------------------------------------------- */

        if (missing) {

            const card =
                missing.closest(".question-card");

            if (card) {

                card.classList.add(
                    "question-error"
                );

                card.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                setTimeout(function () {

                    card.classList.remove(
                        "question-error"
                    );

                }, 2000);

            }

            alert(
                "Please complete the highlighted question before submitting."
            );

            return;
        }



        /* ==================================================
           GET ANSWERS
        ================================================== */

        const businessName =
            document.getElementById(
                "businessName"
            ).value.trim();

        const businessType =
            document.getElementById(
                "businessType"
            ).value;

        const hasWebsite =
            document.querySelector(
                'input[name="hasWebsite"]:checked'
            ).value;

        const goal =
            document.getElementById(
                "goal"
            ).value;

        const selectedPackage =
            document.querySelector(
                'input[name="package"]:checked'
            ).value;

        const logo =
            document.querySelector(
                'input[name="logo"]:checked'
            ).value;

        const contactMethod =
            document.getElementById(
                "contact"
            ).value;

        const customerContact =
            document.getElementById(
                "customerContact"
            ).value.trim();

        const message =
            document.getElementById(
                "message"
            ).value.trim();



        /* ==================================================
           WHATSAPP MESSAGE
        ================================================== */

        let text =

            "Hello KAYVIC WEB STUDIO 👋\n\n" +

            "I'd like to get a website for my business.\n\n" +

            "━━━━━━━━━━━━━━━━━━\n" +

            "BUSINESS DETAILS\n" +

            "━━━━━━━━━━━━━━━━━━\n\n" +

            "Business Name: " +
            businessName +

            "\n\nBusiness Type: " +
            businessType +

            "\n\nCurrent Website: " +
            hasWebsite +

            "\n\nMain Goal: " +
            goal +

            "\n\nWebsite Package: " +
            selectedPackage +

            "\n\nBusiness Logo: " +
            logo +

            "\n\nPreferred Contact: " +
            contactMethod +

            "\n\nMy Contact Details: " +
            customerContact;



        if (message !== "") {

            text +=

                "\n\nAdditional Information:\n" +
                message;

        }



        text +=

            "\n\n━━━━━━━━━━━━━━━━━━\n" +

            "I'm ready to discuss my website.";

        

        /* ==================================================
           KAYVIC WHATSAPP
           09067024934
        ================================================== */

        const phone =
            "2349067024934";


        const whatsapp =
            "https://wa.me/" +
            phone +
            "?text=" +
            encodeURIComponent(text);


        window.location.href = whatsapp;

    });

});