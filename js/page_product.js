class CardProducts {
    constructor(catalogCounter, catalogProduct) {
        this.catalogCounter = document.querySelector(catalogCounter);
        this.catalogProduct = catalogProduct;
        this.createProduct();
    }
    createProduct() {
        let but = document.querySelector('.bay');
        let hed_img = document.querySelector('.hed_img');
        let rest_img = document.querySelector('.rest_img');
        let add_purchase = document.querySelector('.add_purchase');
        let block_description = document.querySelector('.block_description');
        let id = this.catalogProduct[getTavar() - 1].id
        let crumb = document.querySelector('.crumb');
            crumb.innerHTML = this.catalogProduct[getTavar() - 1].name;

        let index = cardStore.getProduct().indexOf(id);

            if (index === -1) {
                but.innerHTML = 'Добавить в корзину';
            } else {
                but.innerHTML = 'Удалить из корзины';
            }

        function getTavar() {
            return JSON.parse(localStorage.getItem('id_tavar'));
        }
        
        let img = createOneProduct.getProductItem({
            tagName: "img",
            backgroundImg: this.catalogProduct[getTavar() - 1].img
        });
        let img1 = createOneProduct.getProductItem({
            tagName: "img",
            backgroundImg: this.catalogProduct[getTavar() - 1].img1
        });
        let img2 = createOneProduct.getProductItem({
            tagName: "img",
            backgroundImg: this.catalogProduct[getTavar() - 1].img2
        });
        let img3 = createOneProduct.getProductItem({
            tagName: "img",
            backgroundImg: this.catalogProduct[getTavar() - 1].img3
        });
        let img4 = createOneProduct.getProductItem({
            tagName: "img",
            backgroundImg: this.catalogProduct[getTavar() - 1].img4
        });
        let category = createOneProduct.getProductItem({
            tagName: "li",
            textName: `<span>Категория:</span>${this.catalogProduct[getTavar() - 1].category}`
        });
        let model = createOneProduct.getProductItem({
            tagName: "li",
            textName: `<span>Модель:</span>${this.catalogProduct[getTavar() - 1].name}`
        });
        let depth = createOneProduct.getProductItem({
            tagName: "li",
            textName: `<span>Глубина:</span>${this.catalogProduct[getTavar() - 1].depth}`
        });
        let width = createOneProduct.getProductItem({
            tagName: "li",
            textName: `<span>Ширина:</span>${this.catalogProduct[getTavar() - 1].width}`
        });
        let height = createOneProduct.getProductItem({
            tagName: "li",
            textName: `<span>Высота:</span>${this.catalogProduct[getTavar() - 1].height}`
        });
        let spaciousness = createOneProduct.getProductItem({
            tagName: "li",
            textName: `<span>Вместительность:</span>${this.catalogProduct[getTavar() - 1].spaciousness}`
        });
        let material = createOneProduct.getProductItem({
            tagName: "li",
            textName: `<span>Материал:</span>${this.catalogProduct[getTavar() - 1].material}`
        });
        let coating = createOneProduct.getProductItem({
            tagName: "li",
            textName: `<span>Покрытие:</span>${this.catalogProduct[getTavar() - 1].coating}`
        });
        let price = createOneProduct.getProductItem({
            tagName: "p",
            textName: `<hr>Цена: ${this.catalogProduct[getTavar() - 1].price} BYN`
        });
        let description = createOneProduct.getProductItem({
            tagName: "p",
            textName: `${this.catalogProduct[getTavar() - 1].description}`
        });

        but.addEventListener('click', function () {
            
            let index = cardStore.getProduct().indexOf(id);
            cardStore.putProduct(id);
            cardProducts.catalogCounter.innerHTML = JSON.parse(localStorage.getItem('CardStore'))
            if (index === -1) {
                but.innerHTML = 'Удалить из корзины';
                localStorage.setItem('CaunterStore'+id, JSON.stringify((cardStore.getProduct().filter(item => item == id).length)));
            } else{
                but.innerHTML = 'Добавить в корзину';
                localStorage.removeItem('CaunterStore'+id, JSON.stringify((cardStore.getProduct().filter(item => item == id).length)));
            }
        })

        function addTawar() {
            hed_img.appendChild(img);
            rest_img.append(img1, img2, img3, img4);
            add_purchase.append(category, model, depth, width, height, spaciousness, material, coating, price);
            block_description.appendChild(description);
        }
        addTawar();
        selecetImg();
    }
}

let cardProducts = new CardProducts('.quantity', catalogProduct);
