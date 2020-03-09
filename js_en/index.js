function caruselOne() {
    let images = document.querySelectorAll('#gallery .photos img');
    let circle = document.querySelectorAll('#gallery .buttons .circles i');
    let i = 0;

    next.onclick = function () {
        images[i].style.display = 'none';
        if (images[i].style.display == 'none') {
            circle[i].style.color = "#73c0c1";
        }
        i++;
        if (i >= images.length) {
            i = 0;
        }
        images[i].style.display = 'block';
        if (images[i].style.display == 'block') {
            circle[i].style.color = "#fff";
        }
    };

    prev.onclick = function () {
        images[i].style.display = 'none';
        if (images[i].style.display == 'none') {
            circle[i].style.color = "#73c0c1";
        }
        i--;
        if (i < 0) {
            i = images.length - 1;
        }
        images[i].style.display = 'block';
        if (images[i].style.display == 'block') {
            circle[i].style.color = "#fff";
        }
    };

    div_circles.addEventListener('click', function (event) {
        for (let i = 0; i < circle.length; i++) {
            images[i].style.display = 'none';
            circle[i].style.color = "#73c0c1";
            if (event.target && event.target.id == i) {
                images[i].style.display = 'block';
                circle[i].style.color = "#fff";
            }
        }
    })
}
caruselOne();

function caruselTwo() {
    let currentPos = 0;
    const colorWidth = 400;
    let content = document.getElementById("block_stock");
    let next = document.getElementById("right");
    let prev = document.getElementById("left");

    function slide(event) {
        if (event.target.className == "fas fa-chevron-right") {
            if (currentPos === -3 * colorWidth) {
                currentPos = 0;
            } else {
                currentPos = currentPos - colorWidth;
            }
        } else {
            if (currentPos === 0) {
                currentPos = -3 * colorWidth;
            } else {
                currentPos = currentPos + colorWidth;
            }
        }
        content.style.left = currentPos + "px";
    }

    prev.addEventListener("click", slide);
    next.addEventListener("click", slide);
}
caruselTwo();

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function CreateClock(id) {
    let clock = document.getElementById(id);

    let daysSpan = document.createElement('span');
        daysSpan.className = 'days';
    let dayText = document.createElement('div');
        dayText.innerHTML = 'Days';
        
    let hoursSpan = document.createElement('span');
        hoursSpan.className = "hours";
    let hoursText = document.createElement('div');
        hoursText.innerHTML = 'Hours';

    let minutesSpan = document.createElement('span');
        minutesSpan.className = "minutes";
    let minutesText = document.createElement('div');
        minutesText.innerHTML = 'Minutes';

    let secondsSpan = document.createElement('span');
        secondsSpan.className = "seconds";
    let secondsText = document.createElement('div');
        secondsText.innerHTML = 'Second';

    clock.append(dayText, hoursText, minutesText, secondsText);
    dayText.appendChild(daysSpan);
    hoursText.appendChild(hoursSpan);
    minutesText.appendChild(minutesSpan);
    secondsText.appendChild(secondsSpan);
}

function initializeClock(id, endtime) {
    let clock = document.getElementById(id);
    let daysSpan = clock.querySelector('.days');
    let hoursSpan = clock.querySelector('.hours');
    let minutesSpan = clock.querySelector('.minutes');
    let secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        let t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    let timeinterval = setInterval(updateClock, 1000);
}

CreateClock('countdown');
initializeClock('countdown', new Date(Date.parse(new Date()) + 6 * 24 * 60 * 60 * 1000));
CreateClock('countdown_2');
initializeClock('countdown_2', new Date(Date.parse(new Date()) + 7 * 24 * 60 * 60 * 1000));
CreateClock('countdown_3');
initializeClock('countdown_3', new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000));
CreateClock('countdown_4');
initializeClock('countdown_4', new Date(Date.parse(new Date()) + 1 * 24 * 60 * 60 * 1000));
CreateClock('countdown_5');
initializeClock('countdown_5', new Date(Date.parse(new Date()) + 9 * 24 * 60 * 60 * 1000));
CreateClock('countdown_6');
initializeClock('countdown_6', new Date(Date.parse(new Date()) + 1 * 24 * 60 * 60 * 1000));