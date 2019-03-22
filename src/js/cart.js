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
            cartData[id][2]+=1;
            console.log(cartData[id][2]);
        }else {
            cartData[id] = [title, price, 1];
        }
        if(!setCartData(cartData)){
            this.disabled = false;
        }
        localStorage.setItem('counter', JSON.stringify(countInCart++));

    }
});




