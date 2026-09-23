const themeButton = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  if (themeButton) themeButton.textContent = "☀";
}

if (themeButton) {
  themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      themeButton.textContent = "☀";
      localStorage.setItem("theme", "dark");
    } else {
      themeButton.textContent = "☾";
      localStorage.setItem("theme", "light");
    }
  });
}
