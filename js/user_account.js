class CalcProducts {
    constructor(containerProducts, windowResult, catalogProduct) {
        this.containerProducts = document.querySelector(containerProducts);
        this.windowResult = document.querySelector(windowResult);
        this.catalogProduct = catalogProduct;
        this.createProduct();
    }
    createProduct() {
        let ul = document.createElement("ul");

        for (let i = 0; i < this.catalogProduct.length; i++) {

            let li = createOneProduct.getProductItem({
                tagName: "li",
                className: "block_li"
            })
            let block_name = createOneProduct.getProductItem({
                tagName: "div",
                className: "block_name"
            })
            let block_price = createOneProduct.getProductItem({
                tagName: "div",
                className: "block_price"
            })
            let img = createOneProduct.getProductItem({
                tagName: "img",
                backgroundImg: this.catalogProduct[i].img
            });
            let a = createOneProduct.getProductItem({
                tagName: "a",
            })
            let name = createOneProduct.getProductItem({
                tagName: "a",
                className: "name",
                textName: this.catalogProduct[i].name
            })
            let price = createOneProduct.getProductItem({
                tagName: "p",
                textName: `${this.catalogProduct[i].price} BYN`
            });
            let plus = createOneProduct.getProductItem({
                tagName: "i",
                className: "fas fa-plus-circle",
            })

            a.appendChild(img);
            block_name.append(a, name);
            block_price.append(price, plus);
            li.append(block_name, block_price);
            ul.appendChild(li);
        }
        this.containerProducts.appendChild(ul);
    }
}

let calcProducts = new CalcProducts('.block_calc', '.result' ,catalogProduct);