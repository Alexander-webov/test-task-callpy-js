class Product {
    checkboxColorVal = '';
    constructor(nameProduct, colorProduct, sumProduct) {
        this.nameProduct = nameProduct;
        this.colorProduct = colorProduct;
        this.sumProduct = sumProduct;
    }
    //Сохранение в localStorage
    saveProduct(nameNewObj) {
        for (const el in checkboxColorInput) {
            if (checkboxColorInput[el].checked) {
                this.checkboxColorVal = checkboxColorInput[el].value;
            }
        }
        nameNewObj = {
            nameProduct: productNameInput.value,
            colorProduct: this.checkboxColorVal,
            sumProduct: +productNumInput.value,
        }

        localStorage.setItem(productNameInput.value, JSON.stringify(nameNewObj));
    }
    //Удаление из localStorage
    delProduct(e) {
        if (e.path[1].classList.contains('product__item')) {
            let nameKeyLocalStorage = e.path[1].querySelector('.product__item-name').textContent;
            if (e.target.classList.contains('btn-del')) {
                localStorage.removeItem(nameKeyLocalStorage);
                window.location.href = window.location.href;
            }

        }
    }

}
