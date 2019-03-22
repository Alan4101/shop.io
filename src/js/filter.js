// 'use strict';
// function addDataInCatalog(data) {
//     let block = document.getElementById('catalog');
//     let divb = document.createElement('div');
//     divb.className = "col-lg-4 col-md-4 col-sm-12 item-goods";
//     divb.innerHTML = `<h2>${data.title}</h2><figure><img src="${data.img}" alt=""><figcaption><p>${data.description}</p>`+
//         `<div class="nav-b"><p>${data.price} <span>UAH</span></p><button type="button" class="btn add_item" data-id="${data.id}" data-title="${data.title}" data-img="${data.img}" data-price="${data.price}">Add to cart</button></div></figcaption></figure>`;
//     block.appendChild(divb);
// }
// function getJson(file, callback) {
//     let rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     };
//     rawFile.send(null);
// }
// function getData(){
//     try{
//         getJson("http://demo0267974.mockable.io/shop", function(text){
//             let list = JSON.parse(text);
//             filterData(list);
//         })
//     }catch (e){ console.log("Incorrect file json" + e); }
// }
// function filterData(list) {
//     let rng = document.getElementById('rangePrice');
//     rng.addEventListener('change', stepCursor);
//     let goods = {};
//     for(let k in list){
//         goods[k]=list[k];
//     }
//     // console.log(goods);
//     function f(fill) {
//         let obj = {};
//         for(let i=0; i<Object.keys(goods).length;i++){
//             if(goods[i].price>fill){
//                 obj[i]=goods[i];
//             }
//         }
//         return obj;
//     }
//     // console.log(Object.keys(obj).length);
//
//     function stepCursor() {
//         let rng = document.getElementById('rangePrice');
//         let input_price = document.getElementById('min_price');
//         input_price.innerHTML = rng.value;
//         let filter = rng.value;
//
//         addDataInCatalog(f(filter));
//         console.log();
//     }
//
// }
// getData();
//
//
