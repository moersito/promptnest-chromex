document.getElementById("googleLogin").addEventListener("click", function() {
    chrome.identity.getAuthToken({interactive: true}, function(token) {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
        } else {
            console.log("Logged in with Google, Token:", token);
            localStorage.setItem("authToken", token);
            window.location.href = "dashboard.html"; // Redirect to main app
        }
    });
});

document.getElementById("guestMode").addEventListener("click", function() {
    localStorage.setItem("guestMode", "true");
    window.location.href = "dashboard.html"; // Redirect to main app
});
