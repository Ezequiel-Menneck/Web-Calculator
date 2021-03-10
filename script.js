function inserir(num) {
    document.form.look.value = document.form.look.value + num;
}

function igual() {
    x1 = document.form.look.value;
    if(x1) {
        document.form.look.value = eval(x1);
    }
}

function c() {
    document.form.look.value = "";
}

function voltar() {
    var x1 = document.form.look.value;
    document.form.look.value = x1.substring(0, x1.length-1);
}

function dayNight() {
    let element = document.body;
    element.classList.toggle("dark-mode")
}

function bDayNight() {
    let element1 = document.getElementById("equal")
    element1.classList.toggle("button-night")
}