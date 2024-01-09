/* js start */

/* finding element */
let hrs = document.getElementById("hrs");
let mns = document.getElementById("mns");
let sec = document.getElementById("sec");

/* uses of async function */
setInterval(() => {
    let currentTime = new Date();
    console.log(currentTime);

    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    mns.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

}, 1000);




