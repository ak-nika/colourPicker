document.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("div");
    const color = document.getElementById("color");
    const colorName = document.getElementById("colorName");

    color.addEventListener("input", () => {
        div.style.background = color.value;
        colorName.innerText = color.value;
    })
})