import { init_color_theme } from "../init_color_theme.js";
window.addEventListener('DOMContentLoaded', init);

/**
 * Initialize the page with this function
 */
function init() {
    choose_header_icons();

    init_color_theme();
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