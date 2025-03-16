document.addEventListener("DOMContentLoaded", function () {
    // Opret knappen dynamisk
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "🌙 Dark Mode";
    toggleButton.classList.add("dark-mode-toggle");
    document.body.appendChild(toggleButton);

    // Tjek om Dark Mode tidligere var aktiveret
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggleButton.innerText = "☀️ Light Mode";
    }

    // Lyt efter klik på knappen
    toggleButton.addEventListener("click", function () {
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
            toggleButton.innerText = "🌙 Dark Mode";
        } else {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
            toggleButton.innerText = "☀️ Light Mode";
        }
    });
});
