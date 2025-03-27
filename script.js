function startCountdown() {
    const targetDate = new Date("April 26, 2025 11:00:00 PST").getTime();
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            countdownElement.innerHTML = "<div>The wedding has begun!</div>";
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            <div>
                <div class="time">${days}</div>
                <div class="label">Days</div>
            </div>
            <div>
                <div class="time">${hours}</div>
                <div class="label">Hours</div>
            </div>
            <div>
                <div class="time">${minutes}</div>
                <div class="label">Minutes</div>
            </div>
            <div>
                <div class="time">${seconds}</div>
                <div class="label">Seconds</div>
            </div>
        `;
    }

    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
}

document.addEventListener("DOMContentLoaded", startCountdown);