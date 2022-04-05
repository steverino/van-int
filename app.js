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

window.addEventListener("DOMContentLoaded", function () {
    displayCards(cards);
});

function displayCards(card) {
   
    let displayCard = card.map(function (item) {
      return `<div class="card-container" >
      <h2>${item.title}</h2>
       <ul>
         <li class="card-image">
           <img src="images/card${item.id}.jpg" alt="${item.title}">
           
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




