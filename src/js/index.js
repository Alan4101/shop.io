'use strict';
import {cartRender} from "./cart";
// const  data = "/Shop/catalog.json";
const  data = "http://demo0267974.mockable.io/shop";
    function init(file) {

        let goods = {};
        for(let k in file){
            goods[k]=file[k];

        }

        function _render() {
            view();
            AddCountPage();
            FirstItem();
            attr();
            cartRender();
        }
        function view() {
            for(let i in goods){
                addDataInCatalog(file[i]);
            }
        }

        let opt = {
            iCount: Object.keys(goods).length,
            limit: 5,
            numPage: document.querySelector('.paginator'),
            btnPag: document.querySelector('#pag'),
            item : document.querySelectorAll('.item-goods'),
            pagId : document.querySelector('#page1')
        };

        function AddCountPage(){
            let pag = opt.numPage;
            let page = `<!--<li data-page="" id="prev">\<</li>-->`;
            let countPage = Math.ceil(opt.iCount/opt.limit);
            for(let i = 0; i< countPage; i++){
                page += `<li data-page="${i*opt.limit}" id="page${i+1}">${i+1}</li>`;
            }
            page+=`<!--<li data-page="" id="next">\></li>-->`;
            pag.innerHTML = page;
        }

        function FirstItem (){
            document.querySelectorAll('.item-goods').forEach((el, i)=>{
                if(i < opt.limit){
                    el.style.display = 'block';
                }
            });
            document.querySelector('#page1').classList.add('paginator_active');
        }

        function attr() {
            document.querySelectorAll('.item-goods').forEach((el,i)=>{
                el.setAttribute('data-num',i);
            })
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

        if(document.getElementById('pag')){
            document.getElementById('pag').addEventListener('click', pagination);
        }else {
            console.log();
        }

        return _render();
    }

function filter(data) {
    let goods = {};
    for(let k in data){
        goods[k]=data[k];
    }

    function view(arr) {
        for(let i in arr){
            addDataInCatalog(arr[i]);
        }
    }
    function _start() {

    }
    function getItems(v) {
        if(v <= 2000){
            return v;
        }else {
            return false;
        }
    }

    function getFilter() {
        let rng = document.getElementById('rangePrice');
        let o= {};
        for(let i =0; i<Object.keys(goods).length; i++){
            if(goods[i].price<rng.value){
                o[i]=goods[i];
            }

        }
        // view(newArr);
    }
    document.getElementById('rangePrice').addEventListener('change', getFilter);
    return _start();

}

    function getData(){
        try{
            getJson(data, function(text){
                let list = JSON.parse(text);
                init(list);
                filter(list);

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
                    `<div class="nav-b"><p>${data.price} <span>UAH</span></p><button type="button" class="btn add_item" data-id="${data.id}" data-title="${data.title}" data-img="${data.img}" data-price="${data.price}">Add to cart</button></div></figcaption></figure>`;
        block.appendChild(divb);
    }
    getData();
// opt.btnPag.addEventListener('click', pg.Pagination);


//
