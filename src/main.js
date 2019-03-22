'use strict';

// import './js/auth';
import './js/index';
// import './js/filter';
// import { cartRender} from "./js/cart";

let user = JSON.parse(localStorage.body),
    count = localStorage.getItem('counter');
document.getElementById('user').innerHTML ="Hi,"+" " + user.username;
document.querySelector('#total-cart-count').innerHTML = count;
// cartRender();



