"use strict";

export function Get(url){
    return new Promise(function (succeed, fail) {
        let req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.addEventListener('load',()=>{
            if(req.status < 400)
                succeed(req.responseText);
            else
                fail(new Error("Request failed:"+ req.status));
        });
        req.addEventListener('error', ()=>{
            fail(new Error("Network error"));
        });
        req.send();
    })
}
export function Post(url, requestuestBody){
    return new Promise(function (succeed, fail) {
        let req = new XMLHttpRequest();
        req.open("POST", url, true);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        req.addEventListener('load', ()=>{
            if(req.status < 400)
                succeed(req.responseText);
            else
                fail( new Error("Request failed:" + req.status));
        });
        req.addEventListener('error', ()=>{
            fail(new Error("Network error"));
        });
        req.send(requestuestBody);
    })
}
export function getJson(file, callback) {
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