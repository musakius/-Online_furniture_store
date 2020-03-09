function addHeaderAndFooter() {
    let navOne = document.querySelector('nav');
    let header = document.querySelector('header');
    let navTwo = document.querySelectorAll('nav')[1];
    let footer = document.querySelector('footer');

    navOne.innerHTML = `<div class="center">
                            <div class="block_top">
                                <div class="top_search">
                                    <input class="search_tawar" type="text" placeholder="Поиск товаров...">
                                    <a href="./search.html"><i id="but_search" class="fas fa-search"></i></a>
                                </div>  
                                <ul class="top_bar">
                                    <li class="li_leng" id="choice_leng">Выбор языка <i class="fas fa-caret-down"></i>
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
                                    <img class="logo" src="./img/logo.png" alt="logo">
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

    navTwo.innerHTML = `<ul class="ul_bar">
                            <li><a href="./index.html">Главная</a></li>
                            <li><a href="./catalog.html">Каталог</a></li>
                            <li><a href="./blog.html">Блог</a></li>
                            <li><a href="./faq.html">FAQ</a></li>
                            <li><a href="./us.html">О нас</a></li>
                            <li><a href="./contact.html">Контакты</a></li>
                        </ul>`;


    footer.innerHTML = `<div class="content">
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
                        </div>`;
}
addHeaderAndFooter();

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