"use strict";

// let send = function (params, call) {
//   let xhr = new XMLHttpRequest();
//     xhr.overrideMimeType("application/json");
//     xhr.open('Get','http://demo0267974.mockable.io/login?'+params, true);
//     if(xhr.readyState == 4){
//         if(xhr.status == 200){
//             call(xhr.responseText);
//         }
//     }
//     xhr.send(null);
// };
// function updateSession() {
//     send('',(msg)=>{
//         console.log('Session'+ msg);
//     })
// }
// function auth(body) {
//     send('pass='+body.password+ '&username='+ body.username, (msg)=>{
//         if(msg == true ){
//             console.log('auth successful');
//         }
//     })
// }
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
window.addEventListener('load', ()=>{
    if(document.getElementById('reg')){


        document.getElementById('singin').addEventListener('click', e =>{
            e.preventDefault();
            let form =  document.forms.Auto;
            let body = {
                id:1,
                username: form.elements.username.value,
                password: form.elements.password.value
            };
            getJson('http://demo0267974.mockable.io/login', (json)=>{
                let data = JSON.parse(json);

                if(data.username == body.username && data.password==body.password ){
                    alert("auth successful");
                    console.log('ddd');
                    localStorage.setItem('body', JSON.stringify(data));
                    sessionStorage.setItem('body', JSON.stringify(data));
                    window.location.replace('/Shop/src/index.html');

                }else{
                    alert('not found user');
                }
            })
            // auth(body);
        });
    }
});
