import {createPopup} from "../popup/popup";

const newField = document.getElementById('password');

// Add an event listener to the input field for focus
newField.addEventListener('focus', () => {
    // Call the function to create and display the popup
    console.log('qwe')
    createPopup(newField);
});