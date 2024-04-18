document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("message").textContent = "I know it. I love you too.";
});

document.getElementById("obviouslyBtn").addEventListener("click", function() {
    document.getElementById("message").textContent = "You are my cutiepie.";
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    // Get viewport width and height
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    // Randomize position
    var newX = Math.floor(Math.random() * vw);
    var newY = Math.floor(Math.random() * vh);

    // Move the button to the new position
    document.getElementById("noBtn").style.position = "absolute";
    document.getElementById("noBtn").style.left = newX + "px";
    document.getElementById("noBtn").style.top = newY + "px";
});
