// Đảm bảo mã chạy sau khi toàn bộ cây DOM đã được tải
document.addEventListener("DOMContentLoaded", () => {
  // --- Chức năng 1: Header thay đổi khi cuộn ---
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      // Nếu cuộn xuống hơn 50px
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // --- Chức năng 2: Dropdown Menu cho Desktop ---
  const navItemsWithDropdown = document.querySelectorAll(
    ".main-nav .has-dropdown"
  );
  navItemsWithDropdown.forEach((item) => {
    const link = item.querySelector("a");
    const dropdown = item.querySelector(".dropdown-menu");

    // Hiện khi di chuột vào
    item.addEventListener("mouseenter", () => {
      dropdown.classList.add("show");
    });

    // Ẩn khi di chuột ra
    item.addEventListener("mouseleave", () => {
      dropdown.classList.remove("show");
    });
  });

  // --- Chức năng 3: Menu Mobile (Hamburger) ---

  // Đóng menu khi nhấn vào overlay

  if (window.innerWidth <= 992) {
    const footerColumns = document.querySelectorAll(".footer-column");
    footerColumns.forEach((column) => {
      const title = column.querySelector("h4");
      title.addEventListener("click", () => {
        // Bật/tắt accordion được click
        column.classList.toggle("active");
      });
    });
  }
});
