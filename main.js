import circular_list from './circular-list.js';

window.addEventListener("DOMContentLoaded", init);

function init() {

    let list = circular_list(['zero', 'one', 'two', 'three', 'four']);
    
    console.log(list.get_current());
    list.go_next();
    console.log(list.get_current());
    // load in project cards
    
    // get parent

    // get each project's data 

    // load data into project card

    // append the project? 
}