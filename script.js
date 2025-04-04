const is_logged_in = true;
const is_admin = false;
if (is_logged_in && is_admin) {
    console.log("Welcome, admin!");
}
else {
    console.log("Access denied.");
}

const has_search_term = false;
const has_category_selected = true;

if (has_search_term || has_category_selected) {
    console.log("Filters applied.");
}

const is_banned = false;
const is_active = false;

if (is_banned || !is_active) {
    console.log("Hide submit button.");
}

const logged_in = true;
const is_subscribed = true;

if (logged_in && is_subscribed) {
    console.log("Show premius content.");
}

const discount = 10;
const is_holiday = true;

if (discount > 0 && is_holiday) {
    console.log("Apply holiday discount.");
}

const agreed_to_terms = false;
if (!agreed_to_terms) {
    console.log("You must agree to terms first.");
}

const registered_less_than_7_days = true;
const profile_incomplete = true;

if (registered_less_than_7_days || profile_incomplete) {
    console.log("Welcome! Finish setting up your profile.");
}

function check_user_form() {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    if (name !== "" && email !== "") {
        document.querySelector("#form_message").textContent = "Form Complete!";
    }
    else {
        document.querySelector("#form_message").textContent = "Please fill in both fields.";
    }
}

function check_discount() {
    const checked = document.querySelector("#student_discount").checked;
    const quantity = document.querySelector("#quantity").value;

    if (checked && quantity > 2) {
        document.querySelector("#discount_message").textContent = "Discount Applied!";
    }
    else {
        document.querySelector("#discount_message").textContent = "No discount available.";
    }
}

function show_badge() {
    const status = document.querySelector("#status").value;
    const points = document.querySelector("#points").value;

    if (status == "active" && points >= 100) {
        document.querySelector("#badge_message").textContent = "You earned a badge!";
    }
    else {
        document.querySelector("#badge_message").textContent = "No badge yet!";
    }
}

function toggle_notice() {
    const notify = document.querySelector("#notify_box").checked;

    if (!notify) {
        document.querySelector("#notify_message").textContent = "Notifications are OFF.";
    }
    else {
        document.querySelector("#notify_message").textContent = "Notifications are ON.";
    }
}
