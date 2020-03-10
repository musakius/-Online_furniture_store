class AllProducts {
    constructor(containerProducts, catalogCounter, catalogProduct) {
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogCounter = document.querySelector(catalogCounter);
        this.catalogProduct = catalogProduct;
        this.createProduct();
    }
    createProduct() {
        let wrapper = document.createElement("slot");
        let products = cardStore.getProduct();
        for (let i = 0; i < this.catalogProduct.length; i++) {

            let index = products.indexOf(this.catalogProduct[i].id);
            let activeText;

            if (index === -1) {
                activeText = 'Добавить';
            } else {
                activeText = 'Удалить';
            }

            let item = createOneProduct.getProductItem({
                tagName: "div",
                className: "item"
            })
            let name = createOneProduct.getProductItem({
                tagName: "a",
                className: "name",
                textName: this.catalogProduct[i].name
            })
            let img = createOneProduct.getProductItem({
                tagName: "img",
                className: "img",
                backgroundImg: this.catalogProduct[i].img
            })
            let description = createOneProduct.getProductItem({
                tagName: "p",
                className: "description",
                textName: this.catalogProduct[i].description
            })
            let price = createOneProduct.getProductItem({
                tagName: "div",
                className: "price",
                textName: `Цена: ${this.catalogProduct[i].price} BYN`
            })
            let btn = createOneProduct.getProductItem({
                tagName: 'button',
                className: 'btn',
                textName: activeText,
                id: this.catalogProduct[i].id
            });
            let btn2 = createOneProduct.getProductItem({
                tagName: "button",
                className: "btn2",
                textName: "Подробнее"
            })

            btn.addEventListener('click', function () {
                let id = this.getAttribute('id');
                let result = cardStore.putProduct(id);
                allProducts.catalogCounter.innerHTML = JSON.parse(localStorage.getItem('CardStore'))
                if (result.statusProduct) {
                    this.innerHTML = 'Удалить';
                    localStorage.setItem('CaunterStore'+id, JSON.stringify((cardStore.getProduct().filter(item => item == id).length)));
                } else {
                    this.innerHTML = 'Добавить';
                    localStorage.removeItem('CaunterStore'+id, JSON.stringify((cardStore.getProduct().filter(item => item == id).length)));
                }
            })
            
            btn2.addEventListener('click', function () {
                localStorage.setItem('id_tavar', JSON.stringify(allProducts.catalogProduct[i].id));
                document.location.href = "./product.html";
            })

            img.addEventListener('click', function () {
                localStorage.setItem('id_tavar', JSON.stringify(allProducts.catalogProduct[i].id));
                document.location.href = "./product.html";
            })

            name.addEventListener('click', function () {
                localStorage.setItem('id_tavar', JSON.stringify(allProducts.catalogProduct[i].id));
                document.location.href = "./product.html";
            })

            function addTawar() {
                wrapper.appendChild(item).append(img, name, description, price, btn, btn2);
            }

            function categorySelection() {
                addTawar();
                categories.addEventListener('click', function (event) {
                    item.remove();
                    if (event.target && event.target.id == catalogProduct[i].category) {
                        addTawar();
                    }
                    if (event.target && event.target.id == catalogProduct[i].subcategory_1) {
                        addTawar();
                    }
                    if (event.target && event.target.id == catalogProduct[i].subcategory_2) {
                        addTawar();
                    }
                    if (event.target && event.target.innerHTML == 'Выберите категорию') {
                        addTawar();
                    }
                });
            }
            categorySelection();
        }
        this.containerProducts.appendChild(wrapper);
    }
}

let allProducts = new AllProducts('.container_product', '.quantity', catalogProduct);


