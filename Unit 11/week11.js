

// solution 2
let soln2 = () => {
    document.getElementById("result").innerHTML = "Clicked!"

    var now = new Date()
    var fmtStr = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    document.getElementById("soln2").append(`${fmtStr}`)

}

// solution 3
let el = document.getElementById("soln3")

function mOver() {
    el.innerHTML = "Thank You!"
}

function mOut() {
    el.innerHTML = "Mouse Over me!"
}

//solution 4
function ChangeBG() {
    var p = document.getElementById("soln4")
    p.style.backgroundColor = "orange"
}
ChangeBG()

// solution 5
var stat = document.getElementById("status")
function check_valid() {
    var el = document.getElementById("validator")
    if (!isNaN(el.value)) {
        stat.innerHTML = "Valid"
    } else {
        stat.innerHTML = "Invalid"
    }
}
var confirm = document.getElementById("confirmation")
function check_pwd() {
    var el1 = document.getElementById("pwd")
    var el2 = document.getElementById("pwd2")

    if (el1.value == el2.value) {
        confirm.innerHTML = "Passwords match"
    } else {
        confirm.innerHTML = "Passwords do not match"
    }
}