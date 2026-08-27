// Inaaya's Mart — Header behavior
// Handles: mobile nav drawer open/close, sticky header shadow on scroll,
// basic search form guard (prevents empty submits).
// Depends on: components/header/header.html markup + header.css classes.

export function initHeader() {
  const toggle = document.getElementById("mobileMenuToggle");
  const closeBtn = document.getElementById("mobileMenuClose");
  const drawer = document.getElementById("mobileNavDrawer");
  const backdrop = document.getElementById("mobileNavBackdrop");
  const header = document.getElementById("site-header");
  const searchForm = document.getElementById("siteSearchForm");
  const searchInput = document.getElementById("siteSearchInput");

  function openDrawer() {
    if (!drawer || !backdrop || !toggle) return;
    drawer.classList.add("is-open");
    backdrop.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    if (!drawer || !backdrop || !toggle) return;
    drawer.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  toggle?.addEventListener("click", openDrawer);
  closeBtn?.addEventListener("click", closeDrawer);
  backdrop?.addEventListener("click", closeDrawer);

  // Close drawer on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });

  // Sticky header shadow on scroll
  if (header) {
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY > 4;
      header.style.boxShadow = scrolled ? "var(--shadow-sm)" : "none";
      lastScroll = window.scrollY;
    }, { passive: true });
  }

  // Prevent empty search submits
  searchForm?.addEventListener("submit", (e) => {
    if (!searchInput || !searchInput.value.trim()) {
      e.preventDefault();
      searchInput?.focus();
    }
  });
}

// Auto-init if this script is loaded directly (not as part of router bootstrap)
if (document.readyState !== "loading") {
  initHeader();
} else {
  document.addEventListener("DOMContentLoaded", initHeader);
}
