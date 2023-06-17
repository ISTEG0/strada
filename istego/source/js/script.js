const UI = {
    inputDate: document.querySelector(".block-input__date"),
    inputBtn: document.querySelector(".block-input__btn"),
    outputDiv: document.querySelector(".block-output"),
};

UI.inputDate.value = getCurrentDate();
UI.inputDate.min = getCurrentDate();

UI.inputBtn.addEventListener("click", startCounter);

function startCounter() {
    const selectedDate = new Date(UI.inputDate.value);
    const currentDate = new Date();
    const diffMs = selectedDate - currentDate;

    if (diffMs < 0) {
        UI.outputDiv.textContent = "Выбранная дата уже прошла";
    } else {
        setInterval(() => {
            const receivedTime = calcDate(diffMs);
            UI.outputDiv.textContent = `
            ${receivedTime.years} лет 
            ${receivedTime.days} дня 
            ${receivedTime.hours} часов 
            ${receivedTime.minutes} минут`;
        }, 1000);
        
    }
}

function calcDate(diffMs) {
    const diffSec = Math.floor(diffMs / 1000);

    const years = Math.floor(diffSec / (60 * 60 * 24 * 365));
    const days = Math.floor((diffSec % (60 * 60 * 24 * 365)) / (60 * 60 * 24));
    const hours = Math.floor((diffSec % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((diffSec % (60 * 60)) / 60);

    const timeLeft = {
        years,
        days,
        hours,
        minutes,
    };

    return timeLeft;
}

function getCurrentDate() {
    const today = new Date();
    const formattedToday = today.toISOString().split("T")[0];
    return formattedToday;
}
