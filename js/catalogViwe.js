k();
class AllProducts {
    constructor(containerProducts, catalogProduct) {
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProduct = catalogProduct;
        this.createProduct();
    }
    createProduct() {
        let wrapper = document.createElement("slot");
        for (let i = 0; i < this.catalogProduct.length; i++) {
            let item = this.getProductItem({
                tagName: "div",
                className: "item"
            })
            let name = this.getProductItem({
                tagName: "a",
                className: "name",
                textName: this.catalogProduct[i].name
            })
            let img = this.getProductItem({
                tagName: "img",
                className: "img",
                backgroundImg: this.catalogProduct[i].img
            })
            let description = this.getProductItem({
                tagName: "p",
                className: "description",
                textName: this.catalogProduct[i].description
            })
            let price = this.getProductItem({
                tagName: "div",
                className: "price",
                textName: `Цена: ${this.catalogProduct[i].price} BYN`
            })
            let btn = this.getProductItem({
                tagName: "button",
                className: "btn",
                textName: "Купить"
            })
            let btn2 = this.getProductItem({
                tagName: "button",
                className: "btn2",
                textName: "Подробнее"
            })

            function addTawar() {
                item.appendChild(img);
                item.appendChild(name);
                item.appendChild(description);
                item.appendChild(price);
                item.appendChild(btn);
                item.appendChild(btn2);
                wrapper.appendChild(item);
            }

            function categorySelection() {
                addTawar();
                categories.addEventListener('click', function (event) {
                    if (event.target && event.target.innerHTML == '- Ящики для игрушек') {
                        item.remove();
                        if (catalogProduct[i].category == 'box') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.innerHTML == '- Стеллажи и полки для книг') {
                        item.remove();
                        if (catalogProduct[i].category == 'rack' || catalogProduct[i].category == 'bookshelf') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.innerHTML == '- Грифельные доски') {
                        item.remove();
                        if (catalogProduct[i].category == 'griffin' || catalogProduct[i].category == 'griffinM') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.innerHTML == '- Остальные товары и фурнитура') {
                        item.remove();
                        if (catalogProduct[i].category == 'rest') {
                            addTawar();
                        }
                    }
                    ///////////////////////////////////////////////////////////
                    if (event.target && event.target.value == 'b1') {
                        item.remove();
                        if (catalogProduct[i].box == 'modular') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'b2') {
                        item.remove();
                        if (catalogProduct[i].divisions == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'b3') {
                        item.remove();
                        if (catalogProduct[i].cap == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'b4') {
                        item.remove();
                        if (catalogProduct[i].rest == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'b5') {
                        item.remove();
                        if (catalogProduct[i].frame == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'b6') {
                        item.remove();
                        if (catalogProduct[i].frame == 'no') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'b7') {
                        item.remove();
                        if (catalogProduct[i].capGrif  == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'b8') {
                        item.remove();
                        if (catalogProduct[i].capModular  == 'yes') {
                            addTawar();
                        }
                    }
                    /////////////////////////////////////////////////
                    if (event.target && event.target.value == 'r1') {
                        item.remove();
                        if (catalogProduct[i].category == 'rack') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'r2') {
                        item.remove();
                        if (catalogProduct[i].category == 'bookshelf') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'r3') {
                        item.remove();
                        if (catalogProduct[i].open == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'r4') {
                        item.remove();
                        if (catalogProduct[i].sdel == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'r5') {
                        item.remove();
                        if (catalogProduct[i].clouse == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'r6') {
                        item.remove();
                        if (catalogProduct[i].floor == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'r7') {
                        item.remove();
                        if (catalogProduct[i].wall == 'yes') {
                            addTawar();
                        }
                    }
                    //////////////////////////////////////////////////////
                    if (event.target && event.target.value == 'g1') {
                        item.remove();
                        if (catalogProduct[i].category == 'griffinM') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'g2') {
                        item.remove();
                        if (catalogProduct[i].category == 'griffin') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'g3') {
                        item.remove();
                        if (catalogProduct[i].size == 'big') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'g4') {
                        item.remove();
                        if (catalogProduct[i].size== 'little') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'g5') {
                        item.remove();
                        if (catalogProduct[i].shelf == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'g6') {
                        item.remove();
                        if (catalogProduct[i].shelf == 'no') {
                            addTawar();
                        }
                    }
                    //////////////////////////////////////////////////////
                    if (event.target && event.target.value == 'q1') {
                        item.remove();
                        if (catalogProduct[i].holder == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'q2') {
                        item.remove();
                        if (catalogProduct[i].toy_furniture == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'q3') {
                        item.remove();
                        if (catalogProduct[i].furniture == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'q4') {
                        item.remove();
                        if (catalogProduct[i].crayons == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'q5') {
                        item.remove();
                        if (+(catalogProduct[i].price) > 40 && catalogProduct[i].category == "rest") {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'q6') {
                        item.remove();
                        if (+(catalogProduct[i].price) >= 16 && +(catalogProduct[i].price) <= 40 && catalogProduct[i].category == "rest") {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'q7') {
                        item.remove();
                        if (+(catalogProduct[i].price) <= 16 && catalogProduct[i].category == "rest") {
                            addTawar();
                        }
                    }
                });
                
            }
            categorySelection();

        }
        this.containerProducts.appendChild(wrapper);
    }

    getProductItem(card) {
        let element = document.createElement(card.tagName);
        if ('className' in card) {
            element.setAttribute('class', card.className);
        }
        if ('textName' in card) {
            element.innerHTML = card.textName;
        }
        if ("backgroundImg" in card) {
            element.src = card.backgroundImg;
        }
        return element;
    }
}

let allProducts = new AllProducts('.container_product', catalogProduct);

function subcategory() {
    let i = 0 ,j = 0 ,r = 0 ,f = 0;
    box.addEventListener('click', function () {
        if (i == 0) {
            block_box.style.display = "block";
            i = 1;
        } else {
            block_box.style.display = "none";
            i = 0;
        }
    });
    rack.addEventListener('click', function () {
        if (j == 0) {
            block_rack.style.display = "block";
            j = 1;
        } else {
            block_rack.style.display = "none";
            j = 0;
        }
    });
    griffin.addEventListener('click', function () {
        if (r == 0) {
            block_griffin.style.display = "block";
            r = 1;
        } else {
            block_griffin.style.display = "none";
            r = 0;
        }
    });
    rest.addEventListener('click', function () {
        if (f == 0) {
            block_rest.style.display = "block";
            f = 1;
        } else {
            block_rest.style.display = "none";
            f = 0;
        }
    });

}
subcategory();

function display(){
    main.addEventListener('click', function () {
        block_main.style.display = "block";
        container_catalog.style.display = "none";
    });
    catalog.addEventListener('click', function () {
        container_catalog.style.display = "block";
        block_main.style.display = "none";
    });
}
display();
