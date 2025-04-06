const body = document.body;
const button = document.getElementById('colorButton');
const headings = document.querySelectorAll('h1, p:not(#fastClickText)'); // Select all <h1> and <p> except the new text
const fastClickText = document.getElementById('fastClickText'); // Select the new text

// Define the colors and corresponding text/button colors
const colors = [
    { background: '#000', text: '#fff', button: '#fff', buttonText: '#000', fastClickText: '#fff' }, // Black background, white text, white button, black button text, white fastClickText
    { background: '#f00', text: '#000', button: '#000', buttonText: '#fff', fastClickText: '#000' }, // Red background, black text, black button, white button text, black fastClickText
    { background: '#800080', text: '#000', button: '#000', buttonText: '#fff', fastClickText: '#ff00ff' }, // Purple background, black text, black button, white button text, fluo pink fastClickText
    { background: '#f0f0f0', text: '#333', button: '#007BFF', buttonText: '#fff', fastClickText: '#000' } // Light grey background, dark grey text, blue button, white button text, black fastClickText
];

let currentIndex = 0;

button.addEventListener('click', () => {
    // Cycle through the colors
    currentIndex = (currentIndex + 1) % colors.length;
    const { background, text, button: buttonColor, buttonText, fastClickText: fastClickColor } = colors[currentIndex];

    // Apply the new colors
    body.style.backgroundColor = background;
    body.style.color = text;
    button.style.backgroundColor = buttonColor;
    button.style.color = buttonText;
    fastClickText.style.color = fastClickColor;

    // Ensure <h1> and <p> texts are pure white when the background is black
    if (background === '#000') {
        headings.forEach(heading => {
            heading.style.color = '#fff'; // Pure white
        });
    } else {
        headings.forEach(heading => {
            heading.style.color = text; // Default text color
        });
    }
});