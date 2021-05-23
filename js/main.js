const productNameInput = document.querySelector('.product-input-name'),
    productNumInput = document.querySelector('.product-num'),
    btnSave = document.querySelector('.btn-save'),
    checkboxColorInput = document.querySelectorAll('.add__product-checkbox'),
    product = document.querySelector('.product');


//Проверка на имя товара
productNameInput.addEventListener('input', () => {
    if (productNameInput.value === '' || productNameInput.value.length < 3) {
        btnSave.setAttribute('disabled', true);
    } else {
        btnSave.removeAttribute('disabled');
    }

});
//Проверка на +число
productNumInput.addEventListener('input', () => {
    productNumInput.value = productNumInput.value.replace(/[^\d]/g, '');
});
let productItem = new Product(productNameInput.value, checkboxColorInput, +productNumInput.value);

//Добавление нового товара по клику
btnSave.addEventListener('click', () => {
    productItem.saveProduct(productItem)
});
//Удаления товара по клику из DOM и localStorage
product.addEventListener('click', productItem.delProduct);
//Обработчик для выведение имя товара в console.log и его изменения
product.addEventListener('click', (e) => {
    if (e.target.classList.contains('product__item-name')) {
        let titleProduct = e.target.textContent;
        localStorage.removeItem(titleProduct);
        productNameInput.value = titleProduct;
        btnSave.removeAttribute('disabled');
        console.log(titleProduct);
    }
});

//Вывод на страницу всех блоков которые хранятся в localStorage
for (i = 0; i < localStorage.length; i++) {
    var myKey = localStorage.key(i);
    //Формирование/создание HTML блока, где будут выводится данные о продукте
    let divItem = document.createElement('div'),
        divProductItemName = document.createElement('div'),
        divProducItemColor = document.createElement('div'),
        divProductItemSum = document.createElement('div'),
        formButton = document.createElement('form');
    buttonDeletediv = document.createElement('button');
    //Добавления класса
    divItem.classList.add('product__item');
    divProductItemName.classList.add('product__item-name');
    divProducItemColor.classList.add('product__item-color');
    divProductItemSum.classList.add('product__item-sum');
    buttonDeletediv.classList.add('btn-del');
    //Добавление контента
    divProductItemName.innerText = myKey;
    divProducItemColor.innerText = 'Цвет: ' + JSON.parse(localStorage.getItem(myKey)).colorProduct;
    divProductItemSum.innerText = 'Количество: ' + JSON.parse(localStorage.getItem(myKey)).sumProduct;
    buttonDeletediv.innerText = 'Удалить';
    //Отрисовка в html
    product.insertAdjacentElement('afterbegin', divItem)
        .insertAdjacentElement('beforeend', divProductItemName)
        .insertAdjacentElement('afterend', divProducItemColor)
        .insertAdjacentElement('afterend', divProductItemSum)
        .insertAdjacentElement('afterend', formButton)
        .insertAdjacentElement('afterend', buttonDeletediv);
}


