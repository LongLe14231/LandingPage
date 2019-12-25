function toggleDropdown() {
    
    let navbarToggle = document.getElementById("navbar-toggle");
    
    
    //if we get topnav element, we add responsive to it, otherwise, we keep the name the same
    if(navbarToggle.className === "topnav") {
        
        navbarToggle.className += " responsive";
    
    }
    else {
        navbarToggle.className = "topnav";
        
    }
    
    
}