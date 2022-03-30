const incrementBtn = document.querySelectorAll(".plus");

const decrementBtn = document.querySelectorAll(".minus");
var initialCount = 0;
// var x = document.getElementById("addition")
// console.log(x.parentElement.nodeName)
let x = document.getElementsByClassName("plus");


var totalQuant = document.getElementById("total")
         const  price = document.querySelectorAll('.price')
     
// for(var i=0;i<incrementBtn.length; i++){
//     incrementBtn[i].addEventListener("click",incremented() )
// }
  const arr = 120;
  const incremented =  (incdec)=>{
    const countDisplay = document.getElementById(incdec);
    
    incdec.value = 0;   
    
        if(countDisplay.value >= 5){
            initialCount = 0;
            alert("over limit");   
        }
        else{
        countDisplay.value = initialCount;
        initialCount++;
        // price.forEach(element =>{
        //     totalQuant.value = parseInt(element.innerText)*initialCount;
        //  })
         totalQuant.value = arr*initialCount;
        }
        
    }
    
     
      
// var text = document.getElementsByClassName('text')
// price.forEach(element =>{

     
// totalQuantity.value = parseInt(element.innerText)*initialCount;
//         console.log(element.innerText)
     
     const decremented = (incdec) => {
        const countDisplay = document.getElementById(incdec);
        // incdec.value = 0;

         
         if(countDisplay.value <=0){
             initialCount = 0;
             alert("order item does not a negative value")
         } else{
            initialCount--;
            countDisplay.value = initialCount;
            
            // price.forEach(element =>{
            //     totalQuant.value = parseInt(element.innerText)*initialCount;
                
            //  })
             totalQuant.value = arr*initialCount;
            
         }
}
// const sayhi = () =>{
//     alert("hii")
// }
 var dots =  document.getElementById("dots");
 const buttons = document.querySelectorAll(".nav-btns");
const hamberger = document.getElementById("humberger")
//  buttons.forEach(element =>{
//      console.log(element.innerText)
//  })
 
 dots.addEventListener("click",()=>{
     
//    dots.style.position = "fixed";
//    dots.style.marginLeft = "0rem"
    buttons.forEach(element =>{
        if(element.style.display === "block"){
         element.style.display = "none";
        
        }
        else{
            element.style.display = "block";
            // element.style.marginTop = "2rem"
           element.style.width = "25rem";
        }
     })
//  if(hamberger.style.display === "flex"){
//     hamberger.style.display = "none";
//  }
//  else{
//     hamberger.style.display = "flex"
//  }
    
 });






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
// const dot = document.



// console.log(incrementBtn);
// const initialStage = 0;

// let incrementBtn1 = () =>{
//     alert("snkit");
//     }

// incrementBtn.addEventListener("click",incrementBtn1);

    