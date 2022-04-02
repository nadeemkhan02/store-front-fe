var page = document.querySelector("#cart-page");

const card = (id, cardName, price) =>
  ` <div class="item-card  card${id}">
    <div class="product-image cart-card">
      <img width="180px" src="./images/product.jpeg" alt="product image" />
      <img class="cart-cross-img" onclick="handleRemoveCart(${id})" src="./images/cross.png" alt="cross-btn" />
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

const getCartData = () => {
  const cardData = JSON.parse(localStorage.getItem("cart"));
  var cards = "";
  if (cardData?.length === 0) {
    page.innerHTML = "";
    window.location.replace("/");
  } else {
    cardData.forEach((item, index) => {
      cards = cards + card(item.id, item.cardName, item.price);
      if (index === cardData.length - 1) {
        page.innerHTML = cards;
      }
    });
  }
};
getCartData();
const handleRemoveCart = (id) => {
  const CartData = JSON.parse(localStorage.getItem("cart"));
  const filteredCartData = CartData.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(filteredCartData));
  getCartData();
};
