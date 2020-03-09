class CalcResult {
    constructor(containerProducts, catalogProduct) {
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProduct = catalogProduct;
        this.createProduct();
    }
    createProduct() {
        let but = document.querySelector('.block_calc').getElementsByTagName('i');
        let result = document.querySelector('.result');
        let ul = document.querySelector('.ul_result');
        let text = document.createElement('div');
            text.className = "text";
            text.innerHTML = 'Итого: 0 BYN';
        
        for (let i = 0; i < this.catalogProduct.length; i++) {

            let li = createOneProduct.getProductItem({
                tagName: "li",
            })
            let item = createOneProduct.getProductItem({
                tagName: "div",
                className: "item"
            })
            let name = createOneProduct.getProductItem({
                tagName: "a",
                className: "name",
                textName: `${this.catalogProduct[i].name} x0`
            })
            let price = createOneProduct.getProductItem({
                tagName: "span",
                textName: `${this.catalogProduct[i].price} BYN`
            });
            let close = createOneProduct.getProductItem({
                tagName: "i",
                className: "fas fa-times"
            })
            
            close.addEventListener('click', function(){
                let num = +name.innerHTML.replace(/\D+/g, '');
                text.innerHTML = text.innerHTML.replace(/\D+/g, '');
                text.innerHTML = +(text.innerHTML) - (calcResult.catalogProduct[i].price * num);
                text.innerHTML = 'Итого: ' + (text.innerHTML) + " BYN";
                name.innerHTML = name.innerHTML.replace(num, 0);
                li.remove();
            })

            function addTawar(){
               li.appendChild(name);
               item.append(price, close);
               li.appendChild(item)
               ul.appendChild(li);
            }

            but[i].addEventListener('click', function () {
                text.innerHTML = +(text.innerHTML.replace(/\D+/g, '')) + calcResult.catalogProduct[i].price;
                text.innerHTML = 'Итого: ' + (text.innerHTML) + " BYN";
                let num = +name.innerHTML.replace(/\D+/g, '');
                name.innerHTML = name.innerHTML.replace(num, ++num);
                addTawar();
            })
        }
        result.appendChild(ul);
        result.appendChild(text);
    }
}

let calcResult = new CalcResult('.result' ,catalogProduct);