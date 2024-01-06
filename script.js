const btnWhatsapp = document.querySelector(".whatsapp")
const btnmail = document.querySelector(".mail");

btnWhatsapp.addEventListener("click", () => {
    const currentUrl = encodeURIComponent(window.location.href);
    const whatsappUrl = `https://wa.me/5491154245916?text=Hola%20estoy%20interesado%20en%20tu%20servicio%20&url=${currentUrl}`;
    window.open(whatsappUrl);
});


btnmail.addEventListener("click", () => {
    const currentUrl = encodeURIComponent(window.location.href);
    const mailtoUrl = `mailto:KQ5k6@example.com?subject=Hola%20estoy%20interesado%20en%20tu%20servicio%20&body=${currentUrl}`;
    window.open(mailtoUrl);
});