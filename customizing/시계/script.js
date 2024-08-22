// const today = new Date();
// const dDay = new Date(2024, 7, 22, 18, 0);
// const resultDay = dDay.getTime() - today.getTime();

// console.log(resultDay);

// const hours = resultDay;


//   // let resultDate = Math.floor(resultDay / (24 * 60 * 60 * 1000));
// let resultHours = Math.floor((resultDay / (60 * 60 * 1000)) % 24);
// let resultMinutes = Math.floor((resultDay / (60 * 1000)) % 60);
// let resultSeconds = Math.floor((resultDay / 1000) % 60);

// resultHours = resultHours < 10 ? `0${resultHours}` : resultHours;
// resultMinutes = resultMinutes < 10 ? `0${resultMinutes}` : resultMinutes;
// resultSeconds = resultSeconds < 10 ? `0${resultSeconds}` : resultSeconds;

let countdownTime = 60 * 10; // 10 minutes in seconds

function startCountdown() {
    const interval = setInterval(() => {
        if (countdownTime <= 0) {
            clearInterval(interval);
            return;
        }

        countdownTime--;

        const hours = String(Math.floor(countdownTime / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((countdownTime % 3600) / 60)).padStart(2, '0');
        const seconds = String(countdownTime % 60).padStart(2, '0');

        updateUnit('hour', hours);
        updateUnit('minute', minutes);
        updateUnit('second', seconds);

    }, 1000);
}

function updateUnit(id, value) {
    const element = document.getElementById(id);
    const newElement = document.createElement('div');
    newElement.textContent = value;
    newElement.className = 'time-unit';

    element.appendChild(newElement);

    if (element.children.length > 1) {
        element.children[0].style.animation = 'slideOutDown 0.5s ease-out forwards';
        setTimeout(() => element.removeChild(element.children[0]), 500);
    }
}

window.onload = startCountdown;