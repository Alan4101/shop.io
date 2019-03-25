'use strict';
import './js/auth';
import './js/filter';
import './js/index';
import { Post} from "./js/Restful";
import { Message } from "./js/Message";

const url_cart = 'http://demo0267974.mockable.io/cart';

let user = JSON.parse(localStorage.getItem('user')),
    count = localStorage.getItem('counter');
if(document.getElementById('cart_p')){

    document.getElementById('send').addEventListener('click',(e)=>{
        e.preventDefault();
        let dataSend = localStorage.getItem('cart');
        Post(url_cart, dataSend)
            .then( () =>{ Message('Successfully', 'The order is successfully sent');})
            .catch( error => console.log(error));
        localStorage.removeItem('cart');
        cart_box.parentNode.removeChild(cart_box);
        document.querySelector('#total-cart-count').innerHTML = count;
        document.querySelector('#total_sum').innerHTML = 0;
    });


}
document.getElementById('user').innerHTML ="Hi,"+" " + user.username;




