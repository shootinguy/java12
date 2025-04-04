function check_user_form() {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageElement = document.querySelector("#form_message");

    if (nameInput && emailInput && messageElement) {
        const name = nameInput.value;
        const email = emailInput.value;

        if (name !== "" && email !== "") {
            messageElement.textContent = "Form Complete!";
        } else {
            messageElement.textContent = "Please fill in both fields.";
        }
    } else {
        console.error("One or more form elements not found.");
    }
}

function check_discount() {
    const discountCheckbox = document.querySelector("#student_discount");
    const quantityInput = document.querySelector("#quantity");
    const messageElement = document.querySelector("#discount_message");

    if (discountCheckbox && quantityInput && messageElement) {
        const checked = discountCheckbox.checked;
        const quantity = parseInt(quantityInput.value);

        if (checked && quantity > 2) {
            messageElement.textContent = "Discount Applied!";
        } else {
            messageElement.textContent = "No discount available.";
        }
    } else {
        console.error("One or more discount elements not found.");
    }
}

function show_badge() {
    const statusInput = document.querySelector("#status");
    const pointsInput = document.querySelector("#points");
    const messageElement = document.querySelector("#badge_message");

    if (statusInput && pointsInput && messageElement) {
        const status = statusInput.value.toLowerCase(); 
        const points = parseInt(pointsInput.value);

        if (status === "active" && !isNaN(points) && points >= 100) {
            messageElement.textContent = "You earned a badge!";
        } else {
            messageElement.textContent = "No badge yet!";
        }
    } else {
        console.error("One or more badge elements not found.");
    }
}

function toggle_notice() {
    const notifyCheckbox = document.querySelector("#notify_box");
    const messageElement = document.querySelector("#notify_message");

    if (notifyCheckbox && messageElement) {
        const notify = notifyCheckbox.checked;

        if (!notify) {
            messageElement.textContent = "Notifications are OFF.";
        } else {
            messageElement.textContent = "Notifications are ON.";
        }
    } else {
        console.error("One or more notification elements not found.");
    }
}
