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

    // set initial state to about state 
    apply_bold("about-nav");
    display_section("about", "skills");

    // add all skills to a circular list, and use that as a basis for an 
    // animated carosel of 'skills'
    const skills = document.querySelectorAll("skill");
    let list = new circular_list(skills);
    remove_all_carosel(list);
    display_current_carosel_elements(list, "skills");

    document.addEventListener("wheel", (event) => {
        if(event.deltaY > 0) {
            list.go_previous();
            animate_upward_scroll(list);
            display_current_carosel_elements(list, "skills");
        } else if (event.deltaY < 0) {
            list.go_next();

            display_current_carosel_elements(list, "skills");
        }
    })
}

/**
 * a function to remove all of the elements from our DOM as to not overcowd 
 * with duplicate elements as the carosel is rotated
 * 
 * @param {circular_list} c_list the clist of all elements that should try to be
 * removed
 */
function remove_all_carosel(c_list) {
    c_list.array.forEach(element => {
        element.remove();
    });
}

/**
 * a function to take the currently displayed elements and the new elements that
 * will be displayed and animate their scroll upward
 * 
 * @param {circular_list} c_list 
 */
function animate_upward_scroll(c_list) {
    const prev_elem = c_list.get_previous();
    prev_elem.style.transform = "scale(0.5, 0.5)";
    const curr_elem = c_list.get_current();
    curr_elem.style.transform = "translateY(-1rem) scale(0.85, 0.85)";
    const next_elem = c_list.get_next();
    next_elem.style.transform = "translateY(-1rem) scale(0.85, 0.85)";
    const parent = document.getElementById(parent_id)
}

/**
 * a function to take the currently displayed elements and the new elements that
 * will be displayed and animate their scroll downward
 * 
 * @param {circular_list} c_list 
 */
function animate_downward_scroll(c_list) {

}

/**
 * a function to only display the current element in the circular list
 * 
 * @param {circular_list} c_list a list of HTML DOM elements containing the 
 * lists that should be rotated through
 * @param {string} parent_id the id of the parent element that we should add the
 * carosel elements to
 */
function display_current_carosel_elements(c_list, parent_id) {
    remove_all_carosel(c_list);
    const prev_elem = c_list.get_previous();
    prev_elem.style.transform = "scale(0.85, 0.85)";
    const curr_elem = c_list.get_current();
    curr_elem.style.transform = "scale(1, 1)";
    const next_elem = c_list.get_next();
    next_elem.style.transform = "scale(0.85, 0.85)";
    const parent = document.getElementById(parent_id)
    parent.appendChild(prev_elem);
    parent.appendChild(curr_elem);
    parent.appendChild(next_elem);
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