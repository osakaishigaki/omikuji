'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click',()=>{
    const results = ['GOOD','SOSO','BAD','very bad'];
    // const n = Math.floor(Math.random()*results.length);
    // btn.textContent= results[n];
    btn.textContent= results[Math.floor(Math.random()*results.length)];

    // switch(n){
    //   case 0:
    //     btn.textContent ='good'
    //     break;
        
    //   case 1:
    //     btn.textContent ='ok'
    //     break;
    //   case 2:
    //     btn.textContent ='bad'
    //     break;
    // }
  });
}