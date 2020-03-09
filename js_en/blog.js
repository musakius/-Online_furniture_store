class Blog{
    constructor(containerNews, catalogNews){
        this.containerNews = document.querySelector(containerNews);
        this.catalogNews = catalogNews;
        this.createNews();
    }
    createNews() {
        let wrapper = document.createElement("slot");

        for (let i = 0; i < this.catalogNews.length; i++) {

            let item = createOneProduct.getProductItem({
                tagName: "div",
                className: "item"
            })
            let name = createOneProduct.getProductItem({
                tagName: "h3",
                className: "name",
                textName: this.catalogNews[i].name
            })
            let img = createOneProduct.getProductItem({
                tagName: "img",
                className: "img",
                backgroundImg: this.catalogNews[i].img
            })
            let text = createOneProduct.getProductItem({
                tagName: "p",
                className: "text",
                textName: this.catalogNews[i].text
            })
            let date = createOneProduct.getProductItem({
                tagName: "span",
                className: "date",
                textName: this.catalogNews[i].date
            })
            let like = createOneProduct.getProductItem({
                tagName: "label",
                className: "like",
                textName: this.catalogNews[i].checkbox
            })

            item.append(name, img, text, like, date);
            wrapper.appendChild(item);
        }
        this.containerNews.appendChild(wrapper);
    }
}

let blog = new Blog('.content', catalogNews);