'use strict';

export default class{

    constructor(itemCount, limit){
        //all item
        this.itemCount = itemCount;
        //item on page
        this.limit = limit;
    }
    //add span on page number pagination
    AddPage(pag){
        let page = `<li data-page="" id="prev">\<</li>`;
        let countPage = Math.ceil(this.itemCount/this.limit);
        for(let i = 0; i< countPage; i++){
            page += `<li data-page="${i*this.limit}" id="page${i+1}">${i+1}</li>`;
        }
        page+=`<li data-page="" id="next">\></li>`;
        pag.innerHTML = page;
    }
    // display of the first page
    FirstItem (b,p){
        b.forEach((el, i)=>{
            if(i < this.limit){
                el.style.display = 'block';
            }
        });
        p.classList.add('paginator_active');

    }
    //set attribute data-num for goods
    setAttr(obj){
        obj.forEach((el,i)=>{
            el.setAttribute('data-num',i)
        })
    }
    //pagination
    Pagination(event){
        let e = event,
            target = e.target,
            targetId = target.id,
            num_ = targetId.substr(4),
            data_page =+ target.dataset.page,
            main = document.querySelector('#page1'),
            item = document.querySelectorAll('.item-goods');

        main.classList.remove("paginator_active");
        main = document.getElementById(targetId);
        main.classList.add("paginator_active");

        let j=0;
        for (let i = 0; i < item.length; i++) {
            let data_num = item[i].dataset.num;
            if (data_num <= data_page || data_num >= data_page)
                item[i].style.display = "none";
        }
        for (let i = data_page; i < item.length; i++) {
            if (j >= this.limit) break;
            item[i].style.display = "block";
            j++;
        }
    }

}