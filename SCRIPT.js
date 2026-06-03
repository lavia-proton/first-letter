const enterBtn = document.getElementById('enterBtn');
const passwordInput = document.getElementById('passwordInput');

function verifyAndRedirect() {
    // Collects typed text, drops spaces, and makes it lowercase
    const inputCode = passwordInput.value.trim().toLowerCase();

    if (inputCode !== "") {
        // Redirects directly to [entered-text].html
        window.location.href = inputCode + ".html";
    }
}

// Click listener
enterBtn.addEventListener('click', verifyAndRedirect);

// Enter key listener
passwordInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        verifyAndRedirect();
    }
});