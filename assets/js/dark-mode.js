document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const darkMode = localStorage.getItem("dark-mode");

    // Set initial mode
    if (darkMode === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️"; // Set sun icon for dark mode
    } else {
        toggleButton.textContent = "🌙"; // Set moon icon for light mode
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            toggleButton.textContent = "☀️"; // Change to sun icon
        } else {
            localStorage.setItem("dark-mode", "disabled");
            toggleButton.textContent = "🌙"; // Change to moon icon
        }
    });
});