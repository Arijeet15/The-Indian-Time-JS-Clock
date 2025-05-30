p = document.querySelector("p");

setInterval(() => {

    let time = new Date();

    let hours = time.getHours()
    let mins = time.getMinutes()
    let seconds = time.getSeconds()

    p.innerText = `${hours} : ${mins} : ${seconds}`

}, 1000);