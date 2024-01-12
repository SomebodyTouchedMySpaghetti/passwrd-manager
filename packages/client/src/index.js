import {createPopup} from "./components/popup";

const newField = document.getElementById('password');

console.log(newField)

// Add an event listener to the input field for focus
newField.addEventListener('focus', () => {
    // Call the function to create and display the popup
    console.log('qwe')
    createPopup(newField);
});