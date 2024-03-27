/**
 * Represents a blob object.
 * @typedef {Object} Blob
 * @property {number} x - The x-coordinate of the blob.
 * @property {number} y - The y-coordinate of the blob.
 * @property {number} radius - The radius of the blob.
 * @property {number} velocityY - The vertical velocity of the blob.
 * @property {string} color - The color of the blob.
 */

/**
 * Creates a new blob object.
 * @returns {Blob} The newly created blob object.
 */
function createBlob() {
    return {
        x: Math.random() * canvas.width,
        y: canvas.height,
        radius: Math.random() * 20 + 10,
        velocityY: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
    };
}

/**
 * Updates the position of the blobs.
 */
function updateBlobs() {
    for (let i = 0; i < blobs.length; i++) {
        const blob = blobs[i];
        blob.y -= blob.velocityY;

        if (blob.y + blob.radius < 0) {
            blobs[i] = createBlob();
        }
    }
}

/**
 * Draws the blobs on the canvas.
 */
function drawBlobs() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const blob of blobs) {
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fillStyle = blob.color;
        ctx.fill();
    }
}

/**
 * Animates the blobs by updating their positions and redrawing them on the canvas.
 */
function animate() {
    updateBlobs();
    drawBlobs();
    requestAnimationFrame(animate);
}

/**
 * Sets the size of the canvas to match the window size.
 */
function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Initialize the canvas and blobs
const canvas = document.getElementById("blobs-canvas");
const ctx = canvas.getContext("2d");
const blobs = [];
const colors = [
    "rgba(15, 17, 26, 0.6)",
    "rgba(24, 27, 41, 0.6)",
    "rgba(157, 161, 176, 0.6)",
    "rgba(130, 144, 196, 0.6)",
    "rgba(96, 102, 122, 0.6)",
    "rgba(0, 0, 0, 0.1)",
    "rgba(157, 161, 176, 0.6)"
];

// Create initial blobs
for (let i = 0; i < 10; i++) {
    blobs.push(createBlob());
}

// Set canvas size and listen for window resize event
setCanvasSize();
window.addEventListener("resize", setCanvasSize);

// Start the animation
animate();