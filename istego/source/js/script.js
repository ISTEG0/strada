const UI = {
    inputDate: document.querySelector(".block-input__date"),
    inputBtn: document.querySelector(".block-input__btn"),
    outputDiv: document.querySelector(".block-output"),
};

UI.inputDate.min = getCurrentDate();
UI.inputDate.value = getCurrentDate();

UI.inputBtn.addEventListener("click", startCounter);

function startCounter() {
    
        if (UI.inputDate.value === UI.inputDate.min) {
            alert("выберите дату");
            return;
        }

        const selectedDate = new Date(UI.inputDate.value);
        console.log(selectedDate);
        const currentDate = new Date();

        const diff = selectedDate - currentDate;

        const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
        const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
        const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
        const secondsLeft = Math.floor(diff / 1000) % 60;

        UI.outputDiv.textContent = `Д: ${daysLeft} - Ч: ${hoursLeft} - М: ${minutesLeft} - С: ${secondsLeft} `;

        setTimeout(startCounter, 1000);
}

function getCurrentDate() {
    const today = new Date();
    const formattedToday = today.toISOString().split("T")[0];
    return formattedToday;
}
