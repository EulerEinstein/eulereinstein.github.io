// Portfolio interactions
// Keeps the page lightweight and adds a small footer year safeguard.
document.addEventListener("DOMContentLoaded", () => {
  const footerText = document.querySelector("footer p");
  if (!footerText) return;

  const currentYear = new Date().getFullYear();
  footerText.textContent = `© ${currentYear} Mohamad Afif Irfan. All rights reserved.`;
});
