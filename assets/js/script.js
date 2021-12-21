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
totalPriceFunc()

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

/*Basket Son */


/* Swiper script start */

/* swiper for shop list page */
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,

    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

/* swiper main for main page */
$(window).load(function() {
    let touchSlider=false;
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        autoplay: {
             delay: 4000,
             disableOnInteraction: false,
           },
      });
   });

/* Swiper script son */


/* Navbar Script start */

  $(document).ready(function () {
    $("#homeSub").click(function () {
      $(".home-sub-menu").toggle();
      $("#homeSub .fa-caret-right").toggle();
      $("#homeSub .fa-caret-down").toggle();
    });

    $("#pagesSub").click(function () {
      $(".pages-sub-menu").toggle();
      $("#pagesSub .fa-caret-right").toggle();
      $("#pagesSub .fa-caret-down").toggle();
    });
  });

  /*navbar basket button open and close sciript */
  $("#menu .shopping-bag-show-btn").click(function () {
    $(".card-sub-menu").toggle();
  });
  /*navbar basket button open and close sciript  son*/


  $("#shopSub").click(function () {
    $("#menu .shop-sub-menu").toggle()
  });

  $("#menu .shop-sub-menu h6").click(function () {
    $(this).nextAll().toggle().animate(3)
    $(this).children().toggle();
  });

  /*navbar search button open and close sciript */
  $(".primary-menu-li .search .searchbtn").click(function () {
    $(".search-sub-menu").toggle();
  });
  /*navbar search button open and close sciript */

  /* navbar close and open scriript */
  function closeNav() {
    document.getElementById("menu").style.width = "0%";
    document.getElementById("menu").style.minWidth = "0%";
    document.getElementById("menu").style.padding = "0";
    document.getElementsByClassName("fa-bars")[0].style.display = "block";
    document.getElementsByClassName("fa-times")[0].style.display = "none";
  }

  function openNav() {
    document.getElementById("menu").style.width =
      document.getElementById("menu").style.width = "420px";
    document.getElementById("menu").style.maxWidth = "100%";
    document.getElementById("menu").style.padding = "56px 51px 80px 75px";
    document.getElementsByClassName("fa-bars")[0].style.display = "none";
    document.getElementsByClassName("fa-times")[0].style.display = "block";
  }
  /* navbar close and open scriript son*/

  /*navbar script son */


  
/* Script show filter menu for product */

  let filterProductShow = document.getElementById("filter-product")
  filterProductShow.addEventListener("mouseenter", () => {
    document.getElementById("filter").style.display = "block";
  });
  filterProductShow.addEventListener("mouseleave", () => {
    document.getElementById("filter").style.display = "none";
  });
  let filterMenuShow = document.getElementById("filter")
  filterMenuShow.addEventListener("mouseenter", () => {
    document.getElementById("filter").style.display = "block";
  });
  filterMenuShow.addEventListener("mouseleave", () => {
    document.getElementById("filter").style.display = "none";
  });

/*Script show filter menu for product son*/

/* vegas slider script start */
$("#slider").vegas({
    slides: [
      { src: "../../image/slider-photo/slider1.jpg" },
      { src: "../../image/slider-photo/slider2.jpg" },
      { src: "../../image/slider-photo/slider3.jpg" }
    ],
    animation: ['kenburnsUpRight']
  });
/* vegas slider script son*/

/* Progressbar script for progress plugin */
$('#demoprogressbar5').LineProgressbar({
	fillBackgroundColor: '#1abc9c'
});
$('#demoprogressbar6').LineProgressbar({
	fillBackgroundColor: '#f34f3f'
});
$('#demoprogressbar7').LineProgressbar({
	fillBackgroundColor: '##f34f3f'
});
/* Progressbar script son */