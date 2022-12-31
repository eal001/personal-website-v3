import circular_list from './circular-list.js';

window.addEventListener("DOMContentLoaded", init);

function init() {

    // add event listeners to the nav buttons, so they show their corresponding 
    // section
    document.getElementById("about-nav").addEventListener("click", () => {
        apply_bold("about-nav");
        display_section("about", "skills");
    });
    document.getElementById("projects-nav").addEventListener("click", () => {
        apply_bold("projects-nav");
        display_section("projects");
    });
    document.getElementById("contact-nav").addEventListener("click", () => {
        apply_bold("contact-nav");
        display_section("contact");
    });
    display_section();

    // add all skills to a circular list, and use that as a basis for an 
    // animated carosel of 'skills'
    const skills = document.querySelectorAll("skill");
    let list = new circular_list(skills);
    display_current_index(list);
}

/**
 * a function to only display the current element in the circular list
 * 
 * @param {circular_list} c_list a list of HTML DOM elements containing the lists that should be
 * rotated through
 */
function display_current_index(c_list) {
    c_list.array.forEach(element => {
        element.style.display = "none";
    });

    c_list.get_current().style.display = "block";
}


/**
 * a function to display certain sections of the page, while hiding others
 * 
 * @param {object} arguments list of string elements that we should make visible
 */
function display_section() {
    document.querySelectorAll('section').forEach(element => {
        element.style.display = "none"
    });
    for (let i = 0; i < arguments.length; i++) {
        document.getElementById(arguments[i]).style.display = "block";
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

export default null;