class CardStore{
    constructor(catalogCounter){
    this.catalogCounter = document.querySelector(catalogCounter);
    this.getProduct();
    }

    getProduct(){
        let products = [];
        let productsLcStorage = localStorage.getItem('CardStore');
        if(productsLcStorage != null){
            products = JSON.parse(productsLcStorage);
        }
        this.catalogCounter.innerHTML = products.length;
        return products;
    };
    
    putProduct(id, bool){
        let products = this.getProduct();
        let index = products.indexOf(id);
        let statusProduct;

        if(bool === true || index === -1){
            products.push(id);
            statusProduct = true;
        }else{
            products.splice(index, 1);
            statusProduct = false;
        }

        localStorage.setItem('CardStore', JSON.stringify(products));

        return {
            statusProduct: statusProduct,
            products: products
        }
    };
    
}

let cardStore = new CardStore('.quantity');
