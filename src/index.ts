document.addEventListener("DOMContentLoaded", () => {
    const sliders = ["a", "b", "c"];
    sliders.forEach(id => {
        const slider = document.getElementById(id) as HTMLInputElement;
        const valueDisplay = document.getElementById(`${id}-value`);
        slider.addEventListener("input", () => {
            if (valueDisplay) valueDisplay.textContent = slider.value;
        });
    });
});

