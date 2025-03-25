const animatedText = document.querySelector(".animated-text");
const newText = document.querySelector(".new-text");

window.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        animatedText.style.transform = "scale(1.5)";
        animatedText.style.opacity = "0";
        newText.style.opacity = "1";
    } else {
        animatedText.style.transform = "scale(1)";
        animatedText.style.opacity = "1";
        newText.style.opacity = "0";
    }
});

