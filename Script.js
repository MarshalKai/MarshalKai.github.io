const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  // switch emoji
  if (document.body.classList.contains("light")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});




// IMAGE VIEWER
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
document.addEventListener("mousemove", () => {
  document.querySelector(".hero").classList.add("active");
});
    });
  });
});