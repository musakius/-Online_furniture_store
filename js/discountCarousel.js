class Carousel {
    constructor(containerCarousel, catalogProduct) {
        this.containerCarousel = document.querySelector(containerCarousel);
        this.catalogProduct = catalogProduct;
        this.createNews();
    }
    createNews() {
        let wrapper = document.createElement("slot");


        for (let i = 1; i < 7; i++) {
            let a = createOneProduct.getProductItem({
                tagName: "a",
                className: "a"
            });
            let item = createOneProduct.getProductItem({
                tagName: "li",
                className: "item"
            });
            let img = createOneProduct.getProductItem({
                tagName: "img",
                className: "img",
                backgroundImg: this.catalogProduct[i].img
            });
            let name = createOneProduct.getProductItem({
                tagName: "h3",
                className: "name",
                textName: this.catalogProduct[i].name
            });
            let discount = createOneProduct.getProductItem({
                tagName: 'p',
                className: 'discount_price',
                textName: `Новая цена: ${this.catalogProduct[i].price} BYN до`
            });
            let price = createOneProduct.getProductItem({
                tagName: 'p',
                className: 'price',
                textName: `Цена: ${((this.catalogProduct[i].price / 100) * 125).toFixed(0)} BYN`
            });
            let countdown = createOneProduct.getProductItem({
                tagName: "div",
                className: "countdown" + i
            });
            

            item.append(img, name, price, discount, countdown);
            a.appendChild(item)
            wrapper.appendChild(a);

            a.addEventListener('click', function () {
                console.log(carousel.catalogProduct[i].id)
                localStorage.setItem('id_tavar', JSON.stringify(carousel.catalogProduct[i].id));
                a.href = "./product.html";
            })
        }
        this.containerCarousel.appendChild(wrapper);
    }
}

let carousel = new Carousel('.content_discount', catalogProduct);

let clock = document.querySelector('.countdown');


/////////////////Clock////////////////// 


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
    let clock = document.querySelector(id);

    let daysSpan = document.createElement('span');
    daysSpan.className = 'days';
    let dayText = document.createElement('div');
    dayText.innerHTML = 'Дней';

    let hoursSpan = document.createElement('span');
    hoursSpan.className = "hours";
    let hoursText = document.createElement('div');
    hoursText.innerHTML = 'Часов';

    let minutesSpan = document.createElement('span');
    minutesSpan.className = "minutes";
    let minutesText = document.createElement('div');
    minutesText.innerHTML = 'Минут';

    let secondsSpan = document.createElement('span');
    secondsSpan.className = "seconds";
    let secondsText = document.createElement('div');
    secondsText.innerHTML = 'Секунд';

    clock.append(dayText, hoursText, minutesText, secondsText);
    dayText.appendChild(daysSpan);
    hoursText.appendChild(hoursSpan);
    minutesText.appendChild(minutesSpan);
    secondsText.appendChild(secondsSpan);
}

function initializeClock(id, endtime) {
    let clock = document.querySelector(id);
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

for (let i = 1; i < 7; i++){
    CreateClock('.countdown' + i);
    let time = Math.floor(Math.random() * (2592000000 - 86400000 + 1)) + 86400000;;
    initializeClock('.countdown' + i, new Date(Date.parse(new Date()) + time));
}



