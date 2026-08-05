const sections = document.querySelectorAll("section");

const revealSections = () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        const screenPosition = window.innerHeight - 100;


        if(sectionTop < screenPosition){

            section.classList.add("show");

        }

    });

};


window.addEventListener("scroll", revealSections);

revealSections();
const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector("nav ul");


menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

