'use strict';
window.addEventListener('DOMContentLoaded', function () {
    checkCart();
    Cart();
});

var cartData = {},
    obj = {},
    d = document,
    cart_box = d.querySelector('.cart_box'),
    sum = d.getElementById('total_sum');

function checkCart(){
    if(localStorage.getItem('cart')!=null){
        cartData = JSON.parse(localStorage.getItem('cart'));
    }
}

function getCartData() {
    return JSON.parse(localStorage.getItem('cart'));
}

cart_box.addEventListener('click', function (e) {
    let counter = 0,
    idEl;
    obj = getCartData();
   if(e.target && e.target.className=='dec'){
       idEl = e.target.parentNode.parentNode.dataset.id;
       counter = parseInt(e.target.nextElementSibling.innerHTML);
       counter--;
       if(counter){
           // console.log(counter)
           e.target.nextElementSibling.innerHTML = counter;
           decrement(idEl, counter);

       }else {
           console.log(counter)
       }

   }else if(e.target && e.target.className == 'inc'){
       idEl = e.target.parentNode.parentNode.dataset.id;
       counter = parseInt(e.target.previousElementSibling.innerHTML); counter++;
       e.target.previousElementSibling.innerHTML = counter;
       increments(idEl, counter);
   }else if(e.target && e.target.className == 'del'){
       e.preventDefault();
       e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
       var id = e.target.parentNode.parentNode.dataset.id;
       for(var i in obj){
           if(i == id){
               delete obj[i];
               localStorage.removeItem('cart');
               localStorage.setItem('cart', JSON.stringify(obj));
           }
       }
   }
});

function increments(id, c){
    for(var i in obj){
        if(i==id){
            obj[i][2] = c;
            totalInc(obj[i][1]);
            localStorage.removeItem('cart');
            localStorage.setItem('cart', JSON.stringify(obj));
        }
    }

}

function decrement(id, c){
    for(var i in obj){
        if(i==id){
            obj[i][2] = c;
            totalDec(obj[i][1]);
            localStorage.removeItem('cart');
            localStorage.setItem('cart', JSON.stringify(obj));
        }
    }
}

function totalDec(p){
    var suma = parseInt(sum.innerHTML);
    suma -= parseInt(p);
    sum.innerHTML = suma + " UAH";
}

function totalInc(p){
    var summ = parseInt(sum.innerHTML);
    summ +=parseInt(p);
    sum.innerHTML = summ + " UAH";
}

function Cart() {
    var totalItems = '',
        totalPrice = 0 ;
    for(var item in cartData){
        totalItems +=
            `<tr data-id="${item}">
            <td>${cartData[item][0]}</td>
            <td>${cartData[item][1]}</td>
            <td class="countItem"><span class="dec">-</span><span class="res-count-goods">${cartData[item][2]}</span><span class="inc">+</span></td>
            <td><button class="del">Delete</button></td>
            </tr>`;
        totalPrice += parseInt(cartData[item][1]*cartData[item][2]);
    }
    cart_box.insertAdjacentHTML('afterBegin', totalItems);
    sum.innerHTML = " " +totalPrice + " UAH";
}


//
document.getElementById('clear_cart').addEventListener('click',(e)=>{
    e.preventDefault();
    localStorage.removeItem('cart');
    cart_box.parentNode.removeChild(cart_box);
    sum.innerHTML = 0;
    alert("Cart is empty");
});