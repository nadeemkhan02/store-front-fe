if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}

const card = (id, cardName, price) =>
  ` <div onclick="handleCardClick(${id})" class="item-card card${id}">
    <div class="product-image">
      <img width="180px" src="./images/product.jpeg" alt="product image" />
    </div>
    <div>
      <p class="product-rating">
        4.6 <img src="./images/Vector (28).svg" />|9.3k
      </p>
      <h2 class="product-name">${cardName}</h2>
      <p class="product-des">Full high</p>
      <p class="product-price">
        <b>RS.${price}</b><del>RS.${Number(price) + 20}</del><span>&nbsp;(${
    100 - Math.floor((Number(price) * 100) / (Number(price) + 20))
  }% OFF)</span>
      </p>
    </div>
    </div>`;
const cardData = [
  { id: 0, cardName: "watch", price: "200" },
  { id: 1, cardName: "mobile", price: "300" },
  { id: 2, cardName: "laptop", price: "500" },
  { id: 3, cardName: "TV", price: "800" },
  { id: 4, cardName: "Earphone", price: "10" },
  { id: 5, cardName: "Fridge", price: "1000" },
  { id: 6, cardName: "T-shirt", price: "200" },
  { id: 7, cardName: "T-shirt", price: "200" },
  { id: 8, cardName: "T-shirt", price: "200" },
  { id: 9, cardName: "T-shirt", price: "200" },
  { id: 10, cardName: "T-shirt", price: "200" },
];
var page = document.querySelector("#product-page");
let cards = "";

cardData.forEach((item, index) => {
  cards = cards + card(item.id, item.cardName, item.price);
  if (index === cardData.length - 1) {
    page.innerHTML = cards;
  }
});

const handleCardClick = (id) => {
  window.location.replace(`/cart.html`);
  const slectedProduct = cardData.filter((item) => item.id === id);
  const CartData = [
    ...slectedProduct,
    ...JSON.parse(localStorage.getItem("cart")),
  ];
  console.log(CartData, slectedProduct);
  localStorage.setItem("cart", JSON.stringify(CartData));
};
