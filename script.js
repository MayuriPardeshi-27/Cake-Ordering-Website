function validateForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var cake = document.getElementById("cake").value;

    if (name === "" || email === "" || phone === "" || cake === "") {
        alert("Please fill all required fields");
        return false;
    }

    var emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (phone.length < 10) {
        alert("Phone number must be at least 10 digits");
        return false;
    }

    alert("Your order has been placed successfully!");
    return true;
}
