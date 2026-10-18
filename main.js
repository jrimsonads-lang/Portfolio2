(function(){
var imgs=[].slice.call(document.querySelectorAll('.shot img')),lb=document.getElementById('lb'),li=document.getElementById('li'),ct=document.getElementById('ct'),i=0;
function show(n){i=(n+imgs.length)%imgs.length;li.src=imgs[i].src;li.alt=imgs[i].alt;ct.textContent=imgs[i].alt}
imgs.forEach(function(m,n){m.parentNode.addEventListener('click',function(){show(n);lb.showModal()})});
document.getElementById('x').onclick=function(){lb.close()};
document.getElementById('nx').onclick=function(){show(i+1)};
document.getElementById('pv').onclick=function(){show(i-1)};
lb.addEventListener('click',function(e){if(e.target===lb||e.target.className==='box')lb.close()});
document.addEventListener('keydown',function(e){if(!lb.open)return;if(e.key==='ArrowLeft')show(i+1);if(e.key==='ArrowRight')show(i-1)});
})();
