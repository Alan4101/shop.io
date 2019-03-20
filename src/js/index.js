'use strict';
import pagination from "./pagination";

let opt = {
    iCount: 20,
    limit: 5,
    numPage: document.querySelector('.paginator'),
    btnPag: document.querySelector('#pag')
};

let pg = new pagination(opt.iCount, opt.limit);

function catalog(){
    // const  data = "/Shop/catalog.json";
    const  data = "http://demo0267974.mockable.io/shop";

    function init(){
        _render();
    }

    function _render(){
        try{
            getJson(data, function(text){
                let list = JSON.parse(text);
                for(let i in list){
                    addDataInCatalog(list[i]);
                }
                pg.AddPage(opt.numPage);

                let item = document.querySelectorAll('.item-goods');
                let pagId = document.querySelector('#page1');

                pg.FirstItem(item, pagId);
                pg.setAttr(item);
            })
        }catch (e){
            console.log("Incorrect file json" + e);
        }
    }
    //get json data
    function getJson(file, callback) {
        let rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        };
        rawFile.send(null);
    }
    //create div for item
    function addDataInCatalog(data) {
        let block = document.getElementById('catalog');
        let divb = document.createElement('div');
        divb.className = "col-lg-4 col-md-4 col-sm-12 item-goods";
        divb.innerHTML = `<h2>${data.title}</h2><figure><img src="${data.img}" alt=""><figcaption><p>${data.description}</p>`+
                    `<div class="nav-b"><p>${data.price} <span>UAH</span></p><button type="button" class="btn" data-id="${data.id}" data-title="${data.title}" data-img="${data.img}" data-price="${data.price}">Add to cart</button></div></figcaption></figure>`;
        block.appendChild(divb);
    }

    return{
        init: init
    }

}

catalog().init();
opt.btnPag.addEventListener('click', pg.Pagination);
