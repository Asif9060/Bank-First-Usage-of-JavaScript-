const button1 = document.getElementById("button1").addEventListener("click" ,function () {
    const input1 = document.getElementById("add").value;
    const intInput = parseFloat(input1);
    const depo = document.getElementById("takaAdd").innerText;
    let takaDepo = parseFloat(depo);
    const add = document.getElementById("takaAdd").innerText = (intInput) + takaDepo;


    const final = document.getElementById("mot").innerText;
    const mot = parseInt(final);
    document.getElementById("mot").innerText = mot + add;

    document.getElementById("add").value = "";


});

const button2 = document.getElementById("button2").addEventListener("click" ,function () {
    const input1 = document.getElementById("sub").value;
    const intInput = parseFloat(input1);
    const withdraw = document.getElementById("takaSub").innerText;
    let takaWith = parseFloat(withdraw);
    const sub = document.getElementById("takaSub").innerText = (intInput) + takaWith;

    const final = document.getElementById("mot").innerText;
    const mot = parseInt(final);
    document.getElementById("mot").innerText = mot - sub;

    document.getElementById("sub").value = "";
});