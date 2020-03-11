function addHeaderAndFooter() {
    let navOne = document.querySelector('nav');
    let header = document.querySelector('header');
    let navTwo = document.querySelectorAll('nav')[1];
    let footer = document.querySelector('footer');
    let dialog = document.querySelector('.dialog');

    navOne.innerHTML = `<div class="center">
                            <div class="block_top">
                                <div class="top_search">
                                    <input class="search_tawar" type="text" placeholder="Поиск товаров...">
                                    <a href="./search.html"><i id="but_search" class="fas fa-search"></i></a>
                                </div>  
                                <ul class="top_bar">
                                    <li class="li_leng" id="choice_leng"><i class="fas fa-language"></i> Выбор языка <i class="fas fa-caret-down"></i>
                                        <div id="id_leng">
                                            <a class="rus" href="#">Рус</a>
                                            <a class="en" href="#">Eng</a>
                                        </div>
                                    </li>
                                    <li class="li_user" id="choice_user"><i class="fas fa-user"></i> Личный кабинет <i class="fas fa-caret-down"></i>
                                        <div id="id_user">
                                            <a href="./registration.html">Регистрация</a>
                                            <a href="./authorization.html">Авторизация</a>
                                        </div>
                                    </li>
                                    <li><i class="fas fa-heart"></i> Закладки (0)</li>
                                    <li><a href="./shopping_cart.html"><i class="fas fa-shopping-cart"></i> Корзина</a></li>
                                    <li><a href="./checkout.html"><i class="fas fa-share"></i> Оформление заказа</a></li>
                                </ul>
                            </div>
                        </div>`;

    header.innerHTML = `<div class="center">
                            <div class="block_head">
                                <div>
                                    <a href="./index.html"><img class="logo" src="./img/logo.png" alt="logo"></a>
                                </div>
                                <div class="text_head">
                                    <h1>Мастерская детской мебели из дерева для хранения игрушек и не только!</h1>
                                </div>
                                <div class="block_basket">
                                    <div class="basket">
                                        <i class="fas fa-shopping-cart"></i>
                                        <span> Таваров: 
                                            <span class="quantity">0</span> 
                                            <span class="sum">(0) BYN</span>
                                        </span>
                                    </div>
                                    <div class="container-cart">
                                    </div>
                                    <span class="call_us">Позвоните нам:</span>
                                    <span class="number_phone">+375(44)5-210-210</span>
                                </div>
                            </div>
                        </div>`;

    navTwo.innerHTML = `<div class="center">
                            <span class="burger" id="burger">
                                <i></i>
                                <i></i>
                                <i></i>
                            </span>
                        </div>
                        <ul class="ul_bar" id="menu">
                            <li><a href="./index.html">Главная</a></li>
                            <li><a href="./catalog.html">Каталог</a></li>
                            <li><a href="./blog.html">Блог</a></li>
                            <li><a href="./faq.html">FAQ</a></li>
                            <li><a href="./us.html">О нас</a></li>
                            <li><a href="./contact.html">Контакты</a></li>
                        </ul>
                        `;


    footer.innerHTML = `<div class="center">
                        <div class="content">
                            <img src="./img/webpay.png" alt="webpay" title="webpay">
                            <ul>
                                <li><a href="#">ПОДАРОЧНЫЕ СЕРТИФИКАТЫ</a></li>
                                <li><a href="#">АКЦИИ</a></li>
                                <li><a href="#">РАССЫЛКА</a></li>
                                <li><a href="#">КАРТА САЙТА</a></li>
                                <li><a href="#">ПРАВИЛА ПОЛЬЗОВАНИЯ</a></li>
                            </ul>
                            <div class="svg">
                                <a href="https://www.instagram.com/bears_box/">
                                    <div><i class="fab fa-instagram"></i></div>
                                </a>
                                <a href="https://vk.com/bears_box">
                                    <div><i class="fab fa-vk"></i></div>
                                </a>
                                <a href="https://www.facebook.com/bearsboxx">
                                    <div><i class="fab fa-facebook-f"></i></div>
                                </a>
                            </div>
                        </div>
                        </div>`;

    dialog.innerHTML = `<div id="win" class="win" style="display: none">
                            <button class="close_window"><i class="fas fa-times"></i></button>
                            <div class="dialog_text"></div>
                            <input class="input_dialog" type="text" required>
                            <button class="send"><i class="fas fa-arrow-up"></i></button>
                        </div>
                        <button class="show"><i class="fas fa-comments"></i></button>`
}
addHeaderAndFooter();

function popupWindow() {
    let input = document.querySelector('.input_dialog');
    let text = document.querySelector('.dialog_text');
    let send = document.querySelector('.send');
    let show = document.querySelector('.show')

    show.onclick = function () {
        win.style.display = "block";
        show.style.display = "none";
    };
    document.querySelector('.close_window').onclick = function () {
        win.style.display = "none";
        show.style.display = "block";
    };
    send.onclick = function () {
        let p_user = document.createElement('span');
        p_user.className = "p_user";
        p_user.innerHTML = input.value;
        let p_server = document.createElement('string');
        p_server.className = "p_server";
        p_server.innerHTML = input.value;

        text.appendChild(p_user);

        input.value = '';
        setTimeout(function () {
            text.appendChild(p_server);
        }, 2000);
    }
    input.addEventListener('keypress', function (keyPressed) {
        if (keyPressed.which === 13 && this.value != '' && this.value.length < 20) {
            let p_user = document.createElement('span');
            p_user.className = "p_user";
            p_user.innerHTML = input.value;
            let p_server = document.createElement('string');
            p_server.className = "p_server";
            p_server.innerHTML = input.value;

            text.appendChild(p_user);

            input.value = '';
            setTimeout(function () {
                text.appendChild(p_server);
            }, 2000);
        }
    })
}
popupWindow();

function choice() {
    let leng = document.querySelector('#choice_leng');
    let user = document.querySelector('#choice_user');
    let init = 0;

    leng.addEventListener('click', function () {
        if (init == 0) {
            id_leng.style.display = "flex";
            init = 1;
        } else {
            id_leng.style.display = "none";
            init = 0;
        }
    });

    user.addEventListener('click', function () {
        if (init == 0) {
            id_user.style.display = "flex";
            init = 1;
        } else {
            id_user.style.display = "none";
            init = 0;
        }
    });
}
choice();

let rus = document.querySelector('.rus');
let en = document.querySelector('.en');

rus.onclick = function () {
    location.href = "index.html"
}
en.onclick = function () {
    location.href = "./index_en/index.html"
}

document.getElementById("burger").onclick = function () {
    openCloseMenu()
};

function openCloseMenu() {
    document.getElementById("menu").classList.toggle("open")
};