"use strict";
var d = document,
    countInCart = 1;
//get set info localStorage
function getCartData() {
    return JSON.parse(localStorage.getItem('cart'));
}
function setCartData(o){
    localStorage.setItem('cart', JSON.stringify(o));
    return false;
}
d.querySelector('.catalog__goods').addEventListener('click', e =>{
    if(e.target && e.target.nodeName == "BUTTON"){
        let cartData = getCartData()||{},
            id = e.target.dataset.id,
            title = e.target.dataset.title,
            price = e.target.dataset.price;

        if(cartData.hasOwnProperty(id)){
            // cartData.count+=1;
            cartData[id][2]+=1;
        }else {
            cartData[id] = [title, price, 1];
        }
        if(!setCartData(cartData)){
            this.disabled = false;
        }
        countInCart++;
        localStorage.setItem('counter', JSON.stringify(countInCart));
        document.querySelector('#total-cart-count').innerHTML = countInCart;

    }
});




