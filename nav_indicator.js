/**
 * Adds a pill behind the nav links. It follows the mouse while hovering over
 * the nav and rests behind the current page's link otherwise. On load it is
 * placed directly behind the current page's link with no animation.
 */
export function init_nav_indicator() {
    const nav = document.querySelector("nav");
    if (!nav) return;
    const links = Array.from(nav.querySelectorAll("a"));

    const indicator = document.createElement("span");
    indicator.className = "nav-indicator";
    nav.prepend(indicator);

    const normalize = (path) => path.endsWith("/") ? path + "index.html" : path;
    const current = links.find(a => normalize(new URL(a.href).pathname) === normalize(location.pathname));

    const place = (link) => {
        indicator.style.left = `${link.offsetLeft}px`;
        indicator.style.width = `${link.offsetWidth}px`;
        indicator.style.top = `${link.offsetTop}px`;
        indicator.style.height = `${link.offsetHeight}px`;
    };
    const rest = () => {
        if (current) {
            place(current);
            indicator.style.opacity = "";
        } else {
            indicator.style.opacity = "0";
        }
    };
    // reposition without animating (initial load, font load, resize)
    const snap = () => {
        indicator.style.transition = "none";
        rest();
        indicator.getBoundingClientRect(); // flush so the change applies untransitioned
        indicator.style.transition = "";
    };

    snap();
    // link sizes can change once web fonts finish loading
    window.addEventListener("load", snap);
    if (document.fonts) document.fonts.ready.then(snap);
    window.addEventListener("resize", snap);

    links.forEach(a => a.addEventListener("mouseenter", () => {
        place(a);
        indicator.style.opacity = "";
    }));
    nav.addEventListener("mouseleave", rest);
}
