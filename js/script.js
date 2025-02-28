const ringButton =document.querySelectorAll('.ring-button');

for(let i=0; i<ringButton.length; i++){
  const ringbtn = ringButton[i];
  ringbtn.addEventListener('click', function(event){
    
    const colorimg = event.target.id.replace('-color', '');
    console.log(colorimg);
    

    for(let j=0; j<ringButton.length;j++){
      ringButton[j].classList.remove('border-purple-600');
      ringButton[j].classList.add('border-gray-300');
    }

    event.target.classList.add('border-purple-600');
    event.target.classList.remove('border-gray-300');


    // imege section
    const productImg=  document.getElementById('product-image');
    // productImg.src = "../images/teal.png";
    productImg.src= "../images/" + colorimg + ".png";

    
  })
}

// size box section 


function selectWristSize(sise){
const sizes = ['S','M' ,'L','XL'];

for(let i=0; i<sizes.length; i++){
  let size =sizes[i];
  let button = document.getElementById('size-'  + size);
  if(sise ===size){
    button.classList.add('border-green-500');
  }
  else{
    button.classList.remove('border-green-500');
  }
}
}

//  product increment decreement 

const quantitybutton =document.querySelectorAll('.quantity-button');

for(let btn  of quantitybutton){
btn.addEventListener('click',function(event){
  const ammount = event.target.innerText ==="+" ? 1: -1;

  const quantitys = document.getElementById('quantity');
  const currentQuantity = parseInt(quantitys.innerText);
  const newQuantity = Math.max(0, currentQuantity + ammount)
  quantitys.innerText= newQuantity;
})  
}