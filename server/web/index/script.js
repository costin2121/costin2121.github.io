const clickpress = document.getElementById("clickpress");
const darkModeToggle = document.getElementById('darkModeToggle');

let onMobile = !!navigator.userAgent.match(/iphone|android|blackberry/ig) || false;

let darkModeEnabled = (sessionStorage.getItem("costin-dark-mode-enabled") || "false") == "true";

enableTheme();

darkModeToggle.checked = darkModeEnabled;

if (onMobile) {
    clickpress.innerText = "Press";
} else {
    clickpress.innerText = "Click";
}

darkModeToggle.addEventListener('input', () => {
    darkModeEnabled = (sessionStorage.getItem("costin-dark-mode-enabled") == "true");
    sessionStorage.setItem('costin-dark-mode-enabled', darkModeToggle.checked);
    enableTheme();
})

/**
 *   --bg-color: #e4e4e4;
  --here-text-color: #595959;
  --slider-bg-color: #ccc;
  --slider-before-bg-color: #fff;
 */

function enableTheme() {
    document.body.style.setProperty("--bg-color", darkModeEnabled ? "#1b1b1b" : "#e4e4e4")
    document.body.style.setProperty("--body-fore-color", darkModeEnabled ? "#eaeaea" : "#151515")
    document.body.style.setProperty("--here-text-color", darkModeEnabled ? "#b1b1b1" : "#595959")
    // document.body.style.setProperty("--slider-before-bg-color", darkModeEnabled ? "1b1b1b" : "#e4e4e4")
}