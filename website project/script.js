// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Add hover event listeners to all elements with the "dropdown" class
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('mouseenter', function () {
            toggleDropdown(this);
        });

        dropdown.addEventListener('mouseleave', function () {
            toggleDropdown(this);
        });
    });
});

// Function to handle dropdown menu toggle
function toggleDropdown(dropdown) {
    var dropdownContent = dropdown.querySelector('.dropdown-content');
    dropdownContent.classList.toggle("show");
}
// script.js

function redirectToPage4() {
    window.location.href = "Flappybird.html";
}
