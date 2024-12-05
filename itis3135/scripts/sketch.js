// Get the canvas element and its context
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

// Set initial drawing settings
let isDrawing = false;
let x = 0;
let y = 0;

// Start drawing when the mouse is pressed
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    x = e.offsetX;
    y = e.offsetY;
});

// Stop drawing when the mouse is released
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    x = 0;
    y = 0;
});

// Draw on the canvas while the mouse is moving
canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = '#8B4513'; // Brown color for the drawing
        ctx.lineWidth = 5;
        ctx.stroke();
        x = e.offsetX;
        y = e.offsetY;
    }
});

// Function to clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}