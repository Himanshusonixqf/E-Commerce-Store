//  let cartitem =document.querySelectorAll("cartitem");
let cart=document.querySelector(".cart");



 function displaycart(){
    const itemsfromcart=localStorage.getItem(parsecart);
    console.log({itemsfromcart});
    // itemsfromcart.forEach(item=>{
    //     const divforcart=document.createElement("div");
    //     divforcart.classList.add("crtcontain");

    //     divforcart.innerHTML=`
    //     <div class="crtcontain">
    //     <img src=${item.src} alt="" height="410px">
    //     <p>${item.id}</p>
    //     <p>${item.title}</p>
    //     <p>${item.discound}</p>
    // </div>
    //     `
    //     document.querySelectorAll("cartitem").appendChild(divforcart);
    // })
 }
//  displaycart();