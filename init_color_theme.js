import { Style_Config } from "./style_config.js";

const COLOR_THEME_FIELD = "color_theme";
/**
 * Initializes the color theme
 */
export function init_color_theme() {
    const style_config = new Style_Config();
    const light_button = document.querySelector("button#light");
    const dark_button = document.querySelector("button#dark");
    light_button.addEventListener("click", () => {
            set_color_theme(style_config, 'light')});
    dark_button.addEventListener("click", () => {
            set_color_theme(style_config, 'dark')});
    // remove theme button animation when initializing 
    const selection_background = document.querySelector("#color-mode #button-container #selection-background");
    selection_background.style.transition = "none";
    const theme = (localStorage.getItem(COLOR_THEME_FIELD) == 'dark') ? "dark" : "light";
    set_color_theme(style_config, theme);

    // give animation back when load is complete
    window.addEventListener("load", () => {
        selection_background.style.transition = style_config.switch_transition;
    })
}

/**
 * Sets the color theme of the website
 * @param {style config object to use to determine colors} style_config
 * @param {string either light or dark} theme 
 */
export function set_color_theme(style_config, theme) {

    if(theme != 'light' && theme != 'dark') {
        throw new Error(`invalid theme '${theme}' provided`);
    }
    localStorage.setItem(COLOR_THEME_FIELD, theme);
    const light_button = document.querySelector("button#light");
    const dark_button = document.querySelector("button#dark");
    const selection_background = document.querySelector("#color-mode #button-container #selection-background");
    const header_icons = document.querySelectorAll(".header-icon");
    const text_content_icons = document.querySelectorAll(".text-content img");

    const selection_background_transform = "translateY(-4rem) ";

    if (theme == 'light') {
        light_button.disabled = true;
        dark_button.disabled = false;
        selection_background.style.transform = selection_background_transform;
        header_icons.forEach(icon => {icon.style.filter = "";});
        text_content_icons.forEach(icon => {
                icon.style.filter = "";
                icon.style.opacity = "10%";
        });
        style_config.set_colors_to_css_variables("light");
    } else if (theme == 'dark') {
        light_button.disabled = false;
        dark_button.disabled = true;
        selection_background.style.transform = selection_background_transform + " translateX(4.25rem)";
        header_icons.forEach(icon => {icon.style.filter = "invert(100%)"});
        text_content_icons.forEach(icon => {icon.style.filter = "invert(100%)";});
        style_config.set_colors_to_css_variables("dark");
    }
}