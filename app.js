const cards = [
  {
    id: 1,
    image: "assets/images/card1.jpg",
    title: "Unique Unicorn",
    owner: "Jacob",
    price: "$10",
    forSale: true,
  },
  {
    id: 2,
    image: "assets/images/card2.jpg",
    title: "Peppy Puppy",
    owner: "Jacky",
    price: "",
    forSale: false,
  },
  {
    id: 3,
    image: "assets/images/card3.jpg",
    title: "Alert Alligator",
    owner: "John",
    price: "$12",
    forSale: true,
  },
  {
    id: 4,
    image: "assets/images/card4.jpg",
    title: "Happy Hippo",
    owner: "Jacob",
    price: "$15",
    forSale: true,
  },
  {
    id: 5,
    image: "assets/images/card5.jpg",
    title: "Silly Squirrel",
    owner: "James",
    price: "",
    forSale: false,
  },
  {
    id: 6,
    image: "assets/images/card6.jpg",
    title: "Gary Bee",
    owner: "John",
    price: "$10",
    forSale: true,
  },
  {
    id: 7,
    image: "assets/images/card7.jpg",
    title: "Gifted Gopher",
    owner: "Venom",
    price: "$10",
    forSale: true,
  },
  {
    id: 8,
    image: "assets/images/card8.jpg",
    title: "Karma Kat",
    owner: "Gary",
    price: "$100",
    forSale: false,
  },
  {
    id: 9,
    image: "assets/images/card9.jpg",
    title: "Lit Lamb",
    owner: "Gary",
    price: "$150",
    forSale: true,
  },
  {
    id: 10,
    image: "assets/images/card1.jpg",
    title: "Another Unique Unicorn",
    owner: "Jacob",
    price: "$10",
    forSale: true,
  },
];

const btns = document.querySelectorAll(".tab-btn");
const tabContainer = document.querySelector(".tab-container");
const btnAllCards = document.getElementById('all-cards');
const btnCreateCard = document.getElementById('create-card');
const cardContainer = document.querySelector('.card-container');

// form variables
const formContainer = document.getElementById('form-container');
const form = document.querySelector(".card-form");
const alert = document.querySelector(".alert");
const submitBtn = document.querySelector(".submit-btn");

let cardTitle = document.querySelector("#card-title");
let cardOwner = document.querySelector("#card-owner");
let cardPrice = document.querySelector("#card-price");
let cardStatus = document.querySelectorAll('input[name="card-status"]');

const tempResult = document.querySelector(".img-upload");

// submit form
// form.addEventListener("submit", addCard);

// btns.addEventListener('click', function(){
//   btns.classList.toggle('active');
// });

btnAllCards.addEventListener('click', function(){
  btnAllCards.classList.add('active');
  btnCreateCard.classList.remove('active');
  outer.classList.add('visible');
  formContainer.classList.remove('visible');
});

btnCreateCard.addEventListener('click', function(){
  btnAllCards.classList.remove('active');
  btnCreateCard.classList.add('active');
  
});


function addCard(e) {
  e.preventDefault();
  cardTitle = cardTitle.value;
  cardOwner = cardOwner.value;
  cardPrice = cardPrice.value;
  cardStatus = cardStatus.value;
  // console.log(cardTitle, cardOwner, cardTitle);
  tempResult.innerHTML = cardTitle + "<br>" + cardOwner + "<br>" + cardPrice + "<br>" + cardStatus;
  // insert into database
}

tabContainer.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    //remove active from btns
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
  }
  console.log(btns);
});

class Card {
  constructor(id, image, title, owner, price, forSale) {
    this.id = cards.id;
    this.image = cards.image;
    this.title = cards.title;
    this.owner = cards.owner;
    this.price = cards.price;
    this.forSale = cards.forSale;
  }
}

const container = document.querySelector("#outer");
container.style.classList
window.addEventListener("DOMContentLoaded", function () {
  displayCards(cards);
  displayForm(formContainer);
});

function displayCards(card) {
  let displayCard = card.map(function (item, index) {
    index = index + 1; // item.id could be used for image
    return `<div class="card-container" >
      <h2>${item.title} </h2>
       <ul>
         <li class="card-image">
           <img src="images/card${index}.jpg" alt="${item.title}">
           
         </li>
         <li>${item.title}</li>
         <hr />
         <li>${item.owner}</li>
       </ul>
       <button class="btn buy-btn">
         <ul>
           <li>BUY</li>
           <li>${item.price}</li>
         </ul>
       </button>
       </div>`;
  });
  displayCard = displayCard.join("");
  container.innerHTML = displayCard;
}

function displayForm(formContainer) {
    let formDisplay = formContainer.map(function (item, index) {
    return `<section id="form-container">
    <div class="img-upload"></div>
    <div class="form-input">
        <form class="card-form">
            <p class="alert"></p>
            <label for="card-title">Card Title</label>
            <input type="text" name="card-title" id="card-title">
            
            <label for="card-owner">Card Owner</label>
            <input type="text" name="card-owner" id="card-owner">
            
            <label for="card-price">Card Price</label>
            <input type="text" name="card-price" id="card-price">
            
            <label for="for-sale">For Sale</label>
            <input type="radio" name="card-status" id="for-sale" value="For Sale" checked><!-- for sale, not for sale dropdown or radio -->
            <label for=" not-sale">Not For Sale</label>
            <input type="radio" name="card-status" id="not-sale" value="NOT For Sale"><!-- for sale, not for sale dropdown or radio -->
            <br>
            <button type="submit" class="submit-btn">submit</button>
        </form>
    </div>
</section>`;
});
  formDisplay = formDisplay.join("");
  container.innerHTML = formDisplay;
}