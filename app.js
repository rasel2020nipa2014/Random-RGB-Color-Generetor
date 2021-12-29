/**
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


    btn.addEventListener('click', function () {
        const bgColor = generetor()
        root.style.background = bgColor;
    })
}
// step 2  rondom color generetor
function generetor() {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)


    return `rgb(${red},${green}, ${blue})`
}
//step 3 collect all necessary refarencess

//step 4 handle the click event