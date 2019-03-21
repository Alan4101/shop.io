'use strict';

import './js/auth';
import './js/index';
import './js/filter';
import { cartRender} from "./js/cart";

let user = JSON.parse(localStorage.body);
document.getElementById('user').innerHTML ="Hi," + user.username;
cartRender();
console.log('main');
