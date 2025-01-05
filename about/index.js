import { Style_Config } from "../style_config.js";
window.addEventListener('DOMContentLoaded', init);

/**
 * Initialize the page with this function
 */
function init() {
    choose_header_icons();
    // choose_header_background();

    const style_config = new Style_Config();
    const light_button = document.querySelector("button#light");
    const dark_button = document.querySelector("button#dark");
    light_button.addEventListener("click", () => {
            set_color_theme(style_config, 'light')});
    dark_button.addEventListener("click", () => {
            set_color_theme(style_config, 'dark')});
    set_color_theme(style_config, 'light');
}

/**
 * Disables all icons and randomly selects two icons to display near the header
 */
function choose_header_icons() {
    const idx1 = Math.floor(Math.random() * 9);
    let idx2 = Math.floor(Math.random() * 9);
    while(idx2 == idx1) {
        idx2 = Math.floor(Math.random() * 9);
    }
    const icons = document.getElementsByClassName("header-icon");
    const icon_containers = document.getElementsByClassName("header-icon-container");
    
    for(let i = 0; i < icons.length; i ++) {
        icons[i].style.display = "none";
        if(i == idx1){
            icons[i].style.display = "block";
            icons[i].style.top = "-80px"
            icon_containers[0].appendChild(icons[i]);
        }
        if(i == idx2){
            icons[i].style.display = "block";
            icons[i].style.bottom = "-80px";
            icons[i].style.left = "-80px";
            icon_containers[1].appendChild(icons[i]);
        }
    }
}

/**
 * Chooses the pattern of the header gradient
 * not using this for now until I figure out a better header card design 
 */
function choose_header_background() {
    const red_value = Math.floor(Math.random() * 255);
    const green_value = Math.floor(Math.random() * 255);
    const blue_value = Math.floor(Math.random() * 255);

    const header = document.querySelector("header");

    const x_origin = Math.floor(Math.random() * 100);
    const y_origin = Math.floor(Math.random() * 50);
    header.style.background = "radial-gradient(circle at " + x_origin + "% " + y_origin 
        + "%, rgba(" + red_value + ", " + green_value + ", " + blue_value
        + ", 0.8) 0%, rgba(147, 147, 255, 1) 70%,  rgba(147, 147, 255, 1) 100%)"

    // const rotation = Math.floor(Math.random() * 180) - 90;
    const rotation = 0;
    console.log(rotation);
    header.style.background = "linear-gradient(" + rotation + "deg,"
        + "rgba(147, 147, 255, 0.5) ," 
        + "rgba(" + red_value + ", " + green_value + ", " + blue_value + ", 0.8))"; 
}

/**
 * Sets the color theme of the website
 * @param {style config object to use to determine colors} style_config
 * @param {string either light or dark} theme 
 */
function set_color_theme(style_config, theme) {
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
    } else {
        throw new Error(`invalid theme '${theme}' provided`);
    }
}