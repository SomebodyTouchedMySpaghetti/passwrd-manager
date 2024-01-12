export function isFocused(elementId) {
    const focusedElement = document.activeElement;

    // Check if the focused element is an input field
    const result = focusedElement.id === elementId;

    return result;
}