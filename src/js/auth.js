"use strict";
import { Message } from "./Message";
import { Get, Post} from "./Restful";

const data_post = 'http://demo0267974.mockable.io/signup',
    data_get = 'http://demo0267974.mockable.io/login',
    d = document;
function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    rand = Math.round(rand);
    return rand;
}
window.addEventListener('load', function () {
    if(document.getElementById('reg')){
        // Sign in
        d.getElementById('singin').addEventListener('click', e =>{
            e.preventDefault();

            let form =  document.forms.Auto;
            let body = {
                username: form.elements.username.value,
                password: form.elements.password.value
            };
            Get(data_get).then( response =>{
                console.log(response);
                return ValidateIn(body, JSON.parse(response));
            }).catch( error =>{
                console.log('Error!');
                console.log(error);
            });
        });

        document.getElementById('signup').addEventListener('click', (e)=>{
            e.preventDefault();

            let form = d.forms.regForm;
            let body = {
                id: randomInteger(2,100),
                username: form.elements.uname.value,
                password:  form.elements.pass.value,
                passwordC: form.elements.pass_confirm.value
            };
            ValidateUP(body);
            let params = "id="+body.id+ "&username=" + body.username+ "&pass=" + body.password;
            Post(data_post, params).then(text=>{
                console.log(text);
            }, error => console.log(error));
        });
        d.getElementById('sUp').addEventListener('click', (e)=>{
            e.preventDefault();
            d.getElementById('singIn-form').classList.remove('active-form');
            d.getElementById('registration_form').classList.add('active-form');
        });

        d.getElementById('sIn').addEventListener('click', (e)=>{
            e.preventDefault();
            d.getElementById('registration_form').classList.remove('active-form');
            d.getElementById('singIn-form').classList.add('active-form');
        });
    }

});
//validate sign UP
function ValidateUP(obj){

    if(obj.username == ''&& obj.password == '') {
        Message('Problem', 'The fields is empty, please fill it!', true);
    } else if(obj.password !== obj.passwordC){
        Message('Problem','Passwords do not match!')
    } else {
        Message('Success', 'You have successfully sign up');
        localStorage.setItem('user', JSON.stringify(obj));
        window.location.replace('/Shop/src/catalog.html');

    }

}
// validate sign in
function ValidateIn(obj, data){
    if(obj.username == ''&& obj.password == ''){
        Message('Problem','The fields is empty, please fill it!', true);
    }else if(data.username !== obj.username && data.password !== obj.password){
        Message('Error','The password or name is incorrect, please try again',true);
    }else {
        Message('Success', 'You have successfully logged in');
            localStorage.setItem('user', JSON.stringify(data));
            window.location.replace('/Shop/src/catalog.html');

    }
}
//The field must have minimum of 3 symbols and maximum 6
