document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let message = document.getElementById("message");

    if (!message.value) {
        if (!message.value) {
            message.classList.add("is-invalid");
        }
    } else {
        alert("Form submitted successfully!");
    }
});