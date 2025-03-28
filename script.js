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



document.addEventListener("DOMContentLoaded", () => {
    const sponsorSections = document.querySelectorAll(".child-sponsor > div");
    let currentIndex = 0;

    function showNextSponsor() {
        // Hide all sections
        sponsorSections.forEach((section) => {
            section.style.opacity = "0";
            section.style.visibility = "hidden";
        });

        // Show the current section
        sponsorSections[currentIndex].style.opacity = "1";
        sponsorSections[currentIndex].style.visibility = "visible";

        // Move to the next section
        currentIndex = (currentIndex + 1) % sponsorSections.length;
    }

    // Show the first section immediately
    showNextSponsor();

    // Cycle through sections every 5 seconds
    setInterval(showNextSponsor, 5000);
});

document.addEventListener("DOMContentLoaded", () => {
    const footerText = document.querySelector(".footer p");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footerText.classList.add("visible");
            } else {
                footerText.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.3 // Adjust this to control how much must be visible
    });

    observer.observe(footerText);
});

const images = document.querySelectorAll('.gallery img');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, {
    threshold: 0.1
  });

  images.forEach((img, index) => {
    img.style.animationDelay = `${index * 0.2}s`;
    observer.observe(img);
  });
