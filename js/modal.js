/* Modal */
export const Modal = {
  /* Modal variables */
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),

  /* Modal functions */
  open() {
    Modal.wrapper.classList.add("open");
  },
  close() {
    Modal.wrapper.classList.remove("open");
  },
};

/* Modal button close */
Modal.buttonClose.onclick = () => {
  Modal.close();
};

window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
  if (event.key === "Escape") {
    Modal.close();
  }
}
