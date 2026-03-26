// Recuperar tema salvo ou usar preferência do sistema
const savedTheme = localStorage.getItem("theme") || "dark";
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

// Aplicar tema inicial
if (initialTheme === "light") {
  document.body.classList.add("light-mode");
}

// Obter referência do botão
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

// Função para alternar tema
function toggleTheme() {
  const isLightMode = document.body.classList.contains("light-mode");

  if (isLightMode) {
    document.body.classList.remove("light-mode");
    localStorage.setItem("theme", "dark");
    themeIcon.textContent = "☀️";
  } else {
    document.body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
    themeIcon.textContent = "🌙";
  }
}

// Adicionar event listener ao botão
themeToggle.addEventListener("click", toggleTheme);

// Atualizar ícone inicial
const isLightMode = document.body.classList.contains("light-mode");
themeIcon.textContent = isLightMode ? "☀️" : "🌙";
