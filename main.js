window.addEventListener("DOMContentLoaded", init);

function init() {

    // add event listeners to the nav buttons, so they show their corresponding 
    // section
    document.getElementById("about-nav").addEventListener("click", () => {
        apply_bold("about-nav");
        display_section("about");
    });
    document.getElementById("projects-nav").addEventListener("click", () => {
        apply_bold("projects-nav");
        display_section("projects");
    });
    document.getElementById("contact-nav").addEventListener("click", () => {
        apply_bold("contact-nav");
        display_section("contact");
    });
    // set initial state to about state 
    apply_bold("about-nav");
    display_section("about");

}


/**
 * a function to display certain sections of the page, while hiding others
 * 
 * @param {list} arguments list of string elements that we should make visible
 */
function display_section() {
    document.querySelectorAll('section').forEach(element => {
        element.style.display = "none"
    });
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
        const section = document.getElementById(arguments[i])
        section.style.display = "block";
        display_nav_span(arguments[i] + '-nav');
    };
}

/**
 * a function to turn all nav links normal weight, and then bold a specific id
 *
 * @param {object} arguments list of strings that specify the id to make bold
 */
 function apply_bold() {
    document.querySelectorAll('nav a').forEach(element => {
        element.style.fontWeight = 400;
    });
    for (let i = 0; i < arguments.length; i++) {
        document.getElementById(arguments[i]).style.fontWeight = 1000;
    };
}
/**
 * a function to hide all the nav labels, then show only a specific one
 * 
 * @param {string} nav_section nav id whose string to display
 */
function display_nav_span(nav_section){
    document.querySelectorAll('a span').forEach(element => {
        element.style.display = "none";
    })
    nav_section = document.getElementById(nav_section).children;
    // console.log(nav_section[1]);
    nav_section[1].style.display = "block"
}

export default null;