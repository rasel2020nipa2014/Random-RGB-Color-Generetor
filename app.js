/**
 * hex color genaretor and change color
 * 
 * --steps:

 * step 1  create onload handler
 * 
 * step 2  rondom color generetor
 * 
 * step 3 collect all necessary refarencess
 * 
 * step 4 handle the click event
 * 
 * 
 */
//step 1  create onload handler

window.onload = () => {
    main();
}

function main() {
    const root = document.getElementById("root")
    const btn = document.getElementById("btn")
    const output = document.getElementById("output")
    


    btn.addEventListener('click', function () {
        const bgColor = generetorHex() 
        root.style.background = bgColor;
        output.value=bgColor
    })
}
// step 2  rondom color generetor
function generetorHex() {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)


    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}
//step 3 collect all necessary refarencess

//step 4 handle the click event