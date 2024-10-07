let total = 0;

function handelClickBtn(card) {
    
    
   
  const title = card.querySelector('.card-title').textContent;
  const selectedItems = document.getElementById('selected-items');
  
  const selectedItem = title;
  console.log(selectedItem);
  const p=document.createElement('p');
  const count=selectedItems.childElementCount+1;
  p.innerText=count + '. '+selectedItem;
  p.style.fontWeight='600';
  selectedItems.appendChild(p);

// const count = selectedItems.childElementCount;
// selectedItems = ${count + 1};

 const price = card.parentNode.querySelector('.money-add').innerText.split(' ')[0];
 total = parseInt(total) + parseInt(price);
//  console.log(total);
 document.getElementById("total").innerText = total.toFixed(2) + " Tk";
 document.getElementById('total-money').innerText=document.getElementById('total').innerText;

 disableButton();
 discountButton();
 document.getElementById('discount-value').innerText='00.00 TK';

}


function disableButton() {
  const btnDIS = document.getElementById('purchase-items')
  if (total > 0) {
     btnDIS.removeAttribute('disabled')
  }
  else {
     btnDIS.setAttribute('disabled', 'true')
  }

}

function discountButton() {
  const applyCode = document.getElementById('coupon')
  if (total > 1000) {
     applyCode.removeAttribute('disabled')
  }
  else {
     applyCode.setAttribute('disabled', 'true')
  }
} 

let discountValue = 0; 
document.getElementById('coupon').addEventListener('click', function() {
  const couponInput = document.getElementById('coupon-useing');
  const discountItem = couponInput.value;
  couponInput.value='';

  

  if (discountItem === 'SELL500') { 
      discountValue = total * 0.50; 
      document.getElementById('discount-value').innerText = discountValue.toFixed(2) + " Tk";

      totalAll = total - discountValue;
      document.getElementById('total-money').innerText = totalAll.toFixed(2) + " Tk";
  } else {
      alert('Please provide a valid coupon code');
  }
});

const gohome=document.getElementById('gohome');
gohome.addEventListener('click',function(){
 location.reload();

})