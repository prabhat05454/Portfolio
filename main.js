
(function () {
  emailjs.init("PcEOMsc_WDkpiIGlA"); 
})();
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
  });
}
const menuLinks = document.querySelectorAll(".menu a");
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show-menu");
  });
});
const projectCards = document.querySelectorAll(".project-card");

function revealOnScroll() {
  const triggerPoint = window.innerHeight * 0.85;

  projectCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerPoint) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("load", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_jh0xx0v",   
      "template_gidvagk",  
      this
    ).then(
      () => {
        alert("✅ Message sent successfully!");
        contactForm.reset();
      },
      (error) => {
        alert("❌ Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      }
    );
  });
}
