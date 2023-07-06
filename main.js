window.addEventListener('DOMContentLoaded', init);

function init() {
    const idx1 = Math.floor(Math.random() * 8);
    let idx2 = Math.floor(Math.random() * 8);
    while(idx2 == idx1) {
        idx2 = Math.floor(Math.random() * 8);
    }
    const icons = document.getElementsByClassName("header-icon");
    console.log(idx1)
    console.log(idx2)
    const icon_containers = document.getElementsByClassName("header-icon-container");
    
    for(let i = 0; i < icons.length; i ++) {
        icons[i].style.display = "none";
        if(i == idx1){
            icons[i].style.display = "block";
            icons[i].style.left = "0"
            icon_containers[0].appendChild(icons[i]);
        }
        if(i == idx2){
            icons[i].style.display = "block";
            icons[i].style.bottom = "0";
            icon_containers[1].appendChild(icons[i]);
        }
    }
}