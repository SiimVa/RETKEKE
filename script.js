document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navRight = document.querySelector(".nav-right");
  const yearSpan = document.getElementById("year");

  if (navToggle && navRight) {
    navToggle.addEventListener("click", () => {
      navRight.classList.toggle("open");
    });

    // sulge menüü lingile vajutades (mobiilis mugavam)
    navRight.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navRight.classList.remove("open");
      });
    });
  }

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
