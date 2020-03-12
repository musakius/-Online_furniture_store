class MiniCart {
    constructor(catalogCounter, containerCart, catalogProduct) {
        this.catalogCounter = document.querySelector(catalogCounter);
        this.containerCart = document.querySelector(containerCart);
        this.catalogProduct = catalogProduct;
        this.create();
    }

    create() {
        let block_link = document.createElement('div');
        block_link.className = "block_link";

        let wrapper = document.createElement('ul');

        let link1 = document.createElement('a');
        link1.innerHTML = '<i class="fas fa-share"></i> Оформить заказ';
        link1.href = "./checkout.html";

        let link2 = document.createElement('a');
        link2.innerHTML = '<i class="fas fa-shopping-cart"></i> Перейти в корзину';
        link2.href = "./shopping_cart.html";

        let sum = document.querySelector('.sum');
        sum.innerHTML = JSON.parse(localStorage.getItem('total'));
        if(sum.innerHTML == null){sum.innerHTML = 0};
        sum.innerHTML = +sum.innerHTML.replace(/\D+/g, '');
        sum.innerHTML = `(${sum.innerHTML}) BYN`;

        let text = document.createElement('p');
        text.className = "text";
        text.innerHTML = sum.innerHTML;

        function currentSumCart() { // отправляет данные в миниатюру и корзину
            let host = location.href.replace(/\Course_work_2.*/, '');
                host = host + 'Course_work_2/catalog.html';

            if (location.href == host) {
                let but = document.querySelectorAll('.btn');
                for (let i = 0; i < catalogProduct.length; i++) {
                    but[i].addEventListener('click', function () {
                        let id = this.getAttribute('id');
                        let index = cardStore.getProduct().indexOf(minicart.catalogProduct[i].id);

                        if (index === -1) {
                            text.innerHTML = `(${+(text.innerHTML.replace(/\D+/g, '')) - +minicart.catalogProduct[i].price}) BYN`;
                            localStorage.removeItem('Sum' + id, JSON.stringify(catalogProduct[i].price));
                            localStorage.setItem('total', JSON.stringify(text.innerHTML));
                            sum.innerHTML = JSON.parse(localStorage.getItem('total'));
                        } else {
                            text.innerHTML = `(${+(text.innerHTML.replace(/\D+/g, '')) + +minicart.catalogProduct[i].price}) BYN`;
                            localStorage.setItem('Sum' + id, JSON.stringify(catalogProduct[i].price));
                            localStorage.setItem('total', JSON.stringify(text.innerHTML));
                            sum.innerHTML = JSON.parse(localStorage.getItem('total'));
                        }
                    })
                }
            }
        }
        currentSumCart();

        let init = 1;
        this.catalogCounter.addEventListener('click', function () {
            if (init == 0) {
                minicart.containerCart.style.display = 'none';
                minicart.containerCart.innerHTML = '';
                init = 1;
            } else {
                let productsCart = minicart.getProductCart();
                init = 0;
                minicart.containerCart.style.display = 'block';

                for (let i = 0; i < productsCart.length; i++) {
                    let item = createOneProduct.getProductItem({
                        tagName: 'li',
                        className: 'item_li'
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
                    let counter = createOneProduct.getProductItem({
                        tagName: 'span',
                        className: 'counter',
                        textName: `x${JSON.parse(localStorage.getItem('CaunterStore' + productsCart[i].id))}`
                    });
                    let price = createOneProduct.getProductItem({
                        tagName: 'div',
                        className: 'price',
                        textName: `${productsCart[i].price} BYN`
                    });
                    let close = createOneProduct.getProductItem({
                        tagName: "i",
                        className: "fas fa-times",
                        id: productsCart[i].id
                    });

                    close.addEventListener('click', function () {
                        let id = this.getAttribute('id');
                        let bool = false;
                        cardStore.putProduct(id, bool);
                        text.innerHTML = `(${+(text.innerHTML.replace(/\D+/g, '')) - (productsCart[i].price)}) BYN`;
                        localStorage.setItem('total', JSON.stringify(text.innerHTML));
                        sum.innerHTML = JSON.parse(localStorage.getItem('total'));
                        item.remove();
                    })

                    item.append(img, name, counter, price, close);
                    wrapper.appendChild(item);
                }

                block_link.append(link2, link1)
                minicart.containerCart.append(wrapper, text, block_link);
            }
        });
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

let minicart = new MiniCart('.basket', '.container-cart', catalogProduct);
