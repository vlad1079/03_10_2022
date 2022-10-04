let first = document.getElementById('first');

let link = 'https://p.calameoassets.com/220802135746-99d43c3366604dc65b260e077fc3580b/p2.svgz';

function createBlock(link) {
 let cont = document.querySelector('.container');
 let str = `<div class="block">
   <img src="https://p.calameoassets.com/220802135746-99d43c3366604dc65b260e077fc3580b/p2.svgz
" alt="">
 </div>`;
 cont.insertAdjacentHTML("beforeend",str);
}

createBlock(link);
