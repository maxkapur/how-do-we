const sidebar = document.querySelector(".sidebar .container");
const button = document.getElementById("sidebar-opener");

function toggleSidebarHidden() {
    if (sidebar.style.display == "grid") {
        button.innerText = "Show navigation";
        sidebar.style.display = "none";
    } else {
        button.innerText = "Hide navigation";
        sidebar.style.display = "grid";
    }
};

window.onresize = () => {
    if (window.matchMedia('(min-width: 800px)')) {
        button.innerText = "Hide navigation";
        sidebar.style.display = "grid";
    }
}
