// func enableButtons
// enable or disable all of the button elements in the passed Array
const enableButtons = (buttonElementsArray, bool) => {
  buttonElementsArray.forEach(button => {
    button.disabled = !bool;
  });
}