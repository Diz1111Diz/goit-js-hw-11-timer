"use strict";

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.targetDate = targetDate.getTime();
        this.start();
    }

    interfaceTimer(days, hours, mins, secs) {
        const daysTimer = document.querySelector(".days");
        const hoursTimer = document.querySelector(".hours");
        const minsTimer = document.querySelector(".minutes");
        const secsTimer = document.querySelector(".seconds");

        daysTimer.textContent = days;
        hoursTimer.textContent = hours;
        minsTimer.textContent = mins;
        secsTimer.textContent = secs;
    }

    action(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = this.pad(
            Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        this.interfaceTimer(days, hours, mins, secs);
    }

    start() {
        this.timerId = setInterval(() => {
            const currentTime = Date.now();
            const time = this.targetDate - currentTime;

            if (time < 1) {
                clearInterval(this.timerId);
                return;
            }
            this.action(time);
        }, 1000);
    }

    pad(value) {
        return String(value).padStart(2, "0");
    }
}

new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("April 16, 2021")
});