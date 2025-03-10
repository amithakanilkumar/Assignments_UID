function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('age').value = age;

    if (age < 15 || age > 30) {
        alert("Age must be between 15 and 30.");
    }
}

function validateForm(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!password.match(passwordPattern)) {
        alert("Password must be at least 8 characters, include one number, one uppercase, and one lowercase letter.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    alert(`First Name: ${firstName}\nLast Name: ${lastName}`);

    document.getElementById('nameDisplay').innerHTML = `First Name: ${firstName} <br> Last Name: ${lastName}`;
    return true;
}
