import { Modal } from "./modal.js";
import { alertError } from "./alert-error.js";
import { calculateBMI, notANumber } from "./utilities.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

inputWeight.oninput = () => alertError.close();
inputHeight.oninput = () => alertError.close();

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

  if (weightOrHeightIsNotANumber) {
    alertError.open();
    return;
  }

  const result = calculateBMI(weight, height);
  displayResultMessage(result);
};


function displayResultMessage(result){
  const message = `Your BMI is ${result}`;

  Modal.message.innerText = message;

  Modal.open();
}
