// ✅ SPLASH SCREEN (RUNS ON LOAD)
window.onload = function () {
  const splash = document.getElementById("splash");

  setTimeout(function () {
    splash.style.opacity = "0";

    setTimeout(function () {
      splash.remove();
    }, 800);

  }, 2000);
};


// ✅ THEME TOGGLE
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});


// ✅ IMAGE VIEWER
const images = document.querySelectorAll(".gallery img");

images.forEach(img => {
  img.addEventListener("click", () => {
    const popup = document.createElement("div");
    popup.classList.add("popup");

    const fullImg = document.createElement("img");
    fullImg.src = img.src;

    popup.appendChild(fullImg);
    document.body.appendChild(popup);

    popup.addEventListener("click", () => {
      popup.remove();
    });
  });
});