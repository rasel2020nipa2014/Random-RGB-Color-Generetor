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
 * step 5  Add button to copy the color code 
 * 
 * step 6 toast massage 
 * 
 */

//Globale

let div = null;
//step 1  create onload handler

window.onload = () => {
    main();
}

function main() {
    const root = document.getElementById("root")
    const btnChange = document.getElementById("btn-change")
    const output = document.getElementById("output")
    const output2 = document.getElementById("output2")
    const btnCopy = document.getElementById("btn-copy")
    const btnCopy2 = document.getElementById("btn-copy2")



    btnChange.addEventListener('click', function () {
        let color = genereteDecimelColor()
        const rgb = generatorRgb(color)
        const hex = generatorHex(color)

        root.style.background = `#${hex}`;
        output.value = `${hex}`;
        output2.value = `${rgb}`
    })
    btnCopy.addEventListener('click', function () {
        navigator.clipboard.writeText(`#${output.value}`)

        if (div !== null) {
            div.remove();
            div = null;
        }
        generateToastMessage(`#${output.value} Copied`)
    })
    btnCopy2.addEventListener('click', function () {
        navigator.clipboard.writeText(`rgb${output2.value}`)
        if (div !== null) {
            div.remove();
            div = null;
        }
        generateToastMessage(`RGB${output2.value} Copied`)
    })
    output.addEventListener('keyup', function (e) {
        const color = e.target.value

        if (color && isHexVAlid(`#${color}`)) {
            root.style.background = `#${color}`;
            output2.value = HexToRgb(color)
        }
    })

}

// step 2  rondom color generetor


//function genaret decimelColor
function genereteDecimelColor() {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return {
        red,
        green,
        blue
    }
}
// function hex color
function generatorHex({
    red,
    green,
    blue
}) {
    // const {red,green,blue}=genereteDecimelColor()
    const twoCode = (value) => {
        const hex = value.toString(16)
        return hex.length === 1 ? `0${hex}` : hex
    }
    return `${twoCode(red)}${twoCode(green)}${twoCode(blue)}`.toUpperCase();
}

function generatorRgb({
    red,
    green,
    blue
}) {

    //const {red,green,blue}=genereteDecimelColor()

    return `(${red},${green},${blue})`
}
//step 3 collect all necessary refarencess

//step 4 handle the click event

//step 6 toast massage 

function generateToastMessage(msg) {
    div = document.createElement('div')
    div.innerText = msg;
    div.className = "toast-message toast-message-slide-in";

    //div.classList.add("toast-message-slide-in")


    document.body.appendChild(div)
    div.addEventListener('click', function () {
        div.classList.remove("toast-message-slide-in");
        div.classList.add("toast-message-slide-out");

        div.addEventListener('animationend', function () {
            div.remove();
            div = null
        })
    })
}


// step 7 create dynamic toast message

//step 8 clear toast message
//Hexto rgb
/**
 * 
 * @param {String} value 
 */
function HexToRgb(value) {
    const red = parseInt(value.slice(0, 2), 16)
    const green = parseInt(value.slice(2, 4), 16)
    const blue = parseInt(value.slice(4), 16)

    return `(${red},${green},${blue})`
}

//step 9 create isHexVAlid function
/**
 * 
 * @param {string} color 
 */
function isHexVAlid(color) {

    if (color.length !== 7) return false
    if (color[0] !== "#") return false
    color = color.substring(1)
    console.log(color);
    return /^[0-9A-Fa-f]{6}$/i.test(color)
}

//step 10 implement change handler on input field

//step 11 provent coping hex code if it is not valid