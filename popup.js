// Handle the menu toggle functionality
document.getElementById("menu-toggle").addEventListener("click", function() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("show");  // Toggle the visibility of the menu
});

// Sample data to update the content dynamically
document.getElementById("prompts-count").innerText = 120; // Example count
document.getElementById("categories-count").innerText = 10; // Example count
document.getElementById("platforms-count").innerText = 4; // Example count

// Example logic to change platform status based on platform detection (pseudo-code)
function detectPlatform() {
  // This logic is just an example, replace it with real detection
  const platforms = ["ChatGPT", "Gemini", "DeepSeek", "Meta.AI"];
  platforms.forEach(platform => {
    const platformLogo = document.getElementById(`${platform.toLowerCase()}-logo`);
    const platformStatus = document.getElementById(`${platform.toLowerCase()}-status`);
    
    if (/* condition to check if platform is active */) {
      platformLogo.classList.remove("opacity-50");
      platformLogo.classList.add("opacity-100");
      platformStatus.innerText = "On";
    } else {
      platformLogo.classList.add("opacity-50");
      platformStatus.innerText = "Off";
    }
  });
}

detectPlatform();
