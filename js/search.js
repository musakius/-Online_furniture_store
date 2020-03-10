document.addEventListener("DOMContentLoaded", () => {
class Search {
    constructor(containerSearch, catalogProduct) {
        this.containerSearch = document.querySelector(containerSearch);
        this.catalogProduct = catalogProduct;
        this.createNews();
    }
    createNews() {
        let wrapper = document.createElement("slot");
        let but = document.getElementById("but_search");
        let input = document.querySelector(".search_tawar");
        let arr = [];

        for (let i = 0; i < this.catalogProduct.length; i++) {
            but.addEventListener('click', function () { 
                let index = search.catalogProduct[i].name.indexOf(input.value);
                if (index !== -1) {
                    arr.push(search.catalogProduct[i].id)
                    localStorage.setItem('id_search', JSON.stringify(arr));
                    document.location.href = "./search.html";
                } 
            })
        }

        let productsCart = this.getProductSeach();

        for (let i = 0; i < productsCart.length; i++) {
            let a = createOneProduct.getProductItem({
                tagName: "a",
                className: "a"
            })
            let item = createOneProduct.getProductItem({
                tagName: "div",
                className: "item"
            })
            let name = createOneProduct.getProductItem({
                tagName: "h3",
                className: "name",
                textName: productsCart[i].name
            })
            let img = createOneProduct.getProductItem({
                tagName: "img",
                className: "img",
                backgroundImg: productsCart[i].img
            })
            let description = createOneProduct.getProductItem({
                tagName: "p",
                className: "description",
                textName: productsCart[i].description
            })
            let price = createOneProduct.getProductItem({
                tagName: 'div',
                className: 'price',
                textName: `Цена: ${productsCart[i].price} BYN`
            });

            item.append(img, name, description, price);
            a.appendChild(item)
            wrapper.appendChild(a);
                    
            a.addEventListener('click', function () {
                localStorage.setItem('id_tavar', JSON.stringify(productsCart[i].id));
                a.href = "../product.html";
            })
        }
        this.containerSearch.appendChild(wrapper);
    }
    getProductSeach() {
        let products = [];
        let productsLcStorage = localStorage.getItem('id_search');
        if(productsLcStorage != null){
            products = JSON.parse(productsLcStorage);
        }
        let productsCart = [];
        for (let i = 0; i < this.catalogProduct.length; i++) {
            if (products.indexOf(this.catalogProduct[i].id) !== -1) {
                productsCart.push(this.catalogProduct[i]);
            }
        }
        return productsCart;
    }
}

let search = new Search('.content', catalogProduct);
});

<<<<<<< HEAD

=======
>>>>>>> b5a7133f77d520d1d014a91a309d17a12ee6dd65
let host = location.pathname.replace(/\Course_work_2.*/, '');
    host = host + 'Course_work_2/search.html';

if (location.pathname !== host) {
    localStorage.removeItem('id_search');
<<<<<<< HEAD
}
=======

>>>>>>> b5a7133f77d520d1d014a91a309d17a12ee6dd65

