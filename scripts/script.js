function switchTab(evt, tabName) {
    var i, tabcontent, tablink;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
      tablink[i].className = tablink[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
};

function standardTab() {
    let standard = document.getElementById('globals');
    standard.style.display = "block";
    standard.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
  standardTab();
});

