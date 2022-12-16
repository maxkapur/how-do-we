function toggleSidebarHidden() {
    sidebar = document.querySelector(".sidebar .container");
    button = document.getElementById("sidebar-opener");
    if (sidebar.style.display == "block") {
        button.innerText = "Show navigation";
        sidebar.style.display = "none";
    } else {
        button.innerText = "Hide navigation";
        sidebar.style.display = "block";
    }
};
