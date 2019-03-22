'use strict';
import {Get} from "./Restful";
// const  data = "/Shop/catalog.json";
const  data = "http://demo0267974.mockable.io/shop";

Get(data).then( response =>{
    View(JSON.parse(response));
    // fip(JSON.parse(response));
}).catch(error =>{
    console.log('Error!');
    console.log(error);
});
window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('pag').addEventListener('click', pagination, false);
});
function fip(data) {
    let count_item = Object.keys(data).length,
        countInPage = 6;
    let page = Math.ceil(count_item/countInPage);
    AddCountPage(page);

}
let opt = {
    iCount: 24,
    limit: 5,
    numPage: document.querySelector('.paginator'),
    btnPag: document.querySelector('#pag'),
    item : document.querySelectorAll('.item-goods'),
    pagId : document.querySelector('#page1')
};
// function FirstItem (){
//     opt.item.forEach((el, i)=>{
//         if(i < opt.limit){
//             el.style.display = 'block';
//         }
//     });
// }
function AddCountPage(countPage){
    let pag = opt.numPage;
    let page = '';
    for(let i = 0; i< countPage; i++){
        page += `<li data-page="${i*opt.limit}" id="page${i+1}">${i+1}</li>`;
    }
    pag.innerHTML = page;
}
function DataAttr() {
    opt.item.forEach((el,i)=>{
        el.setAttribute('data-num',i);
    })
}
AddCountPage();
// FirstItem();
DataAttr();
function View(file) {
    for(let i in file){
        addDataInCatalog(file[i]);
    }
}
function addDataInCatalog(data) {
    let block = document.getElementById('catalog');
    let divb = document.createElement('div');
    divb.className = "col-lg-4 col-md-4 col-sm-12 item-goods";
    divb.innerHTML = `<h2>${data.title}</h2><figure><img src="${data.img}" alt=""><figcaption><p>${data.description}</p>`+
        `<div class="nav-b"><p>${data.price} <span>UAH</span></p><button type="button" class="btn add_item" data-id="${data.id}" data-title="${data.title}" data-img="${data.img}" data-price="${data.price}">Add to cart</button></div></figcaption></figure>`;
    block.appendChild(divb);
}
function pagination(event) {

    let e = event,
        target = e.target,
        data_page =+ target.dataset.page,
        item = document.querySelectorAll('.item-goods');
    let btn = document.querySelectorAll('#pag>li');
    btn.forEach(el=>{
        if(el.dataset.page!=data_page){
            el.classList.remove("paginator_active");
        }else {
            el.classList.add("paginator_active")

        }
    });

    for (let i = 0; i < item.length; i++) {
        let data_num = item[i].dataset.num;
        if (data_num <= data_page || data_num >= data_page)
            item[i].style.display = "none";
    }

    let j=0;
    for (let i = data_page; i < item.length; i++) {
        if (j >= opt.limit) break;
        item[i].style.display = "block";
        j++;
    }
}


