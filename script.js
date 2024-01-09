const modal = document.querySelector("#modal");
const btnOpenModal = document.querySelector("#openmodal");
const btnCloseModal = document.querySelector("#closemodal");


btnOpenModal.addEventListener("click", () => {
    modal.style.display = "block";
});

btnCloseModal.addEventListener("click", () => {
    modal.style.display = "none";
    modal.classList.remove("animate__animated", "animate__fadeIn");
});

