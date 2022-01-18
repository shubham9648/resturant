const incrementBtn = document.querySelectorAll(".plus");

const decrementBtn = document.querySelectorAll(".minus");
var initialCount = 0;





// for(var i=0;i<incrementBtn.length; i++){
//     incrementBtn[i].addEventListener("click",incremented() )
// }
  const incremented =  (incdec)=>{
    const countDisplay = document.getElementById(incdec);
    incdec.value = 0;   
    initialCount++;
        if(countDisplay.value >= 5){
            countDisplay.value = 5;
            alert("over limit")
        }
        else{
        countDisplay.value = initialCount;
        }
    }

     const decremented = (incdec) => {
        const countDisplay = document.getElementById(incdec);
         initialCount--;
         if(countDisplay.value <=0){
             countDisplay.value = 0;
             alert("order item does not a negative value")
         } else{
            countDisplay.value = initialCount;
         }
}
// var totalQuantity = document.getElementById('total-quantity');
// // console.log(totalQuantity.innerText)
//  var price = document.querySelectorAll(".price")
//  var initialPrice = 0;
//  price.forEach(element =>{
//      initialPrice = initialCount*element.value 
//     //  console.log(initialPrice)
//  })


//  var updatedPrice = parseFloat(totalQuantity.innerText.replace(` Grand Total Rs.`, ' '))
 
//  console.log(updatedPrice)




// console.log(incrementBtn);
// const initialStage = 0;

// let incrementBtn1 = () =>{
//     alert("snkit");
//     }

// incrementBtn.addEventListener("click",incrementBtn1);

    