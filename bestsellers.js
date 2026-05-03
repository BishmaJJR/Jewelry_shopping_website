const avail=document.getElementById('list');
const buttonUnderline=document.getElementsByClassName('button-underline')[0]
const availButton=document.getElementsByClassName('avail-button1')[0]
const availabilityBox=document.getElementsByClassName('availability-box')[0]
const checkBoxes=avail.querySelectorAll('input');//even if input tag inside label can select all input tag
const countSpan =availabilityBox.querySelector('span');//countSpan here is the DOM ELEMENT

var line = document.createElement("hr");


var divElement=document.createElement("div");
divElement.style.border="2px solid #705c3d";
divElement.style.width="400px";
divElement.style.height="175px";
divElement.style.marginTop="20px";
divElement.style.backgroundColor="white";


let count=0;
checkBoxes.forEach((checkbox)=>{/*querySelectorAll() returns multiple elements (NodeList)Not a single checkbox.So we must attach event listener to each checkbox individually. */
     checkbox.addEventListener('click',function(){
      if(this.checked){
        count++;
        
      }
      else{
        count --;
      }
      countSpan.innerHTML="";
       countSpan.innerText=count +" selected";

     })
    
})

 
  line.style.backgroundColor=" #705c3d";
  line.style.width = "80px";   //line.style.border = "none";   line.style.borderTop = "4px solid #705c3d";  line.style.height = "3px";
  
let isMenuOpen =false;
function showMenu(){
if(!buttonUnderline.contains(divElement)){
buttonUnderline.appendChild(divElement);
divElement.appendChild(availabilityBox);
availabilityBox.style.display="block";
 isMenuOpen =true;
 if(buttonUnderline.contains(line)){
        buttonUnderline.removeChild(line);
    }
}
 else{
 buttonUnderline.removeChild(divElement);
 divElement.removeChild(availabilityBox);
 availabilityBox.style.display="none";
 isMenuOpen =false; //here divelement is removed so isMenuOpen is closed(false)
 }
 }

function func1(){
if(!isMenuOpen&&!buttonUnderline.contains(line)){ // so !isMenuOpen is true

 buttonUnderline.appendChild(line);

}
  
}

function func2(){
if( buttonUnderline.contains(line)){
     buttonUnderline.removeChild(line);
}
}

function func3(){
  if(!isMenuOpen&& !buttonUnderline.contains(line)){
    buttonUnderline.appendChild(line);
}
}

function func4(){
  if( buttonUnderline.contains(line)){
     buttonUnderline.removeChild(line);
}
}

/*In stock to be displayed when selected in the checkbox */
const instock =document.getElementsByClassName("instock")[0]
const bestsellerImages =document.getElementsByClassName("bestseller-images")[0]
const soldoutdivss=document.getElementsByClassName("soldoutdivss")[0]
const addtocartoutofstockbuttons=document.getElementsByClassName("addtocart-outofstock-buttons")[0]
const addtocartinstockbuttons=document.getElementsByClassName("addtocart-instock-buttons")[0]
// const addtocart1outofstock=document.getElementsByClassName("addtocart1-outofstock")[0]
// const addtocart2outofstock=document.getElementsByClassName("addtocart2-outofstock")[0]
// const addtocart1instock=document.getElementsByClassName("addtocart1-instock")[0]
// const addtocart2instock=document.getElementsByClassName("addtocart2-instock")[0]
// const addtocart3instock=document.getElementsByClassName("addtocart3-instock")[0]
// const addtocart4instock=document.getElementsByClassName("addtocart4-instock")[0]
// const soldoutdiv=document.getElementsByClassName("soldoutdiv")[0]
// const soldoutdiv1=document.getElementsByClassName("soldoutdiv1")[0]
instock.addEventListener('click',()=>{

  if(instock.checked==true && outofstock.checked==true){
         bestsellerImagesOutofstock.style.display="flex"
        bestsellerImages.style.display="flex"
         soldoutdivss.style.display="flex"
  addtocartoutofstockbuttons.style.display="flex"
  addtocartinstockbuttons.style.display="flex"

  soldoutdivss.style.top="-2px"
  soldoutdivss.style.position="absolute"
//         addtocart1outofstock.style.display="flex"
//   addtocart2outofstock.style.display="flex"
//   soldoutdiv.style.display="flex"
//   soldoutdiv1.style.display="flex"
//   soldoutdiv.style.paddingLeft='10px'
//     soldoutdiv1.style.paddingLeft='10px'
//     addtocart2outofstock.style.marginLeft="350px"
//     addtocart2outofstock.style.marginTop="-35px"

//      soldoutdiv.style.position = "absolute";
// soldoutdiv.style.top = "890px";
// soldoutdiv.style.left = "245px";

// soldoutdiv1.style.position = "absolute";
// soldoutdiv1.style.top = "890px";
// soldoutdiv1.style.left = "540px";
  

       
}
  else if(instock.checked){
  bestsellerImages.style.display="flex"
  bestsellerImagesOutofstock.style.display="none"
  soldoutdivss.style.display="none"
  addtocartoutofstockbuttons.style.display="none"
  // addtocart1outofstock.style.display="none"
  // addtocart2outofstock.style.display="none"
  // soldoutdiv.style.display="none"
  // soldoutdiv1.style.display="none"
   }

   else if(instock.checked==false&&outofstock.checked==true){
    bestsellerImagesOutofstock.style.display="flex"
    bestsellerImages.style.display="none"

    soldoutdivss.style.display="flex"
  addtocartoutofstockbuttons.style.display="flex"

  addtocartinstockbuttons.style.display="none"
  
  soldoutdivss.style.top="-440px"
  soldoutdivss.style.position="absolute"
   }

   else if(instock.checked==false&&outofstock.checked==false){
    bestsellerImagesOutofstock.style.display="flex"
        bestsellerImages.style.display="flex"
         soldoutdivss.style.display="flex"
  addtocartoutofstockbuttons.style.display="flex"
  addtocartinstockbuttons.style.display="flex"

  soldoutdivss.style.top="-2px"
  soldoutdivss.style.position="absolute"
   }
  
  else{
    bestsellerImages.style.display="flex"
    bestsellerImagesOutofstock.style.display="flex"
    addtocartinstockbuttons.style.display="none"

    soldoutdivss.style.top="-440px"
  soldoutdivss.style.position="absolute"
//     addtocart1instock.style.display="none"
//   addtocart2instock.style.display="none"
//   addtocart3instock.style.display="none"
//   addtocart4instock.style.display="none"
//   soldoutdiv.style.display="flex"
//   soldoutdiv1.style.display="flex"
//   addtocart1outofstock.style.display="flex"
//   addtocart2outofstock.style.display="flex"

//   soldoutdiv.style.paddingLeft='10px'
//     soldoutdiv1.style.paddingLeft='10px'
//   addtocart2outofstock.style.marginLeft="350px"
//   addtocart2outofstock.style.marginTop="-35px"
//   soldoutdiv.style.position = "absolute";
// soldoutdiv.style.top = "470px";
// soldoutdiv.style.left = "245px";
   
// soldoutdiv1.style.position = "absolute";
// soldoutdiv1.style.top = "470px";
// soldoutdiv1.style.left = "540px";

  }

})

/*Out of stock to be displayed when unselected in the checkbox */
const outofstock =document.getElementsByClassName("outofstock")[0]
const bestsellerImagesOutofstock = document.getElementsByClassName("bestseller-images-outofstock")[0]

outofstock.addEventListener('click',()=>{

   if(instock.checked==true && outofstock.checked==true){
         bestsellerImagesOutofstock.style.display="flex"
        bestsellerImages.style.display="flex"
         soldoutdivss.style.display="flex"
  addtocartoutofstockbuttons.style.display="flex"
  addtocartinstockbuttons.style.display="flex"

  soldoutdivss.style.top="-2px"
  soldoutdivss.style.position="absolute"
//          addtocart1outofstock.style.display="flex"
//   addtocart2outofstock.style.display="flex"
//   soldoutdiv.style.display="flex"
//   soldoutdiv1.style.display="flex"
//    soldoutdiv.style.paddingLeft='10px'
//     soldoutdiv1.style.paddingLeft='10px'
//   addtocart2outofstock.style.marginLeft="350px"
//   addtocart2outofstock.style.marginTop="-35px"


//   soldoutdiv.style.position = "absolute";
// soldoutdiv.style.top = "890px";
// soldoutdiv.style.left = "245px";

// soldoutdiv1.style.position = "absolute";
// soldoutdiv1.style.top = "890px";
// soldoutdiv1.style.left = "540px";
   
  
       
}


  else if(outofstock.checked){
 bestsellerImagesOutofstock.style.display="flex"
 bestsellerImages.style.display="none"
//  addtocart1instock.style.display="none"
//   addtocart2instock.style.display="none"
//   addtocart3instock.style.display="none"
//   addtocart4instock.style.display="none"
//   soldoutdiv.style.display="flex"
//   soldoutdiv1.style.display="flex"
//   addtocart1outofstock.style.display="flex"
//   addtocart2outofstock.style.display="flex"

//   soldoutdiv.style.paddingLeft='10px'
//     soldoutdiv1.style.paddingLeft='10px'

//   addtocart2outofstock.style.marginLeft="350px"
//   addtocart2outofstock.style.marginTop="-35px"
  
// soldoutdiv.style.position = "absolute";
// soldoutdiv.style.top = "470px";
// soldoutdiv.style.left = "245px";

// soldoutdiv1.style.position = "absolute";
// soldoutdiv1.style.top = "470px";
// soldoutdiv1.style.left = "540px";
  
  }

  else if(outofstock.checked==false&&instock.checked==true){
    bestsellerImagesOutofstock.style.display="none"
    bestsellerImages.style.display="flex"

    soldoutdivss.style.display="none"
  addtocartoutofstockbuttons.style.display="none"

  addtocartinstockbuttons.style.display="flex"
  
  // soldoutdivss.style.top="-440px"
  // soldoutdivss.style.position="absolute"
   }

   
   else if(outofstock.checked==false&&instock.checked==false){
    bestsellerImagesOutofstock.style.display="flex"
        bestsellerImages.style.display="flex"
         soldoutdivss.style.display="flex"
  addtocartoutofstockbuttons.style.display="flex"
  addtocartinstockbuttons.style.display="flex"

  soldoutdivss.style.top="-2px"
  soldoutdivss.style.position="absolute"
   }  
  else{
    bestsellerImages.style.display="flex"
    bestsellerImagesOutofstock.style.display="flex"
  //    addtocart1outofstock.style.display="none"
  // addtocart2outofstock.style.display="none"
  // soldoutdiv.style.display="none"
  // soldoutdiv1.style.display="none"

  }

})

//Porduct successfully added and to make changes in shoppingbag.html
const alertproductadded =document.getElementsByClassName('alert-productadded')[0]
const shoppingbagdata =document.getElementsByClassName('shopping-bag-data')[0]
const yourcart=document.getElementsByClassName('span1')[0]

let cart=[];
let total=0;
let itemscount=0;
let hasitems=false;
let arr=[];
let sameitemcount=1;
let totals=document.getElementsByClassName('total')[0];
function productAdded(name,price,image){
  alertproductadded.style.display="flex"
  hasitems=true;
  // if(!arr.includes(name)){
    
  //   itemscount+=1;
  //   updatecart(name,price,image);
  // }

  const existingItem = arr.find(item => item.name === name);

   if(existingItem){
    // ✅ increase quantity
    existingItem.quantity += 1;

    // ✅ update UI count for that item
    const qtySpan = document.getElementById(`qty-${name}`);
    qtySpan.innerText = existingItem.quantity;

  } else {
    // ✅ add new item
    arr.push({name,quantity: 1});
    itemscount += 1;

    updatecart(name, price, image);
  }
 
  
  yourcart.innerHTML=`Your Cart (${itemscount} items)`;
  total=total+price;
  totals.innerHTML=`Estimated Total Rs.${total}`
// updatecart(name,price,image);



setTimeout(() => {
    alertproductadded.style.display = "none";
  }, 1000);              //After 4 seconds the alert message with product successfully added disappears,settimeout function delays with 4 seconds at that the alert appears and after 4 sec disappears
}

/*update cart*/
const listofitems=document.getElementById('listofaddeditems')
function updatecart(name,price,image){
let cartbox =document.createElement('li');
// cartbox.id=`qty-${name}`;
cartbox.style.width='385px'
cartbox.style.height='100px'
cartbox.style.backgroundColor='white'
cartbox.style.borderRadius='10px'
cartbox.style.marginTop='20px'
cartbox.style.paddingLeft="10px"
cartbox.style.paddingTop="10px"
let nameandprice =document.createElement('div')
nameandprice.innerHTML=`${name}(Rs.${price}.00)`
// nameandprice.style.marginLeft='30px'
cartbox.appendChild(nameandprice)

let addcount=document.createElement('div');
addcount.style.width='80px'
addcount.style.height='30px'
addcount.style.backgroundColor='lightgrey'
addcount.style.borderRadius='10px'
let buttonminus=document.createElement('button')
let buttonplus=document.createElement('button')
let number=document.createElement('span')
buttonminus.innerHTML+=`-`
number.innerHTML+=`1`
buttonplus.innerHTML+=`+`
addcount.appendChild(buttonminus)
addcount.appendChild(number)
addcount.appendChild(buttonplus)
addcount.style.marginLeft='300px'
addcount.style.marginTop='-83px'
buttonminus.style.color='#705c3d'
buttonminus.style.marginLeft='15px'
buttonplus.style.marginLeft='4px'
number.style.marginLeft='4px'
buttonminus.style.marginTop='3px'
buttonplus.style.marginTop='3px'
number.style.marginTop='3px'
buttonplus.style.color='#705c3d'
let img = document.createElement('img');
img.src = image;
img.style.width = '60px';
img.style.height = '60px';
 img.style.marginLeft='2px'
img.style.marginTop='5px'
cartbox.appendChild(img)
cartbox.appendChild(addcount);
listofitems.appendChild(cartbox);
// ✅ IMPORTANT: unique id
number.id = `qty-${name}`;


//buttonminus and buttonplus working
buttonminus.addEventListener('click',()=>{
  if(number.innerHTML==1){
listofitems.removeChild(cartbox)
itemscount-=1;
total=total-price;
totals.innerHTML=`Estimated Total Rs.${total}`
  yourcart.innerHTML=`Your Cart (${itemscount} items)`;
}
  if(number.innerHTML>=1){
  number.innerHTML-=1;
  

  }

  
 
})


buttonplus.addEventListener('click', () => {
  let current = parseInt(number.innerText);
  current++;
  number.innerText = current;
  total=total+price;
totals.innerHTML=`Estimated Total Rs.${total}`
});
  
  
   }

   


/*remaining 2 out of stock product added*/
const alertproductadded1 =document.getElementsByClassName('alert-productadded1')[0]

function productAdded1(){
  alertproductadded1.style.display="flex"
  
  setTimeout(() => {
    alertproductadded1.style.display = "none";
  }, 1000);   
}

/*popoutshopping bag*/
let isshoppingbagopen = false;
const shoppingbagitems=document.getElementsByClassName('shopping-bag-items')[0]
// const yourcart=document.getElementsByClassName('span1')[0]
// let itemscount=0;
function  popoutShoppingbag(){
  if(hasitems==true){
shoppingbagdata.style.display='none'
// itemscount+=1;
shoppingbagitems.style.display='flex'
// yourcart.innerHTML=`Your Cart (${itemscount} items)`;
  }
  else if(isshoppingbagopen==false){
    shoppingbagdata.style.display='flex'
    isshoppingbagopen = true;
  }

  else{
    shoppingbagdata.style.display="none"
  }
}

/*close shopping bag*/
function closeShoppingbag(){
  shoppingbagdata.style.display="none"
  shoppingbagitems.style.display="none"
}
 


