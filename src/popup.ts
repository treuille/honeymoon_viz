// Add type declaration for the tailwind property on window
declare global {
    interface Window {
        tailwind?: {
            config: any;
        };
    }
}

// Default color values
let redValue = 0.5;
let greenValue = 0.5;
let blueValue = 0.5;

// Configure Tailwind if it exists
if (typeof window.tailwind !== 'undefined') {
    window.tailwind.config = {
        darkMode: 'class',
        theme: {
            extend: {
                transitionProperty: {
                    'opacity': 'opacity'
                },
                transitionDuration: {
                    '1000': '1000ms'
                }
            }
        }
    };
}

// Initialize WebGL
document.addEventListener('DOMContentLoaded', () => {
    // Handle info overlay
    const infoOverlay = document.getElementById('info-overlay');
    if (infoOverlay) {
        // Hide overlay after a few seconds
        setTimeout(() => {
            infoOverlay.classList.remove('opacity-100');
            infoOverlay.classList.add('opacity-0');
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
        console.log('Received message from parent:', event.data);
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
        // Show the info overlay briefly when toggling fullscreen
        const infoOverlay = document.getElementById('info-overlay');
        if (infoOverlay) {
            // Make it visible
            infoOverlay.classList.remove('opacity-0');
            infoOverlay.classList.add('opacity-100');
            
            // Hide it again after a few seconds
            setTimeout(() => {
                infoOverlay.classList.remove('opacity-100');
                infoOverlay.classList.add('opacity-0');
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
