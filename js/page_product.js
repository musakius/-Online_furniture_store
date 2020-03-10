class CardProducts {
    constructor(catalogProduct) {
        this.catalogProduct = catalogProduct;
        this.createProduct();
    }
    createProduct() {
        let hed_img = document.querySelector('.hed_img');
        let rest_img = document.querySelector('.rest_img');
        let add_purchase = document.querySelector('.add_purchase');
        let block_description = document.querySelector('.block_description');
        let crumb = document.querySelector('.crumb');
        crumb.innerHTML = this.catalogProduct[getTavar() - 1].name;

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

let cardProducts = new CardProducts(catalogProduct);
