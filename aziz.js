const menuToggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".links");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  links.classList.toggle("active");

  const isOpen = links.classList.contains("active");

  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Toggle dropdown menu (khususnya untuk mobile, karena hover tidak ada di touchscreen)
const dropdowns = document.querySelectorAll(".dropdown");
 
dropdowns.forEach(function (dropdown) {
  const toggleBtn = dropdown.querySelector(".dropdown-toggle");
 
  toggleBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // biar klik toggle tidak langsung ke-trigger listener document di bawah
 
    const isActive = dropdown.classList.contains("active");
 
    // Tutup dropdown lain yang sedang terbuka
    dropdowns.forEach(function (d) {
      d.classList.remove("active");
    });
 
    // Buka dropdown ini kalau sebelumnya tertutup
    if (!isActive) {
      dropdown.classList.add("active");
    }
  });
});
 
// Klik di luar dropdown akan menutup dropdown yang terbuka
document.addEventListener("click", function () {
  dropdowns.forEach(function (d) {
    d.classList.remove("active");
  });
});
 
// Tutup menu mobile & dropdown saat layar di-resize ke desktop
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    links.classList.remove("active");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", false);
    dropdowns.forEach(function (d) {
      d.classList.remove("active");
    });
  }
});