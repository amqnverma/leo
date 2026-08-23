// Minimal client-side navigation — swaps the URL and notifies the router
// in main.jsx without a full page reload. No routing library needed for
// a two-page site.
export function navigate(path) {
  if (window.location.pathname === path) return;
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo(0, 0);
}

// Attach to an anchor's onClick so plain left-clicks get SPA navigation
// while cmd/ctrl/shift-click and middle-click keep native browser behavior
// (open in new tab, etc).
export function handleNavClick(e, path) {
  if (e.defaultPrevented || e.button !== 0) return;
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  e.preventDefault();
  navigate(path);
}

// For links to an in-page section (e.g. the footer's "Blog" link to
// #updates) that must also work from a different page — navigate home
// first, then scroll to the section once it has mounted.
export function navigateToSection(e, sectionId) {
  if (e.defaultPrevented || e.button !== 0) return;
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  e.preventDefault();

  const scroll = () => document.getElementById(sectionId)?.scrollIntoView({ block: 'start' });

  if (window.location.pathname !== '/') {
    window.history.pushState({}, '', `/#${sectionId}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
    // Give React a tick to mount the home page before scrolling to it.
    setTimeout(scroll, 60);
  } else {
    scroll();
  }
}
