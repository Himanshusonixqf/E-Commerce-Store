let cards = document.querySelectorAll(".card");
let carts = document.querySelectorAll(".addcart");
let searchInput=document.querySelector(".searchInput");
let p=document.querySelectorAll("p");
let addcart=document.querySelectorAll("addcart");
let addcartbtn =document.querySelectorAll(".addcartbtn");
let cartcontain= document.getElementById("cartcontain");
let hamburger = document.querySelector(".hamburger");
let humburgericon=document.querySelector(".humburgericon");

hamburger.addEventListener("click",function(){
    
    const extradiv=document.createElement("div");
    extradiv.classList.add("extradiv");

    extradiv.innerHTML=`
    <div class="extradiv">
        <div class="cart">
            <a href="cart.html">Carts</a>
                <ul id="list-humburger" onclick=hide()>
                        
                <li> <a href="/sign-up.html">signup</a></li>
                <li> <a href="/login.html">login</a></li>
                <li><a href="#men">MEN</a></li>
                <li><a href="#women">WOMEN</a></li>
                <li><a href="#slider">TRENDS</a></li>
                <li><a href="#blog">BLOGS</a></li>
                    </ul>
        
                
    </div>
    </div>`

    humburgericon.appendChild(extradiv);

    
})

function hide(){
    let extradiv=document.querySelector(".extradiv");
  extradiv.style.display="none";

}
  
// const listitem=document.getElementsByTagName("li");
 
// listitem.forEach(currlist=>{
//     currlist.addEventListener("click",()=>{
//     document.querySelector(".extradiv").style.display="none";
//     })
// })


addcartbtn.forEach(button=>{
button.addEventListener("click",()=>{
    alert("added");
    const id=button.getAttribute("data-id");
    const title=button.getAttribute("data-title");
    const discound=button.getAttribute("data-discound");
    const img=button.getAttribute("data-img");

    const cartitem={id ,title ,img ,discound}
    const parsecart=JSON.parse(localStorage.getItem("parsecart"))||[];
    console.log(cartitem);
    parsecart.push(cartitem);

    localStorage.setItem("parsecart",JSON.stringify(parsecart))
   
})
})



const carditem=document.querySelector(".cartitem");
const parsecart=document.querySelector("parsecart");
    
 function displaycart(){
    const itemsfromcart=JSON.parse(localStorage.getItem(parsecart));
    console.log(itemsfromcart);
    itemsfromcart.forEach(item=>{
        const divforcart=document.createElement("div");
        divforcart.classList.add("crtcontain");

        divforcart.innerHTML=`
        <div class="crtcontain">
        <img src=${item.src} alt="" height="410px">
        <p>${item.id}</p>
        <p>${item.title}</p>
        <p>${item.discound}</p>
    </div>
        `
        document.querySelectorAll("cartitem").appendChild(divforcart);
    })
 }

// addcartbtn.forEach(function(currbtn){
//     currbtn.addEventListener("click",function(){
//         document.getElementById("cartcontain").style.display="block";
      
// //   let newdiv=  document.createElement("div");
// //   newdiv.classList.add("innercartbtn");

//   cartcontain.innerHTML=
//   `  <div class="innercartbtn">
//   <a href="">Back</a>
//   <h2>YOUR CARTS</h2>
  
//   </div>
//   `
//       document.getElementById("cartcontain").appendChild(carditem);
//     })


// })

// searchInput.addEventListener("keyup",function(event){
//     const q=event.target.value.toLowerCase();
  
//     const men=document.querySelector(".men");
//     if(q==men){
//         document.querySelector( ".usefilter").style.display="none";
//         document.querySelector("body").appendChild(men);
//     }else{
//         const women=document.querySelector(".women");
//         document.querySelector( ".usefilter").style.display="none";
//         document.querySelector("body").appendChild(women);
//     }
// })

searchInput.addEventListener("keyup",function(event){
    let query=event.target.value;
console.log(query);
document.querySelector( ".container").style.display="none";
 cards.forEach(crdelement => {
    
     
     if(crdelement.textContent.toLowerCase().includes(query)){
        document.querySelector("body").appendChild(crdelement);

     }else{
        console.log("not available");
        
     }
    
 });
})

//
// let div= document.createElement("div");
// div.classList.add("product-detail");

// div.innerHTML=`
// <img id="inner" src=${curCard.firstElementChild.src} alt="">

// <div className="product-detail">
// <p>  ${curCard}</p>
// <p> Kat Farmer is a fashion blogger, wardrobe consultant, personal stylist</p>

// <button class ="addcart" onclick="buypage()">Buy Now</button>
//  <button class="addcartbtn" >Add To Cart</button>
//             <a href="">Back</a>
// </div>
// `





    // })
    

    // searchInput.addEventListener("keyup",function(event){
    //     let query=event.target.value;
    // console.log(event);
    // document.querySelector( ".container").style.display="none";
    // const q=event.target.value.toLowerCase();
    // document.querySelector( ".usefilter").style.display="none";
    
    // console.log(q);

    // let title=document.querySelectorAll(".title");
    // q.toLowerCase().includes(title)
  
 
    //  title.forEach((event)=>{
    //     let text=event.textContent
    //     if(text.toLowerCase().includes(q.toLowerCase())){
    //         let div= document.createElement("div");
    //         div.classList.add("product-fliter");
            
    //         div.innerHTML=`
            
    //         <div className="product-filter">
    //         <p>  ${q}</p>
            
          
    //         </div>
    //         `

    //         document.querySelector("body").appendChild(div);
    //     }else{
    //         event.style.display="none"
    //     }
    //     if(event=q){
    //    if( q==event  ){

    // const id=button.getAttribute("data-id");
    // const title=button.getAttribute("data-title");
    // const discound=button.getAttribute("data-discound");
    // const img=button.getAttribute("data-img");

    // const cartitem={id ,title ,img ,discound}   
            
            
           

        // }else{console.log(false);}
//      })
    

// })
 

  

cards.forEach(function(curCard){
    
    curCard.addEventListener("click", function(){
        console.log(curCard);

document.querySelector( ".container").style.display="none";
let div= document.createElement("div");
div.classList.add("product-detail");

div.innerHTML=`
<img id="inner" src=${curCard.firstElementChild.src} alt="">

<div className="product-detail">
<p>  ${curCard}</p>
<p> Kat Farmer is a fashion blogger, wardrobe consultant, personal stylist</p>

<button class ="addcart" onclick="buypage()">Buy Now</button>
 <button class="addcartbtn" >Add To Cart</button>
            <a href="">Back</a>
</div>
`


document.querySelector("body").appendChild(div);



    })
    

    
});


function buypage(){
   let div =document.createElement("div");
   div.classList.add("buypage");
   
   div.innerHTML=`
   <div class="buypage">
   <h1>Shipping Card</h1>
   <div class="inputs">
       <input type="text" placeholder="firstname">
       <input type="text"  placeholder ="lastname">
       <input type="text" placeholder="address">
       <label for="email" >Email</label>
       <input type="email" name="email" id="">
  <input type="number" name="contact" id="">


       <select name="pay" id="">
           <option value="gpay">Gpay</option>
           <option value="ppay">Phonepay</option>
           <option value="paytym">Patym</option>
       </select>
       <button>submit</button> 
       <a href="">Back</a>
   </div>
  
</div>
`
document.querySelector("body").appendChild(div);
}




// function addtocart(){
//     document.getElementById("cartcontain").style.display="block";
    
//  console.log(cartcontain);

//  cartcontain.innerHTML=` 
//  <img id="" src="" alt="">
//  <p> hello  </p>
//  <div> {}
//  <div>${cartitem.firstElementChild}</div>
//  <a href="">Back</a>`
  

//     let cart =document.querySelector("cart");
//      let div= document.createElement("div");
//  div.classList.add("cartsadded");

//     cartcontainer.innerHTML=`
//     <div class ="cartsadded>
//     <h1 id="demo" >Trend Wear</h1>
//     <p> Kat Farmer is a fashion bloggert</p>
//     <p> Kat Farmer is a fashion blogger,</p>
//     <p> Kat Farmer is a fashion blogger, /p>
//     <a href="">Back</a>
//     </div>
//     `
//     document.querySelector("cartcontainer ").appendChild(div);

    // function addProduct(){
    //     let products = [];
    //     if(localStorage.getItem('products')){
    //         products = JSON.parse(localStorage.getItem('products'));
    //     }
    //     products.push({cards});
    //     localStorage.setItem('products', JSON.stringify(products));
    // // }

// cartite


// carts.forEach(function(curCards){
//     curCards.addEventListener("click", function(){
//         console.log(curCards);

// document.querySelector( ".container").style.display="none";
// let div= document.createElement("div");
// div.classList.add("cartsdetail");

// div.innerHTML=`
// <img src=${curCard.firstElementChild.src} alt="">

// <div className="cartsdetail">
// <p> Kat Farmer is a fashion blogger, wardrobe consultant, personal stylist</p>
// <p> Kat Farmer is a fashion blogger, wardrobe consultant, personal stylist</p>
// <p> Kat Farmer is a fashion blogger, wardrobe consultant, personal stylist</p>

// <h1 id="demo" >Trend Wear</h1>
// <button>Buy Now</button>
//             <button class ="add-cart" onClick="getElementById('demo').innerHTML = Date()">Add To Cart</button>
//             <a href="">Back</a>
// </div>
// `

// document.querySelector("body").appendChild(div);
//     })})



// const addcart=document.querySelector(".add-cart");
// addcart.forEach(function(addcards){
//     addcards.addEventListener("click" , function(add){
//     console.log(logins);
//      document.querySelector(".container").style.display="none";
//      document.querySelector(".product-detail").style.display="none";
//     const div=document.createElement("div");
//     div.classList.add("cart");

//     div.innerHTML=`
//     <div className="product-detail">
// <p> Kat Farmer is a fashion blogger, wardrobe consultant, personal stylist</p>
// <p> Kat Farmer is a fashion blogger, wardrobe consultant, personal stylist</p>
// <p> Kat Farmer is a fashion blogger, wardrobe consultant, personal stylist</p>

// <h1>Trend Wear</h1>

// </div>
// `

// document.querySelector("body").appendChild(div)

// })
// })
