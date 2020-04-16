'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click',()=>{
    const n = Math.floor(Math.random()*3);
    btn.textContent= n;

    switch(n){
      case 0:
        btn.textContent ='good'
        break;
        
      case 1:
        btn.textContent ='ok'
        break;
      case 2:
        btn.textContent ='bad'
        break;

    }
  });
}