'use strict';

let deadline = '2019-08-05';

// Создаем функцию, в которой сначала находим разницу между дедлайном и текущим временем и записываем ее в t.
// Находим кол-во секунд, минут и часов и записываем это все в объект

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor(t/(1000*60*60));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
}

// функция, которая будет делать верстку динамической. Нам нужно знать куда передавать данные и дедлайн.  
// поэтому аргументы id и эндтайм

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

// функция которая будет вызываться каждую секунду и обновлять таймер

    function updateClock() {
        let t = getTimeRemaining(endtime);

        function addZero(num) {
            if(num <= 9) {
                return '0' + num;
            } else return num;
        };

        hours.textContent = addZero(t.hours);
        minutes.textContent = addZero(t.minutes);
        seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);
