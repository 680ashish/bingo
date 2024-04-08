
// console.log(temp);

function counter(){
  
  let count=0;

  let h3counter= document.querySelectorAll('.details-cards h3');

  setInterval(() => {
    if(count<69){
      count++;
      h3counter.forEach(h3 => {
        h3.innerHTML = count;
      });
  }
  else{
      count=69;
  }
  }, 20);
}
counter();