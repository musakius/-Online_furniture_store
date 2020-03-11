class Cart {
    constructor(containerCart, catalogProduct) {
        this.containerCart = document.querySelector(containerCart);
        this.catalogProduct = catalogProduct;
        this.create();
    }

    create() {
        let productsCart = this.getProductCart();
        let wrapper = document.createElement('ul');
        let bool;

        let text = document.createElement('p');
        text.className = "text";
        text.innerHTML = JSON.parse(localStorage.getItem('total'));
        text.innerHTML = 'Итого: ' + (text.innerHTML.replace(/\D+/g, '')) + ' BYN'

        for (let i = 0; i < productsCart.length; i++) {
            let li = createOneProduct.getProductItem({
                tagName: 'li',
                className: 'li'
            });
            let img = createOneProduct.getProductItem({
                tagName: "img",
                className: "img",
                backgroundImg: productsCart[i].img
            });
            let name = createOneProduct.getProductItem({
                tagName: 'a',
                className: 'name',
                textName: productsCart[i].name
            });
            let item = createOneProduct.getProductItem({
                tagName: 'div',
                className: 'item'
            });
            let plus = createOneProduct.getProductItem({
                tagName: 'button',
                className: 'but_plus',
                textName: '<i class="fas fa-plus-circle"></i>',
                id: productsCart[i].id
            });
            let counter = createOneProduct.getProductItem({
                tagName: 'p',
                className: 'quantity',
                textName: JSON.parse(localStorage.getItem('CaunterStore' + productsCart[i].id)),
                id: productsCart[i].id
            });
            let minus = createOneProduct.getProductItem({
                tagName: 'button',
                className: 'but_minus',
                textName: '<i class="fas fa-minus-circle"></i>',
                id: productsCart[i].id
            });
            let price = createOneProduct.getProductItem({
                tagName: 'div',
                className: 'price',
                textName: `${productsCart[i].price} BYN`
            });
            let total_price = createOneProduct.getProductItem({
                tagName: 'div',
                className: 'total_price',
                textName: `${JSON.parse(localStorage.getItem('Sum' + productsCart[i].id))} BYN`
            });
            let close = createOneProduct.getProductItem({
                tagName: "i",
                className: "fas fa-times",
                id: productsCart[i].id
            });

            plus.addEventListener('click', function () {
                let id = this.getAttribute('id');
                // записываем количества одинаковых товаров в корзине ↓
                localStorage.setItem('CaunterStore' + id, JSON.stringify((cardStore.getProduct().filter(item => item == id).length + 1)));
                // записываем общую сумму одинаковых товаров в корзине ↓
                total_price.innerHTML = +(total_price.innerHTML.replace(/\D+/g, '')) + cart.catalogProduct[i].price;
                localStorage.setItem('Sum' + id, JSON.stringify(total_price.innerHTML));
                total_price.innerHTML = total_price.innerHTML + " BYN";
                // записываем итоговую сумму за все товары в корзине ↓
                let result = 0;
                let sum = document.querySelectorAll('.total_price');
                for (let i = 0; i < sum.length; i++) {
                    result += +sum[i].innerHTML.replace(/\D+/g, '');
                    text.innerHTML = result + ' BYN';
                    localStorage.setItem('total', JSON.stringify(text.innerHTML));
                }

                bool = true;
                cardStore.putProduct(id, bool); // добавляем более одного товара в корзину
                displayCounter(); // вывод при клике количества одинаковых товаров в корзине
                if (counter.innerHTML > 0) {
                    minus.disabled = false;
                }
            })


            minus.addEventListener('click', function () {
                let id = this.getAttribute('id');

                localStorage.setItem('CaunterStore' + id, JSON.stringify((cardStore.getProduct().filter(item => item == id).length - 1)));

                total_price.innerHTML = +(total_price.innerHTML.replace(/\D+/g, '')) - cart.catalogProduct[i].price;
                localStorage.setItem('Sum' + id, JSON.stringify(total_price.innerHTML));
                total_price.innerHTML = total_price.innerHTML + " BYN";

                let result = 0;
                let sum = document.querySelectorAll('.total_price');
                for (let i = 0; i < sum.length; i++) {
                    result += +sum[i].innerHTML.replace(/\D+/g, '');
                    text.innerHTML = result + ' BYN';
                    localStorage.setItem('total', JSON.stringify(text.innerHTML));
                }

                bool = false;
                cardStore.putProduct(id, bool);
                displayCounter();
                if (cardStore.getProduct().indexOf(id) == -1) {
                    counter.innerHTML = 0;
                }
                if (counter.innerHTML == 0) {
                    minus.disabled = true;
                }
            })



            close.addEventListener('click', function () {
                let id = this.getAttribute('id');

                let arr = cardStore.getProduct().filter(item => item != id); // обновляем массив
                localStorage.setItem('CardStore', JSON.stringify(arr));

                let num = JSON.parse(localStorage.getItem('CaunterStore' + productsCart[i].id)); // обновляем итог
                text.innerHTML = +(text.innerHTML.replace(/\D+/g, '')) - (cart.catalogProduct[i].price * num);
                localStorage.setItem('total', JSON.stringify(text.innerHTML));
                text.innerHTML = text.innerHTML + " BYN";

                localStorage.removeItem('Sum' + id, JSON.stringify(total_price.innerHTML)); // удаляем все одинаковые товары
                localStorage.removeItem('CaunterStore' + id, JSON.stringify((cardStore.getProduct().filter(item => item == id).length)));
                li.remove();
            })

            function displayCounter() {
                let res = {};
                for (let i = 0; i < cardStore.getProduct().length; i++) {
                    let count = res[cardStore.getProduct()[i]];
                    if (count) {
                        res[cardStore.getProduct()[i]] = count + 1;
                    } else {
                        res[cardStore.getProduct()[i]] = 1;
                    }
                }
                for (let key in res) {
                    if (counter.id == key) {
                        counter.innerHTML = res[key];
                    }
                }
            }

            li.append(img, name);
            item.append(minus, counter, plus);
            li.append(item, price, total_price, close)
            wrapper.appendChild(li);
        }
        this.containerCart.appendChild(wrapper);
        this.containerCart.appendChild(text);
    }

    getProductCart() {
        let products = cardStore.getProduct();
        let productsCart = [];
        for (let i = 0; i < this.catalogProduct.length; i++) {
            if (products.indexOf(this.catalogProduct[i].id) !== -1) {
                productsCart.push(this.catalogProduct[i]);
            }
        }
        return productsCart;
    }
}

let cart = new Cart('.container-basket', catalogProduct);