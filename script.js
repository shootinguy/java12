<!DOCTYPE html>
<html>
<head>
<title>Text Pop-up Examples</title>
</head>
<body>

<h1>Conditional Logic Examples (Console Output)</h1>
<p>The following examples will output text to your browser's developer console (press F12 to open it).</p>

<script>
  const isLoggedIn = true;
  const isAdmin = false;

  if (isLoggedIn && isAdmin) {
    console.log("Welcome, Admin!");
  } else{
    console.log("Access denied.");
  }

  const hasSearchTerm = false;
  const hasCategorySelected = true;

  if (hasSearchTerm || hasCategorySelected) {
    console.log("Filters applied");
  }

  const isBanned = false;
  const isActive = false;

  if (isBanned || !isActive) {
    console.log("Hide submit button");
  }

  const LoggedIn = true;
  const isSubscribed = true;

  if (LoggedIn && isSubscribed) {
    console.log("Show premium content.");
  }

  const discount = 10;
  const isHoliday = true;

  if (discount > 0 && isHoliday) {
    console.log("Apply holiday discount.");
  }

  const agreedToTerms = false;

  if (!agreedToTerms) {
    console.log("You must agree to terms first.");
  }

  const registeredLessThan7Days = true;
  const profileIncomplete = true;

  if (registeredLessThan7Days || profileIncomplete) {
    console.log("Welcome! Finish setting up your profile.");
  }
</script>

<h1>Interactive Form Examples (Text Appearing on the Page)</h1>

<div id="formSection">
  <h2>User Form</h2>
  <label for="name">Name:</label>
  <input type="text" id="name"><br><br>
  <label for="email">Email:</label>
  <input type="email" id="email"><br><br>
  <button onclick="checkUserForm()">Submit Form</button>
  <p id="formMessage"></p>
</div>

<div id="discountSection">
  <h2>Discount Checker</h2>
  <input type="checkbox" id="studentDiscount">
  <label for="studentDiscount">Student Discount</label><br><br>
  <label for="quantity">Quantity:</label>
  <input type="number" id="quantity" value="1"><br><br>
  <button onclick="checkDiscount()">Check Discount</button>
  <p id="discountMsg"></p>
</div>

<div id="badgeSection">
  <h2>Badge Award</h2>
  <label for="status">Status:</label>
  <select id="status">
    <option value="inactive">Inactive</option>
    <option value="active">Active</option>
  </select><br><br>
  <label for="points">Points:</label>
  <input type="number" id="points" value="0"><br><br>
  <button onclick="showBadge()">Check Badge</button>
  <p id="badgeMsg"></p>
</div>

<div id="notificationSection">
  <h2>Notification Toggle</h2>
  <input type="checkbox" id="notifyBox">
  <label for="notifyBox">Enable Notifications</label><br><br>
  <p id="notifyMsg"></p>
</div>

<script>
  function checkUserForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name !== "" && email !== "") {
      document.getElementById("formMessage").textContent = "Form complete!";
    } else {
      document.getElementById("formMessage").textContent = "Please fill in both fields.";
    }
  }


  function checkDiscount() {
    const checked = document.getElementById("studentDiscount").checked;
    const quantity = document.getElementById("quantity").value;

    if (checked && quantity > 2) {
      document.getElementById("discountMsg").textContent = "Discount Applied!";
    } else {
      document.getElementById("discountMsg").textContent = "No discount available.";
    }
  }

  function showBadge() {
    const status = document.getElementById("status").value;
    const points = document.getElementById("points").value;

    if (status === "active" && points >= 100) {
      document.getElementById("badgeMsg").textContent = "You earned a badge!";
    } else {
      document.getElementById("badgeMsg").textContent = "No badge yet";
    }
  }

  function toggleNotice() {
    const notify = document.getElementById("notifyBox").checked;

    if (!notify) {
      document.getElementById("notifyMsg").textContent = "Notifications are OFF";
    } else {
      document.getElementById("notifyMsg").textContent = "Notifications are ON";
    }
  }

  
  toggleNotice();
</script>

</body>
</html>
