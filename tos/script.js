let acceptButton = document.getElementById("accept-btn");
let declineButton = document.getElementById("decline-btn");

[acceptButton, declineButton].forEach(btn => {
    console.log("hey")
    btn.addEventListener('click',() => {
        window.location.href = '/api/redirect/index.html?to=/'
    })
})