const ramazanStartDate = new Date("March 1, 2025 00:00:00").getTime();

setInterval(function () {
    const now = new Date().getTime();
    const distance = ramazanStartDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        document.querySelector(".countdown-container h1").innerText = "Ramazan Mubarak!";
        document.querySelector(".countdown").style.display = "none";
    }
}, 1000);