function display(number) {
    let display = document.getElementById("kq");
    display.value += number;
}

function clear() {
    let clear = "0";
    document.getElementById("kq").innerHTML = 0;
}

function tinh() {
    let a = parseInt(document.getElementById("a").value);
    document.getElementById("kq").innerHTML = a;
}