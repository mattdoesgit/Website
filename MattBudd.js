var coll = document.getElementsByClassName("content");

// Add event listeners to each button
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        // Toggle between adding and removing the "active" class
        this.classList.toggle("active");
        
        // Get the content element associated with the button
        var content = this.nextElementSibling;
        
        // Check if the content is already open or not
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
