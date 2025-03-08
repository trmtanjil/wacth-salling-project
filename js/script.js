const ringButton =document.querySelectorAll('.ring-button');
let productImegbase = "../images/";

for(let i=0; i<ringButton.length; i++){
  const ringbtn = ringButton[i];
  ringbtn.addEventListener('click', function(event){
    
    const colorimg = event.target.id.replace('-color', '');
    

    for(let j=0; j<ringButton.length;j++){
      ringButton[j].classList.remove('border-purple-600');
      ringButton[j].classList.add('border-gray-300');
    }

    event.target.classList.add('border-purple-600');
    event.target.classList.remove('border-gray-300');


    // imege section
    const productImg=  document.getElementById('product-image');
    // productImg.src = "../images/teal.png";
    productImg.src= productImegbase + colorimg + ".png";

    
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


// add to card sectio 
let sum = 0;
let cartItem = [];
document.getElementById('add-to-cart').addEventListener('click',function(){
  // add value 
  const quantitys = parseInt(document.getElementById('quantity').innerText)
  if(quantitys>0){
    document.getElementById('checkout-container').classList.remove('hidden')
    sum = sum + quantitys;
    document.getElementById('cart-count').innerText = sum;
    
    const selectedColorButton = document.querySelector("button.border-purple-600.w-6");
    const selectColor = selectedColorButton.id.split('-')[0];

    const selectedSizeButtton = document.querySelector("button.border-green-500");
    const selecSize = selectedSizeButtton.innerText.split(' ')[0];
    
    const selectedPrize = selectedSizeButtton.innerText
    .split(' ')[1]
    .split('$')[1];

    // const productImg=  document.getElementById('product-image');
    cartItem.push({
      Image: selectColor + '.png',
      title: 'Classy Modern Smart Watch',
      color: selectColor,
      size: selecSize,
      quantity: quantitys,
      price: quantitys*parseInt(selectedPrize),

    })
    console.log(cartItem);
    

    // const selectSize = selectedColorButton.id.split('-')[0];
  }
  else{
    alert("enter quantity")
  }
})


// checout section 

document.getElementById('checkout-btn').addEventListener('click', function(){
  const cardModel  = document.getElementById('cart-modal');
  
  const cardContainer = document.getElementById('cart-items');
  for(let i = 0; i<cartItem.length; i++){
    const item = cartItem[i];
    const row = document.createElement('tr');
    row.classList.add('border-b')
      
    row.innerHTML=`
    <td class=" " >
    <div class="flex items-center space-x-2">
    <img class="h-12 py-1 rounded-md" src="${productImegbase}${item.Image}" alt="">
    <span class="font-semibold">${item.title}</span>
    </div>
    
    </td>
    <td class="py-2 px-4 ">${item.color}</td>
    <td class="py-2 px-4 ">${item.size}</td>
    <td class="py-2 px-8 ">${item.quantity}</td>
    <td class="py-2 px-4 ">${item.price}</td>
    `;
      
      cardModel.classList.remove('hidden');
      cardContainer.appendChild(row)
  }
 
});