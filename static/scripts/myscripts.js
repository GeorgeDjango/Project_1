function openPage(pageName, elmnt, color) {
    // Hides tabs with class="tabcontent" by default */
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    const tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block"; 
    
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();










