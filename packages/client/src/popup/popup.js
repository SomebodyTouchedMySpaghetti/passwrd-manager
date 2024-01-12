export function createPopup(parentElement) {
    // Create a new popup element
    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.classList.add('popup');
    popup.style.width = '200px';
    popup.style.height = '300px';
    popup.style.backgroundColor = 'orange';

    const popupButton = document.createElement('button');
    popupButton.style.padding = '5rem'
    popupButton.textContent = 'Click me'

    popup.appendChild(popupButton)

    // Add the popup to the body
    parentElement.parentNode.insertBefore(popup, parentElement.nextSibling);

    // Close the popup when clicking outside of it
    document.addEventListener('click', function(event) {
        console.log(event.target)
        if (!popup.contains(event.target) && !parentElement.contains(event.target)) {
            popup.style.display = 'none';
        }
    });
}