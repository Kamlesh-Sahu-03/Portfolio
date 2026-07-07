const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const icon = menuBtn.querySelector("i");
const navItems = document.querySelectorAll(".nav-links a");

// Toggle sidebar
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

// Close sidebar on link click
navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    });
});
// form
emailjs.init("vB9B7DfbbBV_LozRB");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_mwoiuy2",
        "template_1hw274a",
        this
    )
    .then(() => {
        alert("Message Sent Successfully!");
        form.reset();
    })
    .catch((error) => {
        console.log(error);
        alert("Failed to send message");
    });
});