// Getting ids of ranges
let borderRange = document.querySelector("#border-range");
let paddingRange = document.querySelector("#padding-range");
let contentRange = document.querySelector("#content-range");
// Getting ids of colors
let borderColor = document.querySelector("#border-color");
let paddingColor = document.querySelector("#padding-color");
let contentColor = document.querySelector("#content-color");
// Getting ids of classes
let borderBox = document.querySelector(".border");
let paddingBox = document.querySelector(".padding");
let contentBox = document.querySelector(".content");

// Let's attach event listeners
borderRange.addEventListener("change", () => {
    borderBox.style.padding = borderRange.value + "px"
})
paddingRange.addEventListener("change", () => {
    paddingBox.style.padding = paddingRange.value + "px"
})
contentRange.addEventListener("change", () => {
    contentBox.style.padding = contentRange.value + "px"
})

borderColor.addEventListener("change", () => {
    borderBox.style.backgroundColor = borderColor.value
})
paddingColor.addEventListener("change", () => {
    paddingBox.style.backgroundColor = paddingColor.value
})
contentColor.addEventListener("change", () => {
    contentBox.style.backgroundColor = contentColor.value
})
