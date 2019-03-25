'use strict';
import { Get } from "./Restful";

export const  data = "http://demo0267974.mockable.io/shop";
const pageId = document.getElementById('catalog_p');

Get(data).then( response =>{
    return JSON.parse(response);
}).then(list =>{
    View(list);
}).catch(error =>{
    console.log('Error!');
    console.log(error);
});

export function View(file) {
    for(let i in file) {
            addDataInCatalog(file[i], i);
        }
}

export function addDataInCatalog(data, i) {
    let block = document.getElementById('catalog');
    let divb = document.createElement('div');
    divb.className = "col-lg-4 col-md-4 col-sm-12 item-goods";
    divb.setAttribute('data-num', i);
    divb.innerHTML = `<h2>${data.title}</h2><figure><img src="${data.img}" alt=""><figcaption><p>${data.description}</p>`+
        `<div class="nav-b"><p>${data.price} <span>UAH</span></p>
<a class="full-more btn" data-id="${data.id}" data-title="${data.title}" data-img="${data.img}" data-price="${data.price}">More</a>
<button type="button" class="btn add_item" data-id="${data.id}" data-title="${data.title}" data-img="${data.img}" data-price="${data.price}">Add to cart</button>
</div></figcaption></figure>`;
    block.appendChild(divb);
}
//display of items
function viewFull(data) {
    let block = document.getElementById('catalog');
    block.classList.add("block__full");
    let str = '';
    str += `<div class="block_info row">
                <div class="col-md-6"><figure class="img_goods"><img src="${data.img}" alt=""></figure></div>
                <div class="col-md-6">
                    <h2 class="title_goods">${data.title}</h2>
                    <p>prise <span>${data.price}</span></p>
                    <button type="button" class="btn add_item" data-id="${data.id}" data-title="${data.title}" data-img="${data.img}" data-price="${data.price}">Add to cart</button>
                </div>
            </div>
            <div class="block_description"><p>${data.description}</p></div>`;

    block.innerHTML = str;
}
//
function recently(data) {
    let last = document.querySelector('.last');
    let div = document.createElement('div');
    div.className = "col-lg-4 col-md-4 col-sm-12 item-goods";
        div.innerHTML = ``+
                    `<h2>${data.title}</h2>`+
                        `<figure><img src="${data.img}" alt="">`+
                        `<figcaption><p>${data.description}</p>`+
                            `<div class="nav-b">`+
                                `<p>${data.price}<span>UAH</span></p>`+
            `<a class="full-more btn" data-id="${data.id}" data-title="${data.title}" data-img="${data.img}" data-price="${data.price}">More</a>`+
            `<button type="button" class="btn add_item" data-id="${data.id}" data-title="${data.title}" data-img="${data.img}" data-price="${data.price}">Add to cart</button>
                              </div>
                        </figcaption>
                        </figure>`;

    last.appendChild(div);
}
//deleted item from localStorage
function delLastView() {
    let key, value;
    for (let i=0; i< localStorage.length; i++) {
        key = localStorage.key(i);
        value = JSON.parse(localStorage.getItem(key));
        if (Date.parse(value.date) < (new Date() - 24 * 60 * 60 * 1000)) {
            localStorage.removeItem(key);
        }
    }
}
//display of viewed items
function viewRecently(){
    let key, value;
    for(let i =0; i<localStorage.length; i++){
        key = localStorage.key(i);
        if(!isNaN(key)){
            value = JSON.parse(localStorage.getItem(key));
            recently(value);
        }
    }
}
// adding product to viewed in localstor
if(pageId){
    window.addEventListener('DOMContentLoaded', function () {
        document.querySelector('#catalog').addEventListener('click', function(e){
            let obj = {};
            if(e.target && e.target.classList.contains("full-more")){
                let desc = e.target.parentNode.parentNode.firstChild;
                obj.id = e.target.dataset.id;
                obj.title = e.target.dataset.title;
                obj.img = e.target.dataset.img;
                obj.price = e.target.dataset.price;
                obj.description = desc.innerHTML;
                obj.date = new Date();
                viewFull(obj);
                localStorage.setItem(obj.id, JSON.stringify(obj));
            }
        });
        delLastView();
        viewRecently();
    });
}

// function Pag(list){
//
//     let len = Object.keys(list).length;
//     let countOnPage = 6;
//     let page = Math.ceil(len/countOnPage);
//     document.querySelector('#pag').addEventListener('click', function (e) {
//
//         if(e.target && e.target.tagName == "LI"){
//             let pagenextlist = [];
//             let p = e.target.dataset.page;
//             console.log(p);
//             for(let i = 0; i<itemall.length; i++){
//                 let data_num = itemall.lastChild;
//                 console.log(data_num);
//                 // if(){
//                 //     pagenextlist = list.splice(0, countOnPage);
//                 //     View(pagenextlist);
//                 // }
//             }
//
//         }
//     });
//
//     function AddCountPage(page){
//         let pag = document.getElementById('pag');
//         let pages = '';
//         for(let i = 0; i < page; i++){
//             pages += `<li data-page="${i+1}" id="page${i+1}">${i+1}</li>`;
//         }
//         pag.innerHTML = pages;
//     }
//
//     function firstItem(){
//         let pagList = list.splice(0,countOnPage);
//         View(pagList);
//         console.log(pagList);
//     }
//
//     function init(){
//         AddCountPage(page);
//         firstItem();
//     }
//
//     return init();
// }





