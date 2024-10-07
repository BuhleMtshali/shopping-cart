import { data } from "./data.js";
console.log(data);
let menuContainer = document.getElementById("menu-container");
let html = "";

data.forEach((card) => {
  html += `<div class="card">
          <div class="image">
            <img src="${card.image.desktop}" alt="${card.name}" />
          </div>
          <!-- end of image -->
          <div class="info">
              <h3>${card.name}</h3>
              <p>Category: ${card.category}</p>
              <p>Price: $${card.price.toFixed(2)}</p>
            </div>
            <!-- end of info -->
          <div class="addBtn">
            <img
              src="img/icon-add-to-cart.svg"
              alt="add to cart"
              class="cart"
            />
            <button>Add to Cart</button>
          </div>
          <!-- end of add btn -->
        </div>`;
});

menuContainer.innerHTML = html;
