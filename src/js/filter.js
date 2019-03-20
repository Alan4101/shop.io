'use strict';



let rng = document.getElementById('rangePrice');

function stepCursor() {
    let input_price = document.getElementById('min_price');
    input_price.innerHTML = rng.value;
}

rng.addEventListener('change', stepCursor);
