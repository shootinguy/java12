document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const formMessageElement = document.querySelector("#form_message");
    const checkFormButton = document.querySelector("#checkFormBtn");

    const discountCheckbox = document.querySelector("#student_discount");
    const quantityInput = document.querySelector("#quantity");
    const discountMessageElement = document.querySelector("#discount_message");
    const applyDiscountButton = document.querySelector("#applyDiscountBtn");

    const statusInput = document.querySelector("#status");
    const pointsInput = document.querySelector("#points");
    const badgeMessageElement = document.querySelector("#badge_message");
    const checkBadgeButton = document.querySelector("#checkBadgeBtn");

    const notifyCheckbox = document.querySelector("#notify_box");
    const notifyMessageElement = document.querySelector("#notify_message");
    const toggleNotifyButton = document.querySelector("#toggleNotifyBtn");

    if (checkFormButton) {
        checkFormButton.addEventListener('click', function() {
            if (nameInput && emailInput && formMessageElement) {
                const name = nameInput.value;
                const email = emailInput.value;

                if (name !== "" && email !== "") {
                    formMessageElement.textContent = "Form Complete!";
                } else {
                    formMessageElement.textContent = "Please fill in both fields.";
                }
            } else {
                console.error("One or more form elements not found.");
            }
        });
    }

    if (applyDiscountButton) {
        applyDiscountButton.addEventListener('click', function() {
            if (discountCheckbox && quantityInput && discountMessageElement) {
                const checked = discountCheckbox.checked;
                const quantity = parseInt(quantityInput.value);

                if (checked && quantity > 2) {
                    discountMessageElement.textContent = "Discount Applied!";
                } else {
                    discountMessageElement.textContent = "No discount available.";
                }
            } else {
                console.error("One or more discount elements not found.");
            }
        });
    }

    if (checkBadgeButton) {
        checkBadgeButton.addEventListener('click', function() {
            if (statusInput && pointsInput && badgeMessageElement) {
                const status = statusInput.value.toLowerCase();
                const points = parseInt(pointsInput.value);

                if (status === "active" && !isNaN(points) && points >= 100) {
                    badgeMessageElement.textContent = "You earned a badge!";
                } else {
                    badgeMessageElement.textContent = "No badge yet!";
                }
            } else {
                console.error("One or more badge elements not found.");
            }
        });
    }

    if (toggleNotifyButton) {
        toggleNotifyButton.addEventListener('click', function() {
            if (notifyCheckbox && notifyMessageElement) {
                const notify = notifyCheckbox.checked;

                if (!notify) {
                    notifyMessageElement.textContent = "Notifications are OFF.";
                } else {
                    notifyMessageElement.textContent = "Notifications are ON.";
                }
            } else {
                console.error("One or more notification elements not found.");
            }
        });
    }
});
