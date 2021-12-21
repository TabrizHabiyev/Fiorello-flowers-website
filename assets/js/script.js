
/*Add to basket sciript */
let totalPrice = document.getElementById("totalprice");
let allBtn= document.querySelectorAll(".add-tocart-hover");
SetBasket()
allBtn.forEach(btn=>{
   btn.onclick = function(e){
     e.preventDefault()

   let id = btn.parentElement.parentElement.getAttribute("data-id")
   SetBasket()
   let localStorageArr =JSON.parse(localStorage.getItem("basket"));
   let existProduct =localStorageArr.find(x =>x.id ==id);
   if (existProduct===undefined) {
    localStorageArr.push({
        id:id,
        name:this.parentElement.firstElementChild.innerText,
        count:1,
        price:this.parentElement.lastElementChild.innerText,
        imSrc:this.parentElement.parentElement.firstElementChild.firstElementChild.getAttribute("src")
    }) 
   }else
   {
    existProduct.count+=1;
   }
   localStorage.setItem("basket", JSON.stringify(localStorageArr));
   GetBasketCount()
   totalPriceFunc();
   }
})


function totalPriceFunc()
{
    let localStorageArr = JSON.parse(localStorage.getItem("basket"));
    let total= 0;
    localStorageArr.forEach(x =>{
      let parse = x.price.replace('$','');
      parse = parseFloat(parse);
      total +=    parseFloat(x.count) * parse;
    });
    totalPrice.innerText="$"+total;
}

function GetBasketCount()
{
    let localStorageArr =JSON.parse(localStorage.getItem("basket"));
    document.getElementById("productCount").innerText=localStorageArr.length;
}
GetBasketCount()
function SetBasket()
{
    if (!localStorage.getItem("basket")) {
        localStorage.setItem("basket", JSON.stringify([]));
    }
}

let baskeT = document.getElementById("card-sub-menu");
function GetBasketCount() {
    let localStorageArr = JSON.parse(localStorage.getItem("basket"));
    document.getElementById("productCount").innerText = localStorageArr.length;
}
GetBasketCount()

let localStorageArr = JSON.parse(localStorage.getItem("basket"));
//Show oll product
localStorageArr.forEach(product => {
    let ul = document.createElement("ul");
    ul.setAttribute("id", `${product.id}`);
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let image = document.createElement("img"); 
    let div = document.createElement("div");
    div.classList.add("card-context");
    let h6 = document.createElement("h6");
    h6.classList.add("text-uppercase");
    let span1 = document.createElement("span");
    let span2 = document.createElement("span")
    let span3 = document.createElement("span")
    span1.classList.add("span-count");
    span1.classList.add("me-2");
    span2.classList.add("span-price");
    span3.classList.add("delete");
    span3.classList.add("text-danger");
    span3.setAttribute("onclick", `delete_product(${product.id})`);
    h6.innerText=product.name;
    span1.innerText=`${product.count}X`;
    let parse = product.price.replace('$','');
    parse = parseFloat(parse);
    span2.innerText=`${"$"+parseFloat(parse)}`;
    span3.innerText="x";
    image.setAttribute("src", product.imSrc);
    image.style.height = "50px";
    image.style.width = "65px";
    div.append(h6);
    div.append(span1);
    div.append(span2);
    li1.append(image);
    li2.append(div);
    li3.append(span3);
    ul.append(li1 , li2 ,li3);
    baskeT.append(ul);
});

//Delete product from basket 
function delete_product(id) {
    let localStorageBasket = JSON.parse(localStorage.getItem("basket"));
    let updatelocalStora =[];
    document.getElementById(id).outerHTML="";
    for (let i = 0; i < localStorageBasket.length; i++) {
     
       if (localStorageBasket[i].id !=id) {
        updatelocalStora.push(localStorageBasket[i])
       }
    }
    localStorage.clear();
    localStorage.setItem("basket", JSON.stringify(updatelocalStora));
}


