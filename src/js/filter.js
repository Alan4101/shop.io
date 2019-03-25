'use strict';
import {data, View} from "./index";
import { Get } from "./Restful";
import { addDataInCatalog } from "./index";

Get(data).then( response =>{
    return  JSON.parse(response);
}).then( list =>{
    Filter(list);
    Sort(list);
}).catch(error =>{
    console.log('Error!');
    console.log(error);
});
const elem = document.getElementById('catalog_p');
function Filter(o){
    if(elem){
        document.getElementById('filter').addEventListener('change', ()=>{
            let val = document.getElementById('filter').value;
            let node = document.getElementById('catalog');
            if(node.hasChildNodes()){ node.innerHTML=''; }
            val!='all'?sortByCategory(o, val): View(o);
        });
    }
    function sortByCategory(obj, filter) {
        for( let i in obj){
            if(!obj[i].title.indexOf(filter)){
                addDataInCatalog(obj[i]);
            }
        }
    }
}
function Sort(o) {
    if(elem){
        document.getElementById('sort_select').addEventListener('change', ()=>{
            let val = document.getElementById('sort_select').value;
            let node = document.getElementById('catalog');
            if(node.hasChildNodes()){ node.innerHTML=''; }
            sortByString(o, val);
        });
    }
    function sortByString(obj, type) {
        obj.sort((a, b)=>{ return parseInt(a.price) - parseInt(b.price) });
        (type!=='max')?View(obj) :View(obj.reverse());
    }
}




