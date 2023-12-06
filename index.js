let cards = document.querySelectorAll(".card");

cards.forEach(function(curCard){
    curCard.addEventListener("click", function(){
        console.log(curCard);

document.querySelector( ".container").style.display="none";
let div= document.createElement("div");
div.classList.add("product-detail");

div.innerHTML=`
<img src=${curCard.firstElementChild.src} alt="">

<div className="product-detail">
<p> Kat Farmer is a fashion blogger, wardrobe consultant, personal stylist</p>
<p> Kat Farmer is a fashion blogger, wardrobe consultant, personal stylist</p>
<p> Kat Farmer is a fashion blogger, wardrobe consultant, personal stylist</p>

<h1>Trend Wear</h1>
<button>Buy Now</button>
            <button>Add To Cart</button>
            <a href="">Back</a>
</div>
`
document.querySelector("body").appendChild(div)

    })


});
