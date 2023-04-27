const clickpress = document.getElementById("clickpress");
let onMobile = !!navigator.userAgent.match(/iphone|android|blackberry/ig) || false;

if (onMobile) {
    clickpress.innerText = "Press";
} else {
    clickpress.innerText = "Click";
}