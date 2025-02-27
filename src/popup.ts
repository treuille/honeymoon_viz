// Default color values
let redValue = 0.5;
let greenValue = 0.5;
let blueValue = 0.5;

// Removed tracking of initial values

// Reload functionality has been removed

// This function has been removed as we no longer use localStorage

// Add a more prominent console message at the very beginning
console.log('%c POPUP LOADED ', 'background: #222; color: #bada55; font-size: 16px;');

// File polling functionality has been removed

// Only set up message listener for color updates
window.addEventListener('message', (event) => {
    console.log('Received message from parent:', event.data);
});

// Initialize WebGL
document.addEventListener('DOMContentLoaded', () => {
    // Handle info overlay
    const infoOverlay = document.getElementById('info-overlay');
    if (infoOverlay) {
        // Hide overlay after a few seconds
        setTimeout(() => {
            infoOverlay.classList.add('hide-overlay');
        }, 3000);
    }
    
    const canvas = document.getElementById('webgl-canvas') as HTMLCanvasElement;
    const gl = canvas.getContext('webgl');

    if (!gl) {
        console.error('WebGL not supported');
        return;
    }

    // Set canvas size to match window
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl!.viewport(0, 0, canvas.width, canvas.height);
        render(); // Re-render when resized
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Function to update clear color based on slider values
    function updateClearColor(r: number, g: number, b: number) {
        gl!.clearColor(r, g, b, 1.0);
        render();
    }

    // Initialize with current values
    updateClearColor(redValue, greenValue, blueValue);

    // Simple render function
    function render() {
        gl!.clear(gl!.COLOR_BUFFER_BIT);
    }

    // Listen for messages from parent window
    window.addEventListener('message', (event) => {
        if (event.data.type === 'updateColor') {
            // Update our local variables
            redValue = event.data.red / 100;
            greenValue = event.data.green / 100;
            blueValue = event.data.blue / 100;
            
            // Update the display
            updateClearColor(redValue, greenValue, blueValue);
        }
    });

    // Support for entering full screen mode with overlay
    document.addEventListener('click', () => {
        console.log('Click detected - toggling fullscreen');
        
        // Show the info overlay briefly when toggling fullscreen
        const infoOverlay = document.getElementById('info-overlay');
        if (infoOverlay) {
            // Remove the 'hide-overlay' class to make it visible
            infoOverlay.classList.remove('hide-overlay');
            
            // Hide it again after a few seconds
            setTimeout(() => {
                infoOverlay.classList.add('hide-overlay');
            }, 3000);
        }
        
        // Toggle fullscreen
        if (!document.fullscreenElement) {
            // Enter fullscreen
            document.documentElement.requestFullscreen()
                .catch(e => console.error('Could not enter fullscreen:', e));
        } else {
            // Exit fullscreen
            document.exitFullscreen()
                .catch(e => console.error('Could not exit fullscreen:', e));
        }
    });

    // Add a global test function you can call from the console
    (window as any).testConsole = function() {
        console.log('%c Console test function called! ', 'background: green; color: white; font-size: 20px;');
        alert('Console test function called - check your console!');
        return 'Console is working!';
    };
});
