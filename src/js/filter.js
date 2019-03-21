'use strict';

function stepCursor() {
    let input_price = document.getElementById('min_price');
    input_price.innerHTML = rng.value;
}
window.addEventListener('load', ()=>{
    if(document.getElementById('catalog_p')){
        let rng = document.getElementById('rangePrice');
        rng.addEventListener('change', stepCursor);
    }
});
