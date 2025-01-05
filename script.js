async function loadPartials() {
    const headerResponse = await fetch('./components/header.html');
    const headerHTML = await headerResponse.text();
    document.getElementById('header').innerHTML = headerHTML;
  
    const footerResponse = await fetch('./components/footer.html');
    const footerHTML = await footerResponse.text();
    document.getElementById('footer').innerHTML = footerHTML;

  // IMPORTANT: Once the header is injected, 
  // re-run any code that depends on elements in the header
  initializeThemeToggle(); 
}
  
window.addEventListener('DOMContentLoaded', loadPartials);

// Separate function to initialize the theme toggle
function initializeThemeToggle() {
  const body = document.body;
  const themeToggleLink = document.getElementById("theme-toggle");

  // Check localStorage for saved theme
  const savedTheme = localStorage.getItem("myportfolio_theme");
  if (savedTheme === "dark-theme") {
      body.classList.add("dark-theme");
      themeToggleLink.textContent = "Dark"; // If already in dark mode, text should say "Light"
  } else {
      themeToggleLink.textContent = "Light"; // Default (light mode), show "Dark"
  }

  // Toggle theme on link click
  themeToggleLink.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent the link's default behavior (scroll or reload)
      const isDark = body.classList.toggle("dark-theme");
      // If we just toggled to dark theme, text should say "Light"
      themeToggleLink.textContent = isDark ? "Dark" : "Light";

      // Save the chosen theme in localStorage
      localStorage.setItem("myportfolio_theme", isDark ? "dark-theme" : "");
  });
}
