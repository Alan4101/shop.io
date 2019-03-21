"use strict";
console.log('cart');

export function cartRender() {
    let d = document,
        item_box = d.querySelectorAll('.item-goods'),
        cart_box = d.querySelector('#cart_box'),
        btn = d.querySelectorAll('.btn');

    function getCartData() {
        return JSON.parse(localStorage.getItem('cart'));
    }
    function setCartData(o) {
        localStorage.setItem('cart',JSON.stringify(o));
    }

    //add to cart
    function addToCart(e){
        this.disabled = true;
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
    btn.forEach(el=>{
       el.addEventListener('click', addToCart);
    });

// cart

    function openCart(e) {
        console.log('hi');
        let cartData = getCartData(),
            totalItems = '',
            totalPrice = 0 ;

        if(cartData!== null){
            totalItems = '<table class="table"><thead> <tr><th scope="col">Title</th><th scope="col">Price</th><th scope="col">Count</th></tr></thead><tbody>';
            for(let item in cartData){
                totalItems += `<tr><td> ${cartData[item][0]}</td><td>${cartData[item][1]}</td><td class="countItem"><span class="dec">-</span> ${cartData[item][2]} <span class="inc">+</span></td> <td><button class="del">Delete</button></td></tr>`;

                totalPrice += parseInt(cartData[item][1]*cartData[item][2]);
            }
            totalItems+=`</tbody></table><div class="form-group"><label id="total_sum">Total sum: ${totalPrice} UAH</label> <button type="submit" class="btn-buy">Buy</button></div>`;
            cart_box.innerHTML = totalItems;
            let dec_v = d.querySelectorAll('.dec');
            let inc_v = d.querySelectorAll('.inc');
            let deleteItem = d.querySelectorAll('.del');
            let dec = (el)=>{
                let e = el.target;

                console.log(this.parentNode.className);
            };
            let inc = (e)=>{

            };
            let delItem = (e)=>{

            };
            dec_v.forEach(el => el.addEventListener('click', dec));
            inc_v.forEach(el => el.addEventListener('click', inc));
            deleteItem.forEach( el=> el.addEventListener('click', delItem));
        }else{
            cart_box.innerHTML = 'Cart is empty! return to catalog '+`<a href="../index.html">Catalog</a>`;
        }

    }
    let form = d.forms.cartForm;
    form.addEventListener('click',(e)=>{
        e.preventDefault();
       let data = getCartData();
       // data.userId = localStorage.getItem('data');
       console.log(localStorage.getItem('data'));
        let xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://demo0267974.mockable.io/cart', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return;

            alert( this.responseText );
        };
        xhr.send(data);
        localStorage.removeItem('cart');
    });

    if(d.getElementById('cart_p')){
        openCart();
    }

    d.getElementById('cart').addEventListener('click', openCart);
    d.getElementById('clear_cart').addEventListener('click',(e)=>{
        localStorage.removeItem('cart');
        alert("Cart is empty");
    })

}

