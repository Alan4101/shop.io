"use strict";
let d = document,
    cart_box = d.querySelector('#cart_box');

//get set info localStorage
function getCartData() {
    return JSON.parse(localStorage.getItem('cart'));
}
function setCartData(o) {
    localStorage.setItem('cart',JSON.stringify(o));
}
//add to cart
function addToCart(e){
    let cartData = getCartData()|| {},
        id = this.dataset.id,
        title = this.dataset.title,
        price = this.dataset.price;

    if(cartData.hasOwnProperty(id)){
        cartData[id][2]+=1;
    }else {
        cartData[id] = [title, price, 1];
    }
    if(!setCartData(cartData)){
        this.disabled = false;
    }
    return false;
}
d.querySelector('.catalog__goods').addEventListener('click', e =>{
    let countinCart = 0;
    if(e.target && e.target.nodeName == "BUTTON"){
        countinCart++;
        console.log(countinCart);
        let cartData = getCartData()||{},
            id = e.target.dataset.id,
            title = e.target.dataset.title,
            price = e.target.dataset.price;
        if(cartData.hasOwnProperty(id)){
            cartData[id][2]+=1;
        }else {
            cartData[id] = [title, price, 1];
        }

        console.log();

    }
});

// open cart
function openCart(e) {

        let cartData = getCartData(),
            totalItems = '',
            totalPrice = 0 ;
        let user = JSON.parse(localStorage.body);

        if(cartData!== null){

            totalItems = '<table class="table"><thead> <tr><th scope="col">Title</th><th scope="col">Price</th><th scope="col">Count</th></tr></thead><tbody>';

            for(let item in cartData){
                totalItems += `<tr data-user="${user.id}">
                            <td> ${cartData[item][0]}</td>
                            <td>${cartData[item][1]}</td>
                            <td class="countItem"><span class="dec">-</span> ${cartData[item][2]} <span class="inc">+</span></td>
                             <td><button class="del">Delete</button></td>
                             </tr>`;
                totalPrice += parseInt(cartData[item][1]*cartData[item][2]);
            }
            totalItems+=`</tbody></table>`;
            d.getElementById('total_sum').innerHTML = " " +totalPrice + " UAH";
            cart_box.innerHTML = totalItems;

            let dec_v = d.querySelectorAll('.dec');
            let inc_v = d.querySelectorAll('.inc');
            let deleteItem = d.querySelectorAll('.del');

            let dec = (el)=>{
                let e = el.target;
                 let s = e.parentNode.innerHTML.replace(/\D+/g,"");

                console.log(s);
            };
            let inc = (el)=>{
                let e = el.target;
                let s = e.parentNode.innerHTML.replace(/\D+/g,"");

                console.log(s);
            };
            let delItem = (e)=>{

            };
            dec_v.forEach(el => el.addEventListener('click', dec));
            inc_v.forEach(el => el.addEventListener('click', inc));
            deleteItem.forEach( el=> el.addEventListener('click', delItem));
        }else{
            cart_box.innerHTML = 'Cart is empty! return to catalog '+`<a href="catalog.html">Catalog</a>`;
        }

    }
//
// d.getElementById('cart').addEventListener('click', openCart);
// d.getElementById('clear_cart').addEventListener('click',(e)=>{
//     localStorage.removeItem('cart');
//     alert("Cart is empty");
// });






