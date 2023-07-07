window.addEventListener('DOMContentLoaded', init);

function init() {
    const idx1 = Math.floor(Math.random() * 9);
    let idx2 = Math.floor(Math.random() * 9);
    while(idx2 == idx1) {
        idx2 = Math.floor(Math.random() * 9);
    }
    const icons = document.getElementsByClassName("header-icon");
    console.log(idx1)
    console.log(idx2)
    const icon_containers = document.getElementsByClassName("header-icon-container");
    
    for(let i = 0; i < icons.length; i ++) {
        icons[i].style.display = "none";
        if(i == idx1){
            icons[i].style.display = "block";
            icons[i].style.top = "-128px"
            icon_containers[0].appendChild(icons[i]);
        }
        if(i == idx2){
            icons[i].style.display = "block";
            icons[i].style.bottom = "-128px";
            icons[i].style.left = "-72px";
            icon_containers[1].appendChild(icons[i]);
        }
    }
}