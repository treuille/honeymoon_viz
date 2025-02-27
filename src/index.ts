// Indicate that the script has been reloaded by write a timestamp to the console
console.log('Script reloaded:', new Date());

document.addEventListener("DOMContentLoaded", () => {
    let popupWindow: Window | null = null;
    const sliderValues = {
        a: 50,
        b: 50,
        c: 50
    };

    // No color preview needed

    // Handle sliders
    const sliders = ["a", "b", "c"];
    sliders.forEach(id => {
        const slider = document.getElementById(id) as HTMLInputElement;
        const valueDisplay = document.getElementById(`${id}-value`);
        sliderValues[id as keyof typeof sliderValues] = parseInt(slider.value);

        slider.addEventListener("input", () => {
            const value = parseInt(slider.value);
            if (valueDisplay)
                valueDisplay.textContent = slider.value;

            // Update the value in our object
            sliderValues[id as keyof typeof sliderValues] = value;

            // Update popup if it exists and is open
            if (popupWindow && !popupWindow.closed) {
                popupWindow.postMessage({
                    type: 'updateColor',
                    red: sliderValues.a,
                    green: sliderValues.b,
                    blue: sliderValues.c
                }, '*');
            }
        });
    });

    // Handle WebGL popup button
    const launchButton = document.getElementById('launch-webgl') as HTMLButtonElement;
    launchButton.addEventListener('click', () => {
        // Close existing popup if open
        if (popupWindow && !popupWindow.closed) {
            popupWindow.close();
        }

        // Launch new popup in fullscreen mode without parameters in URL
        const url = 'popup.html';
        popupWindow = window.open(
            url,
            'WebGLPopup',
            'fullscreen=yes,menubar=no,toolbar=no,location=no,status=no'
        );

        if (!popupWindow) {
            alert('Popup blocked! Please allow popups for this site.');
            return;
        }

        // Wait for popup to load, then send initial color values
        popupWindow.onload = () => {
            if (popupWindow) {
                // Send initial color values
                popupWindow.postMessage({
                    type: 'updateColor',
                    red: sliderValues.a,
                    green: sliderValues.b,
                    blue: sliderValues.c
                }, '*');

                console.log('Popup window loaded and initialized with color values');
            }
        };

        // Request fullscreen mode when popup loads
        setTimeout(() => {
            if (popupWindow && !popupWindow.closed) {
                // Try to make fullscreen
                try {
                    popupWindow.document.documentElement.requestFullscreen();
                } catch (e) {
                    console.error("Couldn't enter fullscreen mode:", e);
                }
            }
        }, 500);
    });
});

