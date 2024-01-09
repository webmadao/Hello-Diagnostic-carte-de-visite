const modal = document.querySelector("#modal");
const btnOpenModal = document.querySelector("#openmodal");
const btnCloseModal = document.querySelector("#closemodal");
const btnWhatsapp = document.querySelector(".whatsapp");
const btnMail = document.querySelector(".mail");

btnOpenModal.addEventListener("click", () => {
    modal.style.display = "block";
});

btnCloseModal.addEventListener("click", () => {
    modal.style.display = "none";
    modal.classList.remove("animate__animated", "animate__fadeIn");
});

btnWhatsapp.addEventListener("click", () => {
    const currentUrl = encodeURIComponent(window.location.href);
    const whatsappUrl = `https://wa.me/5491154245916?text=Hola%20estoy%20interesado%20en%20tu%20servicio%20&url=${currentUrl}`;
    window.open(whatsappUrl);
});


btnMail.addEventListener("click", () => {
    const currentUrl = encodeURIComponent(window.location.href);
    const mailtoUrl = `mailto:KQ5k6@example.com?subject=Hola%20estoy%20interesado%20en%20tu%20servicio%20&body=${currentUrl}`;
    window.open(mailtoUrl);
});