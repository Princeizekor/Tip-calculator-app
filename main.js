const button = Array.from(document.getElementsByClassName("btn"))
const text = document.getElementById("text")
const input = document.querySelector(".input")
const check = document.querySelector(".error")
const Texts = document.getElementById("text1")
const Input = document.querySelector(".input1")
const Check = document.querySelector(".error1")
const disp = document.querySelector(".disp1")
const disps = document.querySelector(".disp2")
const custom = document.getElementById("custom")
const reset = document.querySelector(".reset")
let doller = "$"
let percent = "%"

button.map(btn => {
    btn.addEventListener('click', () => {
      buttoN()
      Button()
      Reset()
      button.map(btn => btn.classList.remove("light"))
    if (text.value == "") {
        disp.innerText =  disp.innerText
        disp.innerText = "$0.00"
        disps.innerText = "$0.00"
        button.map(btn => btn.classList.remove("light"))
    } else {
        disp.innerText = `${doller}${eval(btn.innerText / 100 * text.value / Texts.value).toFixed(2)}`
        btn.classList.add("light")
    }
    if (Texts.value == "") {
        disps.innerText = disps.innerText
        disp.innerText = "$0.00"
        disps.innerText = "$0.00"
        button.map(btn => btn.classList.remove("light"))
    } else {
        disps.innerText = `${doller}${eval(btn.innerText / 100 * text.value / Texts.value + text.value / Texts.value).toFixed(2)}`
        btn.classList.add("light")
    }
})
})

function buttoN() {
    if (text.value == "") {
        input.classList.add("none")
        check.classList.add("disp")
        reset.classList.remove("replay")
    } else {
        input.classList.remove("none")
        check.classList.remove("disp")
        reset.classList.add("replay")
    }
}

text.addEventListener("input", () => {
    if (text.value == "") {
        input.classList.add("none")
        check.classList.add("disp")
    } else {
        input.classList.remove("none")
        check.classList.remove("disp")
    }
})

function Button() {
    if (Texts.value == "") {
        Input.classList.add("none")
        Check.classList.add("disp")
        reset.classList.remove("replay")
    } else {
        Input.classList.remove("none")
        Check.classList.remove("disp")
        reset.classList.add("replay")
    }
}

Texts.addEventListener("input", () => {
    if (Texts.value == "") {
        Input.classList.add("none")
        Check.classList.add("disp")
    } else {
        Input.classList.remove("none")
        Check.classList.remove("disp")
    }
})

custom.addEventListener("click", () => {
         buttoN()
         Button()
         button.map(btn => btn.classList.remove("light"))
})

custom.addEventListener("input", () => {
    if (text.value == "" || Texts.value == "") {
        disp.innerText = "$0.00"
    } else {
    disp.innerText = `${doller}${eval(custom.value / 100 * text.value / Texts.value).toFixed(2)}`
    disps.innerText = `${doller}${eval(custom.value / 100 * text.value / Texts.value + text.value / Texts.value).toFixed(2)} `
    Reset()
    }
})
 
function Reset() {
    reset.addEventListener("click", () => {
        text.value = ""
        Texts.value = ""
        custom.value = ""
        disp.innerText = "$0.00"
        disps.innerText = "$0.00"
        reset.classList.remove("replay")
        button.map(btn => btn.classList.remove("light"))
    })
}
